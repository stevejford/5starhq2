import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  SvgIcon,
  Select,
  MenuItem,
  InputBase,
  InputAdornment,
  FormControl,
  Switch
} from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BlockIcon from '@mui/icons-material/Block';
import InstagramIcon from '@mui/icons-material/Instagram';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { PersonIcon, ThumbsUpIcon } from './icons';

interface CustomIconProps {
  sx?: React.CSSProperties;
}

const SearchIcon = () => (
  <SvgIcon viewBox="0 0 24 24">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.288 18.246a10.1 10.1 0 0 1-6.134 2.062C4.546 20.308 0 15.762 0 10.154S4.546 0 10.154 0s10.154 4.546 10.154 10.154c0 2.305-.768 4.43-2.062 6.134l5.349 5.348a1.385 1.385 0 0 1-1.959 1.959zm1.25-8.092a7.385 7.385 0 1 1-14.769 0 7.385 7.385 0 0 1 14.77 0"
    />
  </SvgIcon>
);

const ThumbUpIcon = ({ sx }: CustomIconProps) => (
  <SvgIcon sx={sx}>
    <path
      fill="currentColor"
      d="M2 20h2c0.55 0 1-0.45 1-1v-9c0-0.55-0.45-1-1-1H2v11zm19.83-7.12c0.11-0.25 0.17-0.52 0.17-0.8V11c0-1.1-0.9-2-2-2h-5.5l0.92-4.65c0.05-0.22 0.02-0.46-0.08-0.66-0.23-0.45-0.52-0.86-0.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c0.7 0 1.36-0.37 1.72-0.97l2.66-6.15z"
    />
  </SvgIcon>
);

const ThumbDownIcon = ({ sx }: CustomIconProps) => (
  <SvgIcon sx={sx}>
    <path
      fill="currentColor"
      d="M22 4h-2c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h2V4zM2.17 11.12c-0.11 0.25-0.17 0.52-0.17 0.8V13c0 1.1 0.9 2 2 2h5.5l-0.92 4.65c-0.05 0.22-0.02 0.46 0.08 0.66 0.23 0.45 0.52 0.86 0.88 1.22L10 22l6.41-6.41c0.38-0.38 0.59-0.89 0.59-1.42V6.34C17 5.05 15.95 4 14.66 4H6.56c-0.7 0-1.36 0.37-1.72 0.97l-2.67 6.15z"
    />
  </SvgIcon>
);

interface Review {
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
}

const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Ross Devlin',
    date: 'Dec 16, 2024',
    rating: 5,
    content: 'Awesome job Thankyou very much',
    platform: 'google',
    location: 'Millennium Granites',
    verified: true
  },
  {
    id: '2',
    author: 'Janine Robertson',
    date: 'Dec 14, 2024',
    rating: 4,
    content: 'I liked the bench installed though after I contacted the company as part of the bench had a rough area. I was told that they would come and fix it so I paid the account fully. I still have not had this corrected.',
    platform: 'google',
    location: 'Millennium Granites',
    hasEmail: true,
    hasPhone: true
  }
];

