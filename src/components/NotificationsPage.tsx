import React, { useState } from 'react';
import {
  Box,
  Typography,
  InputBase,
  Button,
  Switch,
  Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const MainInput = styled(InputBase)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#F9FAFB',
  borderRadius: '8px',
  border: '1px solid #E5E7EB',
  '& .MuiInputBase-input': {
    padding: '12px 16px',
    fontSize: '14px',
    color: '#6B7280',
    '&::placeholder': {
      color: '#6B7280',
      opacity: 1,
    },
  },
}));

const EditButton = styled(Button)({
  color: '#6366F1',
  fontSize: '14px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '8px 12px',
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const CustomSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: '#E5E7EB',
    opacity: 1,
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#fff',
    width: 16,
    height: 16,
    margin: 2,
  },
  '& .Mui-checked': {
    '& + .MuiSwitch-track': {
      backgroundColor: '#6366F1 !important',
      opacity: 1,
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#fff',
    },
  },
}));

const WhiteCard = styled(Box)({
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  padding: '24px',
  height: '210px',
  boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
});

const NotificationsPage: React.FC = () => {
  const [notificationEmail, setNotificationEmail] = useState('');
  const [replyEmail, setReplyEmail] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleNotificationEmailEdit = () => {
    // Handle notification email edit
  };

  const handleReplyEmailEdit = () => {
    // Handle reply email edit
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 600,
          color: '#111827',
          mb: 1
        }}
      >
        Notifications And Replies
      </Typography>
      <Typography 
        sx={{ 
          color: '#6B7280',
          mb: 3,
          fontSize: '14px'
        }}
      >
        Update your notification preferences and reply-to email address.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <WhiteCard>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>
                Notifications
              </Typography>
              <RemoveRedEyeOutlinedIcon sx={{ fontSize: 20, color: '#111827' }} />
            </Box>
            
            <Typography 
              sx={{ 
                color: '#6B7280',
                mb: 3,
                fontSize: '14px'
              }}
            >
              Update the email address where you receive daily notifications with new reviews or private feedback.
            </Typography>

            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 2
            }}>
              <MainInput
                placeholder="Email for notifications"
                value={notificationEmail}
                fullWidth
              />
              <EditButton onClick={handleNotificationEmailEdit}>
                Edit
              </EditButton>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CustomSwitch
                checked={notificationsEnabled}
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
              />
            </Box>
          </WhiteCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <WhiteCard>
            <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#111827', mb: 1 }}>
              Replies
            </Typography>
            <Typography 
              sx={{ 
                color: '#6B7280',
                mb: 3,
                fontSize: '14px'
              }}
            >
              Update the email address clients will use to respond to your review requests.
            </Typography>

            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <MainInput
                placeholder="Email for replies"
                value={replyEmail}
                fullWidth
              />
              <EditButton onClick={handleReplyEmailEdit}>
                Edit
              </EditButton>
            </Box>
          </WhiteCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotificationsPage;
