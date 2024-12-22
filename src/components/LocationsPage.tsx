import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Card,
  Button,
  InputBase,
  Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface Location {
  id: number;
  name: string;
  logo: string;
  smallLogo: string;
  date: string;
  verified: boolean;
}

export default function LocationsPage() {
  const [locations, setLocations] = useState<Location[]>([
    {
      id: 1,
      name: 'Millennium Granites',
      logo: '/688kxU.png',
      smallLogo: '/688kxU.png',
      date: 'Nov 8, 2024',
      verified: true
    }
  ]);

  return (
    <Box sx={{ pl: '326px', pr: '326px', pt: '24px', pb: '24px', maxWidth: '100%' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: '#111827' }}>
          Locations
        </Typography>
        
        {/* Search Bar */}
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            boxShadow: 'none'
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>

      {/* Locations Grid */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 3,
        mt: 4
      }}>
        {/* Add New Location Card */}
        <Card 
          sx={{ 
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '240px',
            border: '1px solid #F3F4F6',
            borderRadius: '12px',
            bgcolor: '#FFFFFF',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
            }
          }}
        >
          <Box sx={{ 
            width: '48px', 
            height: '48px', 
            borderRadius: '50%', 
            bgcolor: '#F9FAFB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2
          }}>
            <AddIcon sx={{ color: '#9CA3AF', fontSize: 24 }} />
          </Box>
          <Typography sx={{ 
            color: '#6B7280', 
            fontSize: '0.875rem',
            fontWeight: 500
          }}>
            Add New Location
          </Typography>
        </Card>

        {/* Location Cards */}
        {locations.map((location) => (
          <Card 
            key={location.id}
            sx={{ 
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              minHeight: '240px',
              border: '1px solid #F3F4F6',
              borderRadius: '12px',
              bgcolor: '#FFFFFF',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
              position: 'relative'
            }}
          >
            {/* Top Icons */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'absolute',
              top: 16,
              left: 16,
              right: 16
            }}>
              {location.verified && (
                <CheckCircleOutlineIcon sx={{ color: '#10B981' }} />
              )}
              <DeleteOutlineIcon sx={{ color: '#6B7280', cursor: 'pointer' }} />
            </Box>

            {/* Main Logo */}
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 5,
              height: '47px',
              mb: 2
            }}>
              <img 
                src={location.logo} 
                alt={location.name}
                style={{ 
                  height: '47px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </Box>

            {/* Location Name */}
            <Typography 
              sx={{ 
                textAlign: 'center',
                fontWeight: 500,
                color: '#111827',
                mt: 0,
                mb: 1
              }}
            >
              {location.name}
            </Typography>

            {/* Date */}
            <Typography 
              sx={{ 
                textAlign: 'center',
                color: '#6B7280',
                fontSize: '0.875rem',
                mb: 3
              }}
            >
              {location.date}
            </Typography>

            {/* Edit Button */}
            <Button
              variant="outlined"
              sx={{
                mt: 'auto',
                color: '#6B7280',
                borderColor: '#E5E7EB',
                borderRadius: '20px',
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#D1D5DB',
                  bgcolor: 'transparent'
                }
              }}
            >
              Edit
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