import ReviewCard from './ReviewCard';

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('*');
  const [selectedAnswer, setSelectedAnswer] = useState('ALL');
  const [selectedDate, setSelectedDate] = useState('0');
  const [allLocations, setAllLocations] = useState(true);

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      gap: 3,
      p: 3
    }}>
      <Box sx={{ flex: 1 }}>
        {/* Title */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 1,
          mb: 3
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Your reviews
          </Typography>
          <InfoOutlinedIcon sx={{ color: '#9CA3AF', fontSize: 20 }} />
        </Box>

        {/* Review Cards */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Google Review Card */}
          <Box sx={{ 
            backgroundColor: 'white',
            borderRadius: '20px',
            p: 3,
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            {/* User Info */}
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box className="user-image" sx={{ position: 'relative' }}>
                  <Box className="TextIconNode" sx={{ 
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#D03801',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif'
                  }}>
                    T
                  </Box>
                  <Box className="integration-logo" sx={{
                    position: 'absolute',
                    bottom: -3,
                    right: -3
                  }}>
                    <Box>
                      <Box className="TextIconNode" sx={{ 
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                        border: '1px solid #E5E7EB',
                        padding: '4px'
                      }}>
                        <Box sx={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden'
                        }}>
                          <GoogleIcon sx={{ width: '100%', height: '100%' }} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>Ross Devlin</Typography>
                    <Typography sx={{ color: '#6B7280', fontSize: '14px' }}>Dec 16, 2024</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} sx={{ color: '#FBBF24', fontSize: 20 }} />
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 1
              }}>
                <LocationOnOutlinedIcon sx={{ color: '#6B7280' }} />
                <Typography sx={{ color: '#6B7280' }}>
                  Millennium Granites
                </Typography>
              </Box>
            </Box>

            {/* Review Text */}
            <Typography sx={{ 
              mb: 3,
              fontWeight: 600,
              fontSize: '16px',
              color: '#111827'
            }}>
              Awesome job Thankyou very much
            </Typography>

            {/* Actions */}
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Button
                startIcon={<ReplyIcon />}
                variant="contained"
                sx={{
                  backgroundColor: '#6366F1',
                  borderRadius: '100px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#4F46E5'
                  }
                }}
              >
                Reply
              </Button>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton sx={{ color: '#6B7280' }}>
                  <CheckCircleOutlineIcon />
                </IconButton>
                <IconButton sx={{ color: '#6B7280' }}>
                  <BlockIcon />
                </IconButton>
                <IconButton sx={{ color: '#6B7280' }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: '#6B7280' }}>
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Internal Review Card */}
          <Box sx={{ 
            backgroundColor: 'white',
            borderRadius: '20px',
            p: 3,
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            {/* User Info */}
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box className="user-image" sx={{ position: 'relative' }}>
                  <Box className="TextIconNode" sx={{ 
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#D03801',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif'
                  }}>
                    J
                  </Box>
                  <Box className="integration-logo" sx={{
                    position: 'absolute',
                    bottom: -3,
                    right: -3
                  }}>
                    <Box>
                      <Box className="TextIconNode" sx={{ 
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#22C55E',
                        fontSize: '14px',
                        fontWeight: 500,
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                        border: '1px solid #E5E7EB',
                        padding: '4px'
                      }}>
                        <ThumbUpIcon sx={{ 
                          width: '100%',
                          height: '100%',
                          transform: 'scale(1.2)',
                          fill: 'currentColor'
                        }} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>Janine Robertson</Typography>
                    <Typography sx={{ color: '#6B7280', fontSize: '14px' }}>Dec 14, 2024</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      {[1, 2, 3].map((star) => (
                        <StarIcon key={star} sx={{ color: '#FBBF24', fontSize: 20 }} />
                      ))}
                      {[4, 5].map((star) => (
                        <StarIcon key={star} sx={{ color: '#E5E7EB', fontSize: 20 }} />
                      ))}
                    </Box>
                    <EmailIcon sx={{ color: '#6B7280', fontSize: 20 }} />
                    <PhoneIcon sx={{ color: '#6B7280', fontSize: 20 }} />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 1
              }}>
                <LocationOnOutlinedIcon sx={{ color: '#6B7280' }} />
                <Typography sx={{ color: '#6B7280' }}>
                  Millennium Granites
                </Typography>
              </Box>
            </Box>

            {/* Review Text */}
            <Typography sx={{ 
              mb: 3,
              fontWeight: 600,
              fontSize: '16px',
              color: '#111827'
            }}>
              I liked the bench installed though after I contacted the company as part of the bench had a rough area. I was told that they would come and fix it so I paid the account fully. I still have not had this corrected.
            </Typography>

            {/* Actions */}
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Button
                startIcon={<ReplyIcon />}
                variant="contained"
                sx={{
                  backgroundColor: '#6366F1',
                  borderRadius: '100px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#4F46E5'
                  }
                }}
              >
                Reply Privately
              </Button>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton sx={{ color: '#6B7280' }}>
                  <CheckCircleOutlineIcon />
                </IconButton>
                <IconButton sx={{ color: '#6B7280' }}>
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Sidebar */}
      <Box sx={{ 
        width: '300px',
        backgroundColor: 'white',
        borderRadius: '20px',
        p: '24px',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        height: 'fit-content'
      }}>
        {/* All Locations Switch */}
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3
        }}>
          <Switch 
            checked={allLocations}
            onChange={(e) => setAllLocations(e.target.checked)}
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#6366F1'
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#6366F1'
              }
            }}
          />
          <Typography sx={{ 
            fontSize: '14px',
            fontWeight: 500,
            color: '#111827'
          }}>
            All Locations
          </Typography>
        </Box>

        {/* Search */}
        <Box sx={{ mb: 3 }}>
          <InputBase
            fullWidth
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <Box sx={{ color: '#9CA3AF' }}>
                  <SearchIcon />
                </Box>
              </InputAdornment>
            }
            sx={{
              backgroundColor: 'white',
              borderRadius: '100px',
              border: '1px solid #E5E7EB',
              p: '8px 16px',
              '& input': {
                fontSize: '14px',
                color: '#111827'
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#9CA3AF',
                opacity: 1
              }
            }}
          />
        </Box>

        {/* Assessment */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1
          }}>
            <Typography variant="subtitle2" sx={{ color: '#111827', fontWeight: 500 }}>
              Assessment
            </Typography>
            <Button
              sx={{
                color: '#DC2626',
                textTransform: 'none',
                minWidth: 'auto',
                p: '6px 8px',
                fontSize: '14px',
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#B91C1C'
                }
              }}
            >
              Clear
            </Button>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            mb: 3
          }}>
            <Button
              sx={{
                minWidth: '120px',
                height: '44px',
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '22px',
                color: '#111827',
                '&:hover': {
                  backgroundColor: 'white',
                  borderColor: '#D1D5DB'
                }
              }}
            >
              <ThumbUpIcon sx={{ 
                width: '20px',
                height: '20px',
                color: '#111827'
              }} />
            </Button>
            <Button
              sx={{
                minWidth: '120px',
                height: '44px',
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '22px',
                color: '#111827',
                '&:hover': {
                  backgroundColor: 'white',
                  borderColor: '#D1D5DB'
                }
              }}
            >
              <ThumbDownIcon sx={{ 
                width: '20px',
                height: '20px',
                color: '#DC2626'
              }} />
            </Button>
          </Box>
        </Box>

        {/* Type */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: '#111827', fontWeight: 500 }}>
            Type
          </Typography>
          <Select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            displayEmpty
            fullWidth
            MenuProps={{
              sx: {
                '& .MuiPopover-root': {
                  pointerEvents: 'none'
                }
              }
            }}
            sx={{
              backgroundColor: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E5E7EB',
                borderRadius: '12px'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#D1D5DB'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#D1D5DB'
              },
              height: '44px'
            }}
          >
            <MenuItem value="*">All</MenuItem>
            <MenuItem value="public">Public Reviews</MenuItem>
            <MenuItem value="private">Private Reviews</MenuItem>
            <MenuItem value="video">Video Testimonials</MenuItem>
          </Select>
        </FormControl>

        {/* Answer */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: '#111827', fontWeight: 500 }}>
            Answer
          </Typography>
          <Select
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
            displayEmpty
            fullWidth
            MenuProps={{
              sx: {
                '& .MuiPopover-root': {
                  pointerEvents: 'none'
                }
              }
            }}
            sx={{
              backgroundColor: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E5E7EB',
                borderRadius: '12px'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#D1D5DB'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#D1D5DB'
              },
              height: '44px'
            }}
          >
            <MenuItem value="ALL">All</MenuItem>
            <MenuItem value="answered">Answered</MenuItem>
            <MenuItem value="not_answered">Not Answered</MenuItem>
          </Select>
        </FormControl>

        {/* Date */}
        <FormControl fullWidth sx={{ mb: 0 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: '#111827', fontWeight: 500 }}>
            Date
          </Typography>
          <Select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            displayEmpty
            fullWidth
            MenuProps={{
              sx: {
                '& .MuiPopover-root': {
                  pointerEvents: 'none'
                }
              }
            }}
            sx={{
              backgroundColor: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E5E7EB',
                borderRadius: '12px'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#D1D5DB'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#D1D5DB'
              },
              height: '44px'
            }}
          >
            <MenuItem value="0">All</MenuItem>
            <MenuItem value="custom">Custom Period</MenuItem>
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="yesterday">Yesterday</MenuItem>
            <MenuItem value="7days">7 Days</MenuItem>
            <MenuItem value="30days">30 Days</MenuItem>
            <MenuItem value="6months">6 Months</MenuItem>
            <MenuItem value="12months">12 Months</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
