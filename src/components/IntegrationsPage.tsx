import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Card,
  Button,
  InputAdornment,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { LAYOUT } from '../theme/theme';

// Integration platform type
interface Platform {
  id: string;
  name: string;
  icon: string;
  isConnected?: boolean;
}

// Styled components
const IntegrationCard = styled(Card)(({ theme }) => ({
  width: '240px',
  height: '205px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px 16px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const PlatformIcon = styled('img')({
  width: '56px',
  height: '56px',
  objectFit: 'contain',
  marginBottom: '8px',
});

const IntegrationButton = styled(Button)(({ theme }) => ({
  ...theme.typography.button,
  width: '100%',
  maxWidth: '180px',
  height: LAYOUT.button.height,
  borderRadius: '20px',
  marginTop: '8px',
}));

// Sample platforms data
const platforms: Platform[] = [
  { id: 'google', name: 'Google', icon: '/integration_images/google.webp', isConnected: true },
  { id: 'facebook', name: 'Facebook', icon: '/integration_images/facebook.webp' },
  { id: 'trustpilot', name: 'Trustpilot', icon: '/integration_images/trustpilot.webp' },
  { id: 'tripadvisor', name: 'Tripadvisor', icon: '/integration_images/tripadvisor.webp' },
  { id: 'custom', name: 'Custom Integration', icon: '/integration_images/custom.webp' },
  { id: 'booking', name: 'Booking.com', icon: '/integration_images/booking.com.webp' },
  { id: 'airbnb', name: 'Airbnb', icon: '/integration_images/airbnb.webp' },
  { id: 'googleplay', name: 'Google Play', icon: '/integration_images/googleplay.webp' },
  { id: 'appstore', name: 'App Store', icon: '/integration_images/appstore.webp' },
  { id: 'yelp', name: 'Yelp', icon: '/integration_images/yelp.webp' },
  { id: 'agoda', name: 'Agoda', icon: '/integration_images/agoda.webp' },
  { id: 'amazon', name: 'Amazon', icon: '/integration_images/amazon.webp' },
  { id: 'ebay', name: 'eBay', icon: '/integration_images/ebay.webp' },
  { id: 'yellowpages', name: 'Yellow Pages', icon: '/integration_images/yellowpages.webp' },
  { id: 'hotels', name: 'Hotels.com', icon: '/integration_images/hotels.com.webp' },
  { id: 'opentable', name: 'OpenTable', icon: '/integration_images/opentable.webp' },
  { id: 'healthgrades', name: 'Healthgrades', icon: '/integration_images/healthgrades.webp' },
  { id: 'ratemds', name: 'RateMDs', icon: '/integration_images/ratemds.webp' },
  { id: 'aliexpress', name: 'AliExpress', icon: '/integration_images/aliexpress.webp' },
  { id: 'angi', name: 'Angi', icon: '/integration_images/angi.webp' },
  { id: 'avvo', name: 'Avvo', icon: '/integration_images/avvo.webp' },
  { id: 'bbb', name: 'Better Business Bureau', icon: '/integration_images/bbb.webp' },
  { id: 'capterra', name: 'Capterra', icon: '/integration_images/capterra.webp' },
  { id: 'cargurus', name: 'CarGurus', icon: '/integration_images/cargurus.webp' },
  { id: 'cars', name: 'Cars.com', icon: '/integration_images/cars.com.webp' },
  { id: 'citysearch', name: 'Citysearch', icon: '/integration_images/citysearch.webp' },
  { id: 'dealerrater', name: 'DealerRater', icon: '/integration_images/dealerrater.webp' },
  { id: 'etsy', name: 'Etsy', icon: '/integration_images/etsy.webp' },
  { id: 'expedia', name: 'Expedia', icon: '/integration_images/expedia.webp' },
  { id: 'findlaw', name: 'FindLaw', icon: '/integration_images/findlaw.webp' },
  { id: 'foursquare', name: 'Foursquare', icon: '/integration_images/foursquare.webp' },
  { id: 'glassdoor', name: 'Glassdoor', icon: '/integration_images/glassdoor.webp' },
  { id: 'googleshopping', name: 'Google Shopping', icon: '/integration_images/googleshopping.webp' },
  { id: 'homeadvisor', name: 'HomeAdvisor', icon: '/integration_images/homeadvisor.webp' },
  { id: 'houzz', name: 'Houzz', icon: '/integration_images/houzz.webp' },
  { id: 'indeed', name: 'Indeed', icon: '/integration_images/indeed.webp' },
  { id: 'lawyers', name: 'Lawyers.com', icon: '/integration_images/lawyers.com.webp' },
  { id: 'producthunt', name: 'Product Hunt', icon: '/integration_images/producthunt.webp' },
  { id: 'productreview', name: 'ProductReview', icon: '/integration_images/productreview.webp' },
  { id: 'thumbtack', name: 'Thumbtack', icon: '/integration_images/thumbtack.webp' },
  { id: 'vrbo', name: 'VRBO', icon: '/integration_images/vrbo.webp' },
  { id: 'webmd', name: 'WebMD', icon: '/integration_images/webmd.webp' },
  { id: 'zillow', name: 'Zillow', icon: '/integration_images/zillow.webp' }
];

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlatforms = platforms.filter(platform =>
    platform.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleIntegration = (platform: Platform) => {
    // Handle integration logic
    console.log('Integrating with:', platform.name);
  };

  return (
    <Box sx={{ px: '50px', pt: '24px' }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontSize: '24px',
          fontWeight: 500,
          color: 'text.primary',
          mb: 1
        }}
      >
        Integrations
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          color: 'text.secondary',
          mb: 4,
          maxWidth: '1000px',
          lineHeight: 1.5
        }}
      >
        Integrate the platforms where you currently receive or wish to receive reviews. Connect directly with Google and Facebook via login to enable replying to reviews from the Reviews section. For other platforms, simply enter your page link to import reviews. Note that we only import the most recent reviews.
      </Typography>

      <Box sx={{ mb: 4, maxWidth: '500px' }}>
        <TextField
          fullWidth
          placeholder="Search integrations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: 'white',
              '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.12)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.24)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
              },
            },
            '& .MuiInputBase-input': {
              padding: '12px 14px',
              '&::placeholder': {
                color: 'text.secondary',
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      <Grid 
        container 
        spacing={3}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 240px)',
          gap: '24px',
          justifyContent: 'center',
          '& > .MuiGrid-item': {
            width: '240px',
            margin: 0,
            padding: '0 !important',
          }
        }}
      >
        {filteredPlatforms.map((platform) => (
          <Grid item key={platform.id}>
            <IntegrationCard>
              <PlatformIcon src={platform.icon} alt={platform.name} />
              <Typography 
                variant="h6" 
                component="div"
                sx={{ 
                  fontSize: '1rem',
                  textAlign: 'center',
                  minHeight: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {platform.name}
              </Typography>
              <IntegrationButton
                variant={platform.isConnected ? "outlined" : "contained"}
                onClick={() => handleIntegration(platform)}
              >
                {platform.isConnected ? 'Edit' : 'Integrate'}
              </IntegrationButton>
            </IntegrationCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
