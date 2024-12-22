import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';

function ReviewsPlatformList() {
  const platforms = [
    { name: 'Google', icon: <GoogleIcon />, connected: true },
    { name: 'Facebook', icon: <FacebookIcon />, connected: false },
    { name: 'Trustpilot', icon: <PublicIcon />, connected: false },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Review Platforms
      </Typography>

      <List>
        {platforms.map(platform => (
          <ListItem key={platform.name}>
            <ListItemIcon>{platform.icon}</ListItemIcon>
            <ListItemText
              primary={platform.name}
              secondary={platform.connected ? 'Connected' : 'Not connected'}
            />
            <Button
              variant={platform.connected ? 'outlined' : 'contained'}
              size="small"
              startIcon={platform.connected ? null : <AddIcon />}
            >
              {platform.connected ? 'Sync' : 'Connect'}
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default ReviewsPlatformList;
