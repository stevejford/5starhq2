import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Rating,
  Stack,
  Alert,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ReviewsOverview from '../components/ReviewsOverview';
import type { BusinessSearchResult } from '../types/business';
import { useReviewService } from '../hooks/useReviewService';

function Dashboard() {
  const [selectedBusinessId, setSelectedBusinessId] = React.useState<string | null>(null);
  const { getBusinessOverview } = useReviewService();
  const { data: overview, isLoading, error } = getBusinessOverview(selectedBusinessId);

  const handleBusinessSelect = async (business: BusinessSearchResult) => {
    setSelectedBusinessId(business.place_id);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          Business Review Analytics
        </Typography>

        <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 2, bgcolor: 'background.paper' }}>
          {/* <BusinessSearch onBusinessSelect={handleBusinessSelect} /> */}
        </Paper>

        {isLoading && (
          <Box sx={{ width: '100%', mt: 2 }}>
            <LinearProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            Error loading business data: {error.message}
          </Alert>
        )}

        {selectedBusinessId && overview && (
          <>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} md={4}>
                <Card elevation={2} sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <StarIcon color="primary" sx={{ fontSize: 40 }} />
                      <Box>
                        <Typography color="textSecondary" variant="subtitle2">
                          Average Rating
                        </Typography>
                        <Typography variant="h4">
                          {overview?.averageRating?.toFixed(1) || 'N/A'}
                          <Rating 
                            value={overview?.averageRating || 0} 
                            readOnly 
                            size="small" 
                            sx={{ ml: 1 }}
                          />
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card elevation={2} sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <ReviewsIcon color="primary" sx={{ fontSize: 40 }} />
                      <Box>
                        <Typography color="textSecondary" variant="subtitle2">
                          Total Reviews
                        </Typography>
                        <Typography variant="h4">
                          {overview.totalReviews}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card elevation={2} sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <TrendingUpIcon color="primary" sx={{ fontSize: 40 }} />
                      <Box>
                        <Typography color="textSecondary" variant="subtitle2">
                          Connected Platforms
                        </Typography>
                        <Typography variant="h4">
                          {overview.connectedPlatforms}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <ReviewsOverview overview={overview} />
          </>
        )}
      </Box>
    </Container>
  );
}

export default Dashboard;
