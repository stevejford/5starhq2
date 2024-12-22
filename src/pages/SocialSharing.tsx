import { useState, useRef } from 'react';
import {
  Box,
  Typography,
  CardMedia,
  styled,
  Tooltip,
  Paper,
  Button,
  IconButton,
  Dialog,
  DialogProps,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Switch
} from '@mui/material';
import AddBox from '@mui/icons-material/AddBox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Send from '@mui/icons-material/Send';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import Home from '@mui/icons-material/Home';
import Search from '@mui/icons-material/Search';
import Movie from '@mui/icons-material/Movie';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import Close from '@mui/icons-material/Close';
import Facebook from '@mui/icons-material/Facebook';
import HelpOutline from '@mui/icons-material/HelpOutline';
import { HexColorPicker } from 'react-colorful';

const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  fontWeight: 700,
  color: '#111827',
  marginBottom: theme.spacing(1),
}));

const PageDescription = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: '#6B7280',
  marginBottom: theme.spacing(3),
}));

const IntegrationCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  borderRadius: 12,
  boxShadow: 'none',
  border: '1px solid #E5E7EB',
  backgroundColor: '#fff',
  '& img': {
    width: 48,
    height: 48,
    marginBottom: theme.spacing(1),
  },
  '& .MuiTypography-root': {
    fontSize: 16,
    color: '#111827',
  },
}));

const ConnectButton = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '10px 0',
  borderRadius: 8,
  textTransform: 'none',
  backgroundColor: '#F3F4F6',
  color: '#5B61C5',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#E5E7EB',
  },
}));

const ColorInput = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  '& .ColorPreview': {
    width: 24,
    height: 24,
    borderRadius: 6,
    border: '1px solid #E5E7EB',
  },
  '& .MainInput': {
    flex: 1,
    height: 40,
    border: '1px solid #E5E7EB',
    borderRadius: 8,
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    '& input': {
      fontSize: 14,
      color: '#111827',
    },
  },
}));

const TagTextArea = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: 120,
  border: '1px solid #E5E7EB',
  borderRadius: 8,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '& .TextArea': {
    width: '100%',
    minHeight: 80,
    outline: 'none',
    border: 'none',
    resize: 'none',
    fontSize: 14,
    lineHeight: 1.5,
    '&:empty:before': {
      content: '"Write your text here..."',
      color: '#9CA3AF',
    },
  },
  '& .BottomBar': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
}));

const VariableButton = styled(Box)(({ theme }) => ({
  padding: '6px 12px',
  borderRadius: 8,
  textTransform: 'none',
  backgroundColor: '#F3F4F6',
  color: '#5B61C5',
  fontSize: 14,
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#E5E7EB',
  },
}));

const SaveButton = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '12px 0',
  borderRadius: 8,
  backgroundColor: '#F3F4F6',
  color: '#9CA3AF',
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'none',
  '&:not(:disabled)': {
    backgroundColor: '#5B61C5',
    color: '#fff',
  },
}));

const ColorPickerStyles = styled('div')({
  '.react-colorful': {
    width: '100%',
    height: '200px',
  },
  '.react-colorful__saturation': {
    borderRadius: '8px',
    marginBottom: '16px',
  },
  '.react-colorful__hue': {
    height: '16px',
    borderRadius: '8px',
  },
  '.react-colorful__saturation-pointer, .react-colorful__hue-pointer': {
    width: '20px',
    height: '20px',
    borderWidth: '3px',
  },
});

