import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InstagramIcon from '@mui/icons-material/Instagram';

interface ReviewProps {
  review: {
    id: string;
    author: string;
    date: string;
    rating: number;
    content: string;
    platform: string;
    location: string;
    verified?: boolean;
    hasEmail?: boolean;
    hasPhone?: boolean;
  };
}

export default function ReviewCard({ review }: ReviewProps) {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Box key={index} component="span" sx={{ color: index < rating ? '#FFB400' : 'rgba(0, 0, 0, 0.12)', mr: 0.5 }}>
        {index < rating ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
      </Box>
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Box sx={{
      backgroundColor: 'white',
      borderRadius: 2,
      p: 2,
      mb: 2,
      position: 'relative',
      border: '1px solid rgba(0, 0, 0, 0.12)'
    }}>
      {/* Platform Badge */}
      <Box sx={{
        position: 'absolute',
        right: 16,
        top: 16,
        width: 24,
        height: 24
      }}>
        <img
          src={`/temp_project/public/platform-icons/${review.platform}.svg`}
          alt={`${review.platform} logo`}
          style={{ width: '100%', height: '100%' }}
        />
      </Box>

      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
        {/* Avatar */}
        <Box sx={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          backgroundColor: '#FF8C00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.25rem',
          fontWeight: 500,
          mr: 2
        }}>
          {getInitials(review.author)}
        </Box>

        {/* User Info */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
            <Typography sx={{ fontWeight: 500, mr: 1 }}>
              {review.author}
            </Typography>
            {review.verified && (
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                color: '#4CAF50',
                borderRadius: 1,
                px: 1,
                py: 0.25,
                fontSize: '0.75rem'
              }}>
                <VerifiedIcon sx={{ fontSize: '0.875rem', mr: 0.5 }} />
                Verified
              </Box>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {review.date}
            </Typography>
            {(review.hasEmail || review.hasPhone) && (
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {review.hasEmail && <EmailOutlinedIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />}
                {review.hasPhone && <PhoneOutlinedIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />}
              </Box>
            )}
          </Box>
        </Box>

        {/* Location */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
          <LocationOnOutlinedIcon sx={{ fontSize: '1rem' }} />
          <Typography variant="body2">{review.location}</Typography>
        </Box>
      </Box>

      {/* Rating */}
      <Box sx={{ mb: 1.5 }}>
        {renderStars(review.rating)}
      </Box>

      {/* Content */}
      <Typography sx={{ mb: 2, color: 'text.primary', fontSize: '0.875rem' }}>
        {review.content}
      </Typography>

      {/* Actions */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#5861c5',
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#4a51a5'
            }
          }}
        >
          Reply
        </Button>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <CheckCircleOutlineIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <DeleteOutlineIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
