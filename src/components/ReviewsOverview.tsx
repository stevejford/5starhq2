import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Rating,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  LinearProgress,
} from '@mui/material';
import type { BusinessOverview } from '../types/business';
import { format } from 'date-fns';

interface ReviewsOverviewProps {
  overview: BusinessOverview;
}

function ReviewsOverview({ overview }: ReviewsOverviewProps) {
  const ratingCounts = (overview.reviews || []).reduce((acc, review) => {
    const rating = Math.floor(review.rating);
    acc[rating] = (acc[rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const getRatingPercentage = (rating: number) => {
    return ((ratingCounts[rating] || 0) / (overview.totalReviews || 0)) * 100;
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        Reviews Analysis
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
            <Typography variant="h6" gutterBottom>
              Rating Distribution
            </Typography>
            <Box sx={{ mt: 2 }}>
              {[5, 4, 3, 2, 1].map((rating) => (
                <Box key={rating} sx={{ mb: 1.5 }}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 0.5 }}>
                    <Box sx={{ minWidth: 45 }}>
                      <Rating value={rating} readOnly size="small" />
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={getRatingPercentage(rating)}
                      sx={{
                        flexGrow: 1,
                        height: 8,
                        borderRadius: 4,
                        bgcolor: 'grey.100',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          bgcolor: rating >= 4 ? 'success.main' : rating === 3 ? 'warning.main' : 'error.main',
                        },
                      }}
                    />
                    <Typography variant="body2" color="textSecondary" sx={{ minWidth: 40 }}>
                      {ratingCounts[rating] || 0}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
            <Typography variant="h6" gutterBottom>
              Recent Reviews
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              {(overview.reviews || []).slice(0, 5).map((review, index) => (
                <Card key={index} elevation={0} sx={{ bgcolor: 'grey.50', borderRadius: 2 }}>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        {review.author_name?.[0]?.toUpperCase() || '?'}
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                            {review.author_name}
                          </Typography>
                          <Chip
                            label={review.platform.name}
                            size="small"
                            sx={{ bgcolor: 'primary.main', color: 'white' }}
                          />
                        </Stack>
                        <Rating value={review.rating} readOnly size="small" sx={{ my: 1 }} />
                        <Typography variant="body2" color="textSecondary" paragraph>
                          {review.text}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {format(new Date(review.time * 1000), 'MMM d, yyyy')}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReviewsOverview;
