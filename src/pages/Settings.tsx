import React from 'react';
import { Box } from '@mui/material';
import NotificationsPage from '../components/NotificationsPage';

function Settings() {
  return (
    <Box sx={{ 
      bgcolor: '#F9FAFB',
      minHeight: '100vh',
      width: '100%'
    }}>
      <NotificationsPage />
    </Box>
  );
}

export default Settings;
