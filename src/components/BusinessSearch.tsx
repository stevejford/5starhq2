import React, { useState, useCallback } from 'react';
import {
  TextField,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CircularProgress,
  Typography,
  InputAdornment,
  Alert,
  Fade,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleMapsService from '../services/googleMapsLoader';
import type { BusinessSearchResult } from '../types/business';
import { debounce } from 'lodash';

interface BusinessSearchProps {
  onBusinessSelect: (business: BusinessSearchResult) => void;
}

interface Prediction {
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

function BusinessSearch({ onBusinessSelect }: BusinessSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchPlaces = useCallback(
    debounce(async (input: string) => {
      if (!input.trim()) {
        setPredictions([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const results = await GoogleMapsService.getPlacePredictions(input);
        setPredictions(results);
      } catch (err) {
        console.error('Error searching places:', err);
        setError('Failed to search places. Please try again.');
        setPredictions([]);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    searchPlaces(value);
  };

  const handlePredictionSelect = async (prediction: Prediction) => {
    try {
      setLoading(true);
      setError(null);
      const details = await GoogleMapsService.getPlaceDetails(prediction.place_id);
      
      onBusinessSelect({
        id: details.place_id,
        name: details.name,
        address: details.formatted_address,
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
      });
      
      setSearchTerm('');
      setPredictions([]);
    } catch (err) {
      console.error('Error getting place details:', err);
      setError('Failed to get business details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextField
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for a business..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: loading && (
            <InputAdornment position="end">
              <CircularProgress size={20} />
            </InputAdornment>
          ),
        }}
      />

      {error && (
        <Fade in={!!error}>
          <Alert severity="error" sx={{ mt: 1 }}>
            {error}
          </Alert>
        </Fade>
      )}

      {predictions.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            mt: 1,
            zIndex: 1000,
          }}
        >
          <List>
            {predictions.map((prediction) => (
              <ListItem
                key={prediction.place_id}
                button
                onClick={() => handlePredictionSelect(prediction)}
              >
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary={prediction.structured_formatting.main_text}
                  secondary={prediction.structured_formatting.secondary_text}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}

export default BusinessSearch;
