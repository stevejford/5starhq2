import React from 'react';
import { Box, Typography, Button, Card, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import StarIcon from '@mui/icons-material/Star';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

// Custom icons for the funnel metrics
const InvitesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    {/* Add SVG path for invite icon */}
  </svg>
);

const VisitsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    {/* Add SVG path for visits icon */}
  </svg>
);

const QRCodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    {/* Add SVG path for QR code icon */}
  </svg>
);

const ReviewsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    {/* Add SVG path for reviews icon */}
  </svg>
);

const NegativeFeedbackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    {/* Add SVG path for negative feedback icon */}
  </svg>
);

const AnalyticsPage: React.FC = () => {
  // Chart data
  const reviewsGrowthData = {
    labels: ['December 16', 'December 17', 'December 18', 'December 19', 'December 20', 'December 21', 'December 22'],
    datasets: [{
      data: [65, 65, 65, 65, 65, 65, 65],
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.05)',
      fill: true,
      tension: 0,
      borderWidth: 2,
    }]
  };

  const ratingGrowthData = {
    labels: ['December 16', 'December 17', 'December 18', 'December 19', 'December 20', 'December 21', 'December 22'],
    datasets: [{
      data: [4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5],
      borderColor: '#F59E0B',
      backgroundColor: 'rgba(245, 158, 11, 0.05)',
      fill: true,
      tension: 0,
      borderWidth: 2,
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(229, 231, 235, 0.5)',
          drawBorder: false,
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(229, 231, 235, 0.5)',
          drawBorder: false,
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#F9FAFB', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 3
      }}>
        <Box>
          <Typography variant="h5" sx={{ color: '#111827', fontWeight: 600, mb: 0.5 }}>
            Analytics
          </Typography>
          <Typography variant="body2" sx={{ color: '#6B7280' }}>
            Track the progress of your online reputation over time. The data is updated daily.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button
            startIcon={<RefreshIcon />}
            sx={{
              color: '#6366F1',
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'transparent',
                color: '#4F46E5',
              }
            }}
          >
            Reload
          </Button>
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: '#111827',
              textTransform: 'none',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              px: 2,
              py: 1,
              bgcolor: 'white',
              '&:hover': {
                bgcolor: 'white',
                borderColor: '#D1D5DB',
              }
            }}
          >
            Last 7 Days
          </Button>
        </Box>
      </Box>

      {/* Grid Layout */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: 3
      }}>
        {/* New Public Reviews Card */}
        <Card sx={{ 
          p: 3, 
          borderRadius: '12px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        }}>
          <Typography variant="body2" sx={{ color: '#6B7280', mb: 1 }}>
            Last 7 Days
          </Typography>
          <Typography variant="h6" sx={{ color: '#111827', fontWeight: 600, mb: 2 }}>
            New Public Reviews
          </Typography>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            mb: 3
          }}>
            <Box sx={{
              bgcolor: '#6366F1',
              color: 'white',
              borderRadius: '50%',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 700,
            }}>
              +1
            </Box>
          </Box>
          <Typography variant="subtitle2" sx={{ color: '#111827', mb: 2 }}>
            Number of New Public Reviews
          </Typography>
          {[5,4,3,2,1].map((rating, index) => (
            <Box key={rating} sx={{ 
              display: 'flex', 
              alignItems: 'center',
              mb: 1,
              height: 28
            }}>
              <StarIcon sx={{ color: '#F59E0B', mr: 1, fontSize: 20 }} />
              <Typography sx={{ 
                color: '#111827', 
                minWidth: 24,
                mr: 2
              }}>{rating}</Typography>
              <Typography sx={{ 
                color: '#6B7280',
                mr: 2,
                minWidth: 20,
                textAlign: 'center'
              }}>
                {rating === 5 ? '1' : '0'}
              </Typography>
              {rating === 5 && (
                <Box sx={{
                  flex: 1,
                  height: 4,
                  bgcolor: '#6366F1',
                  borderRadius: 2
                }} />
              )}
              {rating !== 5 && (
                <Box sx={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end'
                }}>
                  <Box sx={{ 
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: '#6366F1'
                  }} />
                </Box>
              )}
            </Box>
          ))}
        </Card>

        {/* Reviews Growth Chart */}
        <Card sx={{ 
          p: 3, 
          borderRadius: '12px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ color: '#111827', fontWeight: 600 }}>
              Reviews Growth
            </Typography>
            <IconButton size="small" sx={{ ml: 1, color: '#6B7280' }}>
              <HelpOutlineIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
          <Box sx={{ height: 300 }}>
            <Line data={reviewsGrowthData} options={chartOptions} />
          </Box>
        </Card>

        {/* Review Funnel Card */}
        <Card sx={{ 
          p: 3, 
          borderRadius: '12px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ color: '#111827', fontWeight: 600 }}>
              Review Funnel
            </Typography>
            <IconButton size="small" sx={{ ml: 1, color: '#6B7280' }}>
              <HelpOutlineIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
          {/* Funnel Metrics */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { icon: <InvitesIcon />, label: 'Invites Sent', value: 0, color: '#FF9800', bgColor: '#FFA726' },
              { icon: <VisitsIcon />, label: 'Total Unique Visits', value: 0, color: '#2196F3', bgColor: '#42A5F5' },
              { icon: <QRCodeIcon />, label: 'QR Code Unique Visits', value: 0, color: '#2196F3', bgColor: '#42A5F5' },
              { icon: <ReviewsIcon />, label: 'New Public Reviews', value: 1, color: '#4CAF50', bgColor: '#66BB6A' },
              { icon: <NegativeFeedbackIcon />, label: 'Negative Feedback', value: 0, color: '#F44336', bgColor: '#EF5350' },
            ].map((metric) => (
              <Box
                key={metric.label}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: metric.bgColor,
                  borderRadius: '24px',
                  py: 1.5,
                  px: 2,
                  color: 'white',
                }}
              >
                <Box sx={{ 
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center'
                }}>{metric.icon}</Box>
                <Typography sx={{ 
                  flex: 1,
                  fontSize: '14px',
                  fontWeight: 500
                }}>{metric.label}</Typography>
                <Typography sx={{ 
                  fontWeight: 600,
                  fontSize: '16px'
                }}>
                  {metric.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Card>

        {/* Average Rating Growth Chart */}
        <Card sx={{ 
          p: 3, 
          borderRadius: '12px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ color: '#111827', fontWeight: 600 }}>
              Average Rating Growth
            </Typography>
            <IconButton size="small" sx={{ ml: 1, color: '#6B7280' }}>
              <HelpOutlineIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
          <Box sx={{ height: 300 }}>
            <Line data={ratingGrowthData} options={chartOptions} />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default AnalyticsPage;
