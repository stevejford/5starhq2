import React, { useState, memo } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Collapse,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinningIcon = styled(RefreshIcon)`
  animation: ${spin} 4s linear infinite;
`;

const menuItems = [
  { icon: <StarOutlineIcon />, text: 'Reviews', path: '/reviews' },
  { icon: <SendOutlinedIcon />, text: 'Get Reviews', path: '/get-reviews' },
  { icon: <LinkOutlinedIcon />, text: 'Review Link', path: '/review-link' },
  { icon: <BarChartOutlinedIcon />, text: 'Analytics', path: '/analytics' },
  { icon: <AutoGraphOutlinedIcon />, text: 'Automate', path: '/automate' },
  { icon: <WidgetsOutlinedIcon />, text: 'Widgets', path: '/widgets' },
  { icon: <SettingsOutlinedIcon />, text: 'Settings', path: '/settings' },
];

const secondaryMenuItems = [
  { icon: <LocationOnOutlinedIcon />, text: 'Locations', path: '/locations' },
  { icon: <IntegrationInstructionsOutlinedIcon />, text: 'Integrations', path: '/integrations' },
  { icon: <GroupOutlinedIcon />, text: 'Business Users', path: '/business-users' },
  { icon: <ShareOutlinedIcon />, text: 'Social Sharing', path: '/social-sharing' },
  { icon: <NotificationsOutlinedIcon />, text: 'Notifications', path: '/notifications' }
];

const CompanyHeader = memo(() => (
  <Box sx={{ p: 2, pb: 0 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <img 
        src="/5star-logo.png" 
        alt="5 Star HQ" 
        style={{ 
          height: 72,
          width: 'auto'
        }} 
      />
      <IconButton 
        sx={{ 
          ml: 'auto', 
          color: 'white',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        <SpinningIcon />
      </IconButton>
    </Box>
    <Typography sx={{ 
      color: 'white', 
      fontSize: '15px',
      fontWeight: 500,
      mb: 2,
      opacity: 0.95
    }}>
      Millennium Granites
    </Typography>
  </Box>
));

export default function Layout() {
  const location = useLocation();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            bgcolor: '#4F46E5',
            color: 'white',
            borderRight: 'none',
          },
        }}
      >
        <CompanyHeader />
        <List sx={{ px: 2 }}>
          {menuItems.map((item) => (
            <ListItem 
              key={item.text} 
              disablePadding 
              sx={{ mb: 0.25 }}
            >
              <ListItemButton
                component={item.text === 'Settings' ? 'div' : Link}
                onClick={item.text === 'Settings' ? handleSettingsClick : undefined}
                to={item.text === 'Settings' ? undefined : item.path}
                sx={{
                  borderRadius: '8px',
                  mb: 0.25,
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-selected': {
                    bgcolor: 'rgba(255, 255, 255, 0.12)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                    },
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                  },
                  py: 0.75,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                selected={location.pathname === item.path}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemIcon sx={{ 
                    color: 'inherit',
                    minWidth: 36,
                    '& .MuiSvgIcon-root': {
                      fontSize: 20,
                    }
                  }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: '14px',
                        fontWeight: location.pathname === item.path ? 500 : 400,
                      }
                    }}
                  />
                </Box>
                {item.text === 'Settings' && (
                  settingsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Collapse in={settingsOpen}>
          <List sx={{ px: 2 }}>
            {secondaryMenuItems.map((item) => (
              <ListItem 
                key={item.text} 
                disablePadding 
                sx={{ mb: 0.25 }}
              >
                <ListItemButton
                  component={Link}
                  to={item.path}
                  sx={{
                    borderRadius: '8px',
                    mb: 0.25,
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-selected': {
                      bgcolor: 'rgba(255, 255, 255, 0.12)',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.15)',
                      },
                    },
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                    },
                    py: 0.75,
                  }}
                  selected={location.pathname === item.path}
                >
                  <ListItemIcon sx={{ 
                    color: 'inherit',
                    minWidth: 36,
                    '& .MuiSvgIcon-root': {
                      fontSize: 20,
                    }
                  }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: '14px',
                        fontWeight: location.pathname === item.path ? 500 : 400,
                      }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>

        <Box sx={{ 
          mt: 'auto', 
          p: 2, 
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <img 
            src="https://www.google.com/favicon.ico"
            alt="Google" 
            style={{ 
              width: 20,
              height: 20,
              borderRadius: '50%'
            }} 
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography sx={{ 
              color: '#F59E0B',
              fontSize: '14px',
              fontWeight: 500,
            }}>
              66
            </Typography>
            <StarIcon sx={{ color: '#F59E0B', fontSize: 16 }} />
            <Typography sx={{ 
              color: 'white',
              fontSize: '14px',
              ml: 0.5
            }}>
              4.5
            </Typography>
          </Box>
          <Box sx={{
            flex: 1,
            height: 4,
            bgcolor: 'rgba(255, 255, 255, 0.12)',
            borderRadius: 2,
            ml: 1
          }}>
            <Box sx={{
              width: '90%',
              height: '100%',
              bgcolor: 'white',
              borderRadius: 2
            }} />
          </Box>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