const HighlightedTextArea = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setCursorPosition(e.target.selectionStart);
  };

  // Split text into segments of regular text and variables
  const segments = value.split(/(\[\[.*?\]\])/g).map((segment, index) => {
    if (segment.match(/^\[\[(.*?)\]\]$/)) {
      const variableName = segment.slice(2, -2); // Remove [[ and ]]
      return (
        <span
          key={index}
          style={{
            color: '#5B61C5',
            backgroundColor: '#F3F4F9',
            borderRadius: '4px',
            padding: '2px 6px',
            margin: '0 2px',
            fontWeight: 600,
            display: 'inline-block',
            lineHeight: '1.4'
          }}
        >
          {variableName}
        </span>
      );
    }
    return <span key={index}>{segment}</span>;
  });

  return (
    <Box sx={{ position: 'relative' }}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleTextChange}
        style={{
          width: '100%',
          minHeight: '140px',
          padding: '16px',
          border: '1px solid #F3F4F6',
          borderRadius: '8px',
          outline: 'none',
          resize: 'none',
          fontSize: 14,
          lineHeight: 1.6,
          color: '#111827',
          fontFamily: 'inherit',
          backgroundColor: '#FFFFFF',
          position: 'relative',
          zIndex: 1,
          caretColor: '#111827'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '16px',
          pointerEvents: 'none',
          fontSize: 14,
          lineHeight: 1.6,
          fontFamily: 'inherit',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          color: 'transparent',
          userSelect: 'none'
        }}
      >
        {segments}
      </Box>
    </Box>
  );
};

const FacebookDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: 4
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={onClose} size="small" sx={{ color: '#6B7280' }}>
          <Close fontSize="small" />
        </IconButton>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Box 
          component="img" 
          src="/facebook.svg" 
          sx={{ 
            width: 64,
            height: 64,
            mb: 3
          }}
        />
        
        <Typography variant="h6" sx={{ 
          fontSize: 18,
          fontWeight: 600,
          color: '#111827',
          mb: 2
        }}>
          Integrate Facebook
        </Typography>

        <Typography sx={{ 
          fontSize: 14,
          color: '#6B7280',
          mb: 3,
          maxWidth: 440
        }}>
          To import reviews, respond to them directly from the platform, and to share reviews on your page we need to connect your Facebook Page. Please sign in with the account that manages the page and grant the necessary permissions by checking all the boxes.
        </Typography>

        <Typography sx={{ 
          fontSize: 14,
          color: '#6B7280',
          fontStyle: 'italic',
          mb: 3
        }}>
          Important: Before sending review requests, ensure that the "Reviews" tab is active on your Facebook Page.
        </Typography>

        <Button
          variant="contained"
          startIcon={<Facebook />}
          sx={{
            bgcolor: '#1877F2',
            color: 'white',
            textTransform: 'none',
            fontSize: 14,
            fontWeight: 600,
            py: 1,
            px: 3,
            '&:hover': {
              bgcolor: '#0C63D4'
            }
          }}
        >
          Log in with Facebook
        </Button>
      </Box>
    </Dialog>
  );
};

