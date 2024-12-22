import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  IconButton,
  Select,
  MenuItem,
  SelectChangeEvent,
  Switch,
  Alert
} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EditIcon from '@mui/icons-material/Edit';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function ReviewLinkPage() {
  const [gatingEnabled, setGatingEnabled] = useState('enable');
  const [brandingOff, setBrandingOff] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleGatingChange = (event: SelectChangeEvent) => {
    setGatingEnabled(event.target.value);
  };

  const handleBrandingChange = () => {
    setBrandingOff(!brandingOff);
    setSaved(true); // Show saved alert when branding is toggled
    setTimeout(() => {
      setSaved(false); // Hide alert after 5 seconds
    }, 5000);
  };

  return (
    <Box sx={{ pl: '326px', pr: '326px', pt: '24px', pb: '24px', maxWidth: '100%' }}>
      {/* Saved alert at the top of the page */}
      {saved && (
        <Alert severity="success" sx={{ position: 'absolute', top: '16px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
          Your changes have been saved!
        </Alert>
      )}
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 5 }}>
        <Box>
          <Typography variant="h4" sx={{ 
            fontFamily: 'Poppins',
            fontWeight: 800, 
            mb: 1.5, 
            color: '#111827',
            fontSize: '1.5rem',
            lineHeight: 1.375
          }}>
            Review Link
          </Typography>
          <Typography sx={{ 
            fontFamily: 'Poppins',
            color: '#6B7280',
            fontSize: '0.9375rem',
            lineHeight: 1.5,
            maxWidth: '600px',
            fontWeight: 400
          }}>
            Customize the behavior, text, and images of your Review Link. If only one integration is active, customers will be sent directly to the review site, skipping the "Positive Experience" page.
          </Typography>
        </Box>
        <Button
          startIcon={<FormatListBulletedIcon />}
          sx={{
            bgcolor: 'rgba(99, 102, 241, 0.08)',
            color: '#6366F1',
            fontSize: '0.875rem',
            fontWeight: 500,
            px: 2,
            py: 1,
            borderRadius: 1.5,
            '&:hover': {
              bgcolor: 'rgba(99, 102, 241, 0.12)',
            },
          }}
        >
          Edit
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ display: 'flex', gap: 4 }}>
        {/* Left Section */}
        <Box sx={{ flex: 1, mr: 5 }}>
          <Card sx={{ 
            p: '32px', 
            mb: 3, 
            borderRadius: '16px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            {/* URL Section */}
            <Box sx={{ mb: 5 }}>
              <Typography sx={{ 
                fontFamily: 'Poppins',
                mb: 3, 
                fontWeight: 700, 
                color: '#111827',
                fontSize: '0.9375rem',
                lineHeight: 1.5
              }}>
                Edit Review Link URL
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                borderBottom: '1px solid #E5E7EB',
                pb: 2
              }}>
                <Typography
                  sx={{
                    flex: 1,
                    fontFamily: 'Poppins',
                    color: '#111827',
                    fontSize: '1rem'
                  }}
                >
                  https://go.5starhq.com.au/millennium-granites
                </Typography>
                <Typography sx={{ color: '#6B7280', mr: 2, fontSize: '0.875rem' }}>
                  19/40
                </Typography>
                <Button
                  sx={{
                    color: '#6366F1',
                    minWidth: 'auto',
                    p: 0,
                    fontSize: '0.875rem',
                    '&:hover': { bgcolor: 'transparent' },
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Box>

            {/* Social Preview Title */}
            <Box sx={{ mb: 5 }}>
              <Typography sx={{ 
                fontFamily: 'Poppins',
                mb: 3, 
                fontWeight: 700, 
                color: '#111827',
                fontSize: '0.9375rem',
                lineHeight: 1.5
              }}>
                Social Preview Title
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #E5E7EB',
                pb: 2
              }}>
                <Typography sx={{ fontFamily: 'Poppins', color: '#111827', fontSize: '1rem' }}>
                  Do you want to leave us a review?
                </Typography>
                <Button
                  sx={{
                    color: '#6366F1',
                    minWidth: 'auto',
                    p: 0,
                    fontSize: '0.875rem',
                    '&:hover': { bgcolor: 'transparent' },
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Box>

            {/* Review Gating */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography sx={{ 
                  fontFamily: 'Poppins',
                  mb: 3, 
                  fontWeight: 700, 
                  color: '#111827',
                  fontSize: '0.9375rem',
                  lineHeight: 1.5
                }}>
                  Review Gating (Star Filter)
                </Typography>
                <IconButton size="small" sx={{ ml: 1, color: '#9CA3AF' }}>
                  <HelpOutlineIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>
              <Select
                value={gatingEnabled}
                onChange={handleGatingChange}
                fullWidth
                sx={{
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E5E7EB',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E5E7EB',
                  },
                  '.MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    py: 1.5,
                    color: '#111827',
                    fontSize: '1rem'
                  },
                }}
                IconComponent={(props) => (
                  <KeyboardArrowDownIcon {...props} sx={{ color: '#9CA3AF', fontSize: 20 }} />
                )}
              >
                <MenuItem value="enable">
                  <StarBorderIcon sx={{ fontSize: 18, color: '#111827' }} />
                  Enable
                </MenuItem>
              </Select>
            </Box>
          </Card>

          {/* Bottom Buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              fullWidth
              sx={{
                fontFamily: 'Poppins',
                bgcolor: 'rgba(99, 102, 241, 0.04)',
                color: '#6366F1',
                fontSize: '0.9375rem',
                fontWeight: 600,
                py: 2,
                borderRadius: '20px',
                '&:hover': {
                  bgcolor: 'rgba(99, 102, 241, 0.08)',
                },
              }}
            >
              Visit Link
            </Button>
            <Button
              fullWidth
              sx={{
                fontFamily: 'Poppins',
                bgcolor: 'rgba(99, 102, 241, 0.04)',
                color: '#6366F1',
                fontSize: '0.9375rem',
                fontWeight: 600,
                py: 2,
                borderRadius: '20px',
                '&:hover': {
                  bgcolor: 'rgba(99, 102, 241, 0.08)',
                },
              }}
            >
              Desktop Image
            </Button>
          </Box>
        </Box>

        {/* Right Preview Section */}
        <Card sx={{ 
          width: '390px', 
          height: '728px',
          p: '32px', 
          borderRadius: '24px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          border: '1px solid rgba(0,0,0,0.05)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* Edit button */}
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            sx={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              height: '32px',
              backgroundColor: 'rgba(67, 83, 255, 0.1)',
              color: '#4353FF',
              '&:hover': {
                backgroundColor: 'rgba(67, 83, 255, 0.2)',
              },
              textTransform: 'none',
              fontFamily: 'Poppins',
              fontWeight: 600,
              py: '6px',
              px: '12px',
              minWidth: 'unset'
            }}
          >
            Edit
          </Button>

          <Box sx={{ 
            mb: 4, 
            mt: '110px', 
            display: 'flex', 
            justifyContent: 'center', 
            position: 'relative' 
          }}>
            <Box 
              component="img"
              src="/688kxU.png"
              alt="Millennium Granites"
              sx={{
                width: '279px',
                height: '97px',
                objectFit: 'contain'
              }}
            />
            <IconButton 
              size="small" 
              sx={{ 
                position: 'absolute',
                right: '-28px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#4353FF',
                backgroundColor: 'white',
                width: '24px',
                height: '24px',
                '& .MuiSvgIcon-root': {
                  fontSize: '16px'
                }
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>

          {/* Business Name Section */}
          <Box sx={{ 
            width: '332px',
            height: '113px',
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            mb: 4
          }}>
            <Typography sx={{ 
              fontSize: '28px',
              lineHeight: '40px',
              fontWeight: 500,
              color: '#1F2937',
              textAlign: 'center',
              letterSpacing: '-0.02em'
            }}>
              How was your experience with Millennium Granites?
            </Typography>
            <IconButton 
              size="small" 
              sx={{ 
                position: 'absolute',
                right: '-28px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#4353FF',
                backgroundColor: 'white',
                width: '24px',
                height: '24px',
                '& .MuiSvgIcon-root': {
                  fontSize: '16px'
                }
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>

          {/* Stars Section */}
          <Box sx={{ 
            width: '239px',
            height: '41px',
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            mb: 4
          }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarBorderIcon key={star} sx={{ fontSize: 40, color: '#9CA3AF' }} />
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small" sx={{ color: '#4353FF' }}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: '#9CA3AF' }}>
                <HelpOutlineIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* Powered By Section */}
          <Box sx={{ 
            width: '217px',
            height: '44px',
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 'auto',
            padding: '10px 12px'
          }}>
            <Box sx={{
              opacity: brandingOff ? 0.2 : 1, // Adjust opacity based on branding toggle
              transition: 'opacity 0.3s ease'
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 1
              }}>
                <Box sx={{ color: '#6B7280', fontSize: '14px', fontWeight: 400, whiteSpace: 'nowrap' }}>
                  Powered by
                </Box>
                <img 
                  src="/5star-logo.png" 
                  alt="5star" 
                  style={{ height: '48px', width: 'auto' }}
                />
              </Box>
            </Box>
            <Box className="HideBrandingPopper" sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              backgroundColor: '#F9FAFB',
              borderRadius: '100px',
              width: '80px',
              height: '42px',
              border: '1px solid #E5E7EB',
              padding: '0 8px'
            }}>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="#6B7280" fillRule="evenodd" d="M22.327 2.762 3.813 21.344a1.026 1.026 0 0 1-1.455 0 1.035 1.035 0 0 1 0-1.46l.993-.996a12.6 12.6 0 0 1-2.1-2.66 8.94 8.94 0 0 1 0-9.121C5.097.615 13.39-.69 19.04 3.142l1.833-1.84a1.026 1.026 0 0 1 1.454 0 1.035 1.035 0 0 1 0 1.46m-8.88 5.992A3.3 3.3 0 0 0 12 8.42a3.31 3.31 0 0 0-3.306 3.32c0 .522.12 1.014.332 1.453z" clipRule="evenodd"/>
                  <path fill="#6B7280" d="M21.34 6.747a1.026 1.026 0 0 1 1.41.36 8.94 8.94 0 0 1 0 9.12c-3.22 5.433-9.557 7.229-14.834 5.435a1.033 1.033 0 0 1-.644-1.31c.182-.54.766-.829 1.304-.646 4.444 1.511 9.728-.015 12.405-4.533a6.87 6.87 0 0 0 0-7.011c-.29-.49-.13-1.124.359-1.415"/>
                  <path fill="#6B7280" d="M16.336 10.708a1.03 1.03 0 0 1 1.028 1.032c0 2.974-2.403 5.383-5.365 5.383a1.03 1.03 0 0 1-1.028-1.032c0-.57.46-1.032 1.028-1.032a3.313 3.313 0 0 0 3.308-3.319c0-.57.46-1.032 1.029-1.032"/>
                </svg>
              </Box>
              <Switch 
                size="small"
                checked={brandingOff}
                onChange={handleBrandingChange}
                sx={{
                  width: 36,
                  height: 24,
                  padding: 0,
                  '& .MuiSwitch-switchBase': {
                    padding: 0,
                    margin: '2px',
                    color: 'white',
                    '&.Mui-checked': {
                      transform: 'translateX(12px)',
                      color: 'white',
                      '& + .MuiSwitch-track': {
                        backgroundColor: '#4353FF',
                        opacity: 1,
                        border: 0
                      }
                    }
                  },
                  '& .MuiSwitch-thumb': {
                    width: 20,
                    height: 20,
                    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)'
                  },
                  '& .MuiSwitch-track': {
                    borderRadius: 26,
                    backgroundColor: '#E5E7EB',
                    opacity: 1
                  }
                }}
              />
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