export default function SocialSharing() {
  const [hideReviewerData, setHideReviewerData] = useState(false);
  const [brandColor, setBrandColor] = useState('#5861c5');
  const [backgroundColor, setBackgroundColor] = useState('#48484829');
  const defaultTemplate = 'Thank you [[Name]] for your review on [[Source]]!\n\n"[[Text]]"\n\nSee review: [[Review URL]]';
  const [reviewText, setReviewText] = useState(defaultTemplate);
  const [showColorPicker, setShowColorPicker] = useState<'brand' | 'background' | null>(null);
  const [tempColor, setTempColor] = useState<string>('');
  const [facebookDialogOpen, setFacebookDialogOpen] = useState(false);

  const handleOpenColorPicker = (type: 'brand' | 'background') => {
    setTempColor(type === 'brand' ? brandColor : backgroundColor);
    setShowColorPicker(type);
  };

  const handleSaveColor = () => {
    if (showColorPicker === 'brand') {
      setBrandColor(tempColor);
    } else if (showColorPicker === 'background') {
      setBackgroundColor(tempColor);
    }
    setShowColorPicker(null);
  };

  const variables = ['Name', 'Source', 'Text', 'Review URL'];

  return (
    <Box sx={{ 
      display: 'flex',
      gap: 4,
      p: 4,
      maxWidth: '1600px',
      margin: '0 auto',
      height: '100vh'
    }}>
      {/* Left Configuration Area */}
      <Box sx={{ 
        flex: '0 0 600px',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}>
        <Typography variant="h5" sx={{ fontWeight: 600, fontSize: 20, mb: 1 }}>
          Social Sharing
        </Typography>
        
        <Typography sx={{ 
          color: 'text.secondary',
          fontSize: 14,
          lineHeight: 1.5,
          mb: 2 
        }}>
          Connect your Facebook and Instagram pages, customize the post template, and start sharing reviews from the Reviews section by clicking "Share on Social."
        </Typography>

        {/* Social Cards Container */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: 3,
          mb: 3
        }}>
          {/* Facebook Card */}
          <Paper sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: 'white',
            textAlign: 'center'
          }}>
            <Box
              component="img"
              src="/facebook.svg"
              sx={{
                width: 32,
                height: 32,
                mb: 1
              }}
            />
            <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 2 }}>
              Facebook
            </Typography>
            <Button
              onClick={() => setFacebookDialogOpen(true)}
              sx={{
                bgcolor: '#F3F4F9',
                color: '#5B61C5',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                width: '100%',
                '&:hover': {
                  bgcolor: '#E8E9F1'
                }
              }}
            >
              Connect
            </Button>
          </Paper>

          <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            borderRadius: 2,
            backgroundColor: 'white',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
            gap: 2
          }}>
            <Box
              component="img"
              src="/static/image/instagram.png"
              alt="Instagram"
              sx={{ 
                width: 32,
                height: 32,
                objectFit: 'contain'
              }}
            />
            <Typography sx={{
              fontSize: 14,
              color: '#111827',
              fontWeight: 500
            }}>
              Instagram
            </Typography>
            <Button
              sx={{
                mt: 'auto',
                backgroundColor: '#F3F4F9',
                color: '#5B61C5',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                py: 1,
                px: 4,
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: '#E8E9F1'
                }
              }}
            >
              Show more
            </Button>
          </Paper>
        </Box>

        {/* Settings Card */}
        <Paper sx={{ 
          p: 3,
          borderRadius: 2,
          backgroundColor: 'white',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)'
        }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 3, mb: 3 }}>
            {/* Brand Color */}
            <Box sx={{ position: 'relative' }}>
              <Typography sx={{ 
                fontSize: 14, 
                fontWeight: 600, 
                color: '#111827',
                mb: 1 
              }}>
                Brand Color
              </Typography>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                <Box 
                  sx={{ 
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    bgcolor: brandColor,
                    border: '1px solid #E5E7EB'
                  }}
                />
                <Box sx={{
                  flex: 1,
                  height: 40,
                  border: '1px solid #E5E7EB',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  px: 1.5,
                  backgroundColor: 'white'
                }}>
                  <input
                    type="text"
                    value={brandColor}
                    readOnly
                    style={{ 
                      border: 'none',
                      outline: 'none',
                      fontSize: 14,
                      color: '#111827',
                      width: '100%',
                      backgroundColor: 'transparent'
                    }}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                    <Box sx={{ 
                      width: 24,
                      height: 24,
                      borderRadius: 0.5,
                      bgcolor: brandColor,
                      border: '1px solid #E5E7EB'
                    }} />
                    <Button
                      onClick={() => handleOpenColorPicker('brand')}
                      sx={{
                        color: '#5B61C5',
                        textTransform: 'none',
                        fontSize: 14,
                        fontWeight: 600,
                        minWidth: 'auto',
                        p: 0,
                        '&:hover': {
                          backgroundColor: 'transparent'
                        }
                      }}
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
              </Box>
              
              {/* Color Picker Popup for Brand Color */}
              {showColorPicker === 'brand' && (
                <Paper sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  mt: 1,
                  p: 2,
                  borderRadius: 2,
                  boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  zIndex: 1000,
                  width: '300px',
                  bgcolor: 'white'
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                    <IconButton 
                      onClick={() => setShowColorPicker(null)}
                      size="small"
                      sx={{ 
                        color: '#6B7280',
                        p: 0.5
                      }}
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  </Box>
                  <ColorPickerStyles>
                    <HexColorPicker color={tempColor} onChange={setTempColor} />
                  </ColorPickerStyles>
                  <Button
                    fullWidth
                    sx={{
                      mt: 2,
                      bgcolor: '#5B61C5',
                      color: 'white',
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: 600,
                      py: 1,
                      '&:hover': {
                        bgcolor: '#4A4FB3'
                      }
                    }}
                    onClick={handleSaveColor}
                  >
                    Save
                  </Button>
                </Paper>
              )}
            </Box>

            {/* Background Color */}
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box 
                sx={{ 
                  width: 40,
                  height: 40,
                  borderRadius: 1,
                  bgcolor: backgroundColor,
                  border: '1px solid #E5E7EB'
                }}
              />
              <Box sx={{
                flex: 1,
                height: 40,
                border: '1px solid #E5E7EB',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                px: 1.5,
                backgroundColor: 'white'
              }}>
                <input
                  type="text"
                  value={backgroundColor}
                  readOnly
                  style={{ 
                    border: 'none',
                    outline: 'none',
                    fontSize: 14,
                    color: '#111827',
                    width: '100%',
                    backgroundColor: 'transparent'
                  }}
                />
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Box sx={{ 
                    width: 24,
                    height: 24,
                    borderRadius: 0.5,
                    bgcolor: backgroundColor,
                    border: '1px solid #E5E7EB'
                  }} />
                  <Button
                    onClick={() => handleOpenColorPicker('background')}
                    sx={{
                      color: '#5B61C5',
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: 600,
                      minWidth: 'auto',
                      p: 0,
                      '&:hover': {
                        backgroundColor: 'transparent'
                      }
                    }}
                  >
                    Edit
                  </Button>
                </Box>
              </Box>
            </Box>
            
            {/* Color Picker Popup for Background Color */}
            {showColorPicker === 'background' && (
              <Paper sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                mt: 1,
                p: 2,
                borderRadius: 2,
                boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                zIndex: 1000,
                width: '300px',
                bgcolor: 'white'
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                  <IconButton 
                    onClick={() => setShowColorPicker(null)}
                    size="small"
                    sx={{ 
                      color: '#6B7280',
                      p: 0.5
                    }}
                  >
                    <Close fontSize="small" />
                  </IconButton>
                </Box>
                <ColorPickerStyles>
                  <HexColorPicker color={tempColor} onChange={setTempColor} />
                </ColorPickerStyles>
                <Button
                  fullWidth
                  sx={{
                    mt: 2,
                    bgcolor: '#5B61C5',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: 14,
                    fontWeight: 600,
                    py: 1,
                    '&:hover': {
                      bgcolor: '#4A4FB3'
                    }
                  }}
                  onClick={handleSaveColor}
                >
                  Save
                </Button>
              </Paper>
            )}
          </Box>

          <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 2 }}>Post Text</Typography>
          <Box sx={{
            border: '1px solid #E5E7EB',
            borderRadius: 2,
            bgcolor: 'white',
            overflow: 'hidden'
          }}>
            <Box sx={{ p: 3 }}>
              <HighlightedTextArea
                value={reviewText}
                onChange={setReviewText}
              />
            </Box>
            <Box sx={{ 
              borderTop: '1px solid #E5E7EB',
              p: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              bgcolor: '#F9FAFB'
            }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {variables.map((variable) => (
                  <Button
                    key={variable}
                    onClick={() => {
                      const tag = `[[${variable}]]`;
                      setReviewText(prev => prev + tag);
                    }}
                    sx={{
                      bgcolor: '#F3F4F9',
                      color: '#5B61C5',
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: 500,
                      px: 2,
                      py: 0.75,
                      minWidth: 'auto',
                      '&:hover': {
                        bgcolor: '#E8E9F1'
                      }
                    }}
                  >
                    {variable}
                  </Button>
                ))}
              </Box>
              <IconButton 
                sx={{ 
                  color: '#6B7280',
                  bgcolor: '#F3F4F9',
                  '&:hover': {
                    bgcolor: '#E8E9F1'
                  }
                }}
              >
                <ChatBubbleOutline fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          <Button
            fullWidth
            sx={{
              mt: 2,
              bgcolor: '#5B61C5',
              color: 'white',
              fontSize: 14,
              fontWeight: 600,
              textTransform: 'none',
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                bgcolor: '#4A4FB3'
              },
              '&.Mui-disabled': {
                bgcolor: '#E5E7EB',
                color: '#9CA3AF'
              }
            }}
          >
            Save
          </Button>
        </Paper>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Switch
            checked={hideReviewerData}
            onChange={(e) => setHideReviewerData(e.target.checked)}
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#5B61C5',
                '&:hover': {
                  backgroundColor: 'rgba(91, 97, 197, 0.08)'
                }
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#5B61C5'
              }
            }}
          />
          <Typography sx={{ 
            fontSize: 14,
            color: '#111827',
            fontWeight: 500
          }}>
            Hide reviewer data
          </Typography>
          <Tooltip title="Hide reviewer's name and profile picture in the shared post">
            <IconButton size="small" sx={{ color: '#6B7280' }}>
              <HelpOutline fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Right Preview Area - DO NOT MODIFY CONTENTS */}
      <Box sx={{ 
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        mt: '145px'
      }}>
        <Box 
          sx={{ 
            width: 390,
            height: 730,
            border: '2px solid #000',
            borderRadius: '35px',
            position: 'relative',
            bgcolor: '#FAFAFA',
            overflow: 'hidden',
            p: '16px 12px'
          }}
        >
          {/* Instagram Header */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 4,
            px: 1
          }}>
            <Box
              component="img"
              src="/static/image/instagram-logo.jpg"
              alt="Instagram"
              sx={{ 
                height: 32,
                objectFit: 'contain'
              }}
            />
            <Box sx={{ display: 'flex', gap: 3 }}>
              <AddBox sx={{ fontSize: 24, color: '#262626' }} />
              <FavoriteBorder sx={{ fontSize: 24, color: '#262626' }} />
              <Send sx={{ fontSize: 24, color: '#262626', transform: 'rotate(-45deg)' }} />
            </Box>
          </Box>

          {/* Story Circles */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            mb: 4,
            px: 1,
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' }
          }}>
            {[
              { src: 'https://recensioni-io-static-folder.s3.eu-central-1.amazonaws.com/clients/672d9f5cca20f89e423bbc72/688kxU.png', alt: 'Profile' },
              { src: '/static/image/persona1.a67ecd6d.jpg', alt: 'Story 1' },
              { src: '/static/image/persona2.fe66e361.jpg', alt: 'Story 2' },
              { src: '/static/image/persona3.a5abbbf5.jpg', alt: 'Story 3' }
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: 68,
                  height: 68,
                  borderRadius: '50%',
                  border: `2px solid ${brandColor}`,
                  padding: '3px',
                  flexShrink: 0,
                  bgcolor: 'white'
                }}
              >
                <Box sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '2px solid white',
                  overflow: 'hidden',
                  bgcolor: 'white'
                }}>
                  <CardMedia
                    component="img"
                    src={item.src}
                    alt={item.alt}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>

          {/* Profile Section */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            mb: 3,
            px: 2
          }}>
            <Box sx={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              border: '1px solid #262626',
              overflow: 'hidden'
            }}>
              <CardMedia
                component="img"
                src="https://recensioni-io-static-folder.s3.eu-central-1.amazonaws.com/clients/672d9f5cca20f89e423bbc72/688kxU.png"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Box>
            <Typography sx={{ 
              fontSize: 12,
              color: '#262626',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}>
              Name & Surname
              <Box
                component="img"
                src="/static/image/google.webp"
                sx={{ 
                  height: 10,
                  width: 10,
                  objectFit: 'contain'
                }}
              />
            </Typography>
          </Box>

          {/* Review Card Container */}
          <Box sx={{ 
            px: 2,
            mb: 4
          }}>
            {/* Outer Gray Container */}
            <Box sx={{
              bgcolor: '#F0F0F0',
              borderRadius: '24px',
              p: '24px',
            }}>
              {/* White Review Card */}
              <Box sx={{ 
                bgcolor: 'white',
                borderRadius: '16px',
                p: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <Typography sx={{ 
                  fontSize: 32,
                  lineHeight: 1.2,
                  fontWeight: 500,
                  color: '#262626',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  "Here will be the text of the review."
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ display: 'flex' }}>
                    {[1,2,3,4,5].map((star) => (
                      <img
                        key={star}
                        src="/static/image/star.png"
                        alt=""
                        style={{ width: 16, height: 16 }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box 
                      component="img"
                      src="/static/image/User.png"
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%'
                      }}
                    />
                    <Typography sx={{ 
                      fontSize: 12,
                      color: '#262626',
                      lineHeight: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}>
                      Name & Surname
                      <Box
                        component="img"
                        src="/static/image/google.webp"
                        sx={{ 
                          height: 10,
                          width: 10,
                          objectFit: 'contain'
                        }}
                      />
                    </Typography>
                  </Box>
                </Box>

                {/* Business Info Card */}
                <Box sx={{ 
                  bgcolor: brandColor,
                  height: '40px',
                  borderRadius: '0 0 20px 20px',
                  p: '0 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}>
                  <Box
                    component="img"
                    src="https://recensioni-io-static-folder.s3.eu-central-1.amazonaws.com/clients/672d9f5cca20f89e423bbc72/688kxU.png"
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: '3px',
                      bgcolor: 'white',
                      p: 0.25,
                      objectFit: 'contain'
                    }}
                  />
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                      <Typography sx={{ 
                        color: 'white',
                        fontSize: 14,
                        fontWeight: 500,
                        lineHeight: 1
                      }}>
                        Millennium Granites
                      </Typography>
                      <Typography sx={{ 
                        color: 'white',
                        fontSize: 11,
                        opacity: 0.8,
                        lineHeight: 1
                      }}>
                        66 Reviews
                      </Typography>
                    </Box>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      ml: 'auto'
                    }}>
                      <Typography sx={{ 
                        color: 'white',
                        fontSize: 14,
                        fontWeight: 500,
                        lineHeight: 1
                      }}>
                        4.5/5
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Action Icons */}
          <Box sx={{ 
            px: 2,
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 'auto',
            mt: 2
          }}>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <FavoriteBorder sx={{ fontSize: 28, color: '#FF3040' }} />
              <ChatBubbleOutline sx={{ fontSize: 28, color: '#262626' }} />
              <Send sx={{ fontSize: 28, color: '#262626', transform: 'rotate(-45deg)' }} />
            </Box>
            <BookmarkBorder sx={{ fontSize: 28, color: '#262626' }} />
          </Box>

          {/* Bottom Navigation */}
          <Box sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: '1px solid #dbdbdb',
            px: 6,
            py: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: 'white'
          }}>
            <Home sx={{ fontSize: 28, color: '#262626' }} />
            <Search sx={{ fontSize: 28, color: '#262626' }} />
            <Movie sx={{ fontSize: 28, color: '#262626' }} />
            <ShoppingBag sx={{ fontSize: 28, color: '#262626' }} />
            <Box 
              component="img"
              src="https://recensioni-io-static-folder.s3.eu-central-1.amazonaws.com/clients/672d9f5cca20f89e423bbc72/688kxU.png"
              sx={{
                width: 28,
                height: 28,
                borderRadius: '50%'
              }}
            />
          </Box>
        </Box>
      </Box>
      <FacebookDialog 
        open={facebookDialogOpen} 
        onClose={() => setFacebookDialogOpen(false)} 
      />
    </Box>
  );
}
