import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  IconButton,
  Tab,
  Tabs,
  Card,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  styled,
  Tooltip,
  Select,
  MenuItem,
  Link,
} from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/HelpOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import { QRCodeSVG } from 'qrcode.react';

// Styled Components
const StyledCard = styled(Card)({
  padding: '24px',
  borderRadius: '12px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  background: '#FFFFFF',
  marginBottom: '20px',
});

const TabPanel = styled(Box)({
  padding: '24px 0',
});

const MessagePreview = styled(Box)({
  border: '1px solid #E5E7EB',
  borderRadius: '8px',
  padding: '16px',
  background: '#F9FAFB',
  marginTop: '12px',
  '& .preview-text': {
    color: '#111827',
    marginBottom: '8px',
  },
  '& .preview-link': {
    color: '#6366F1',
    textDecoration: 'none',
    wordBreak: 'break-all',
    fontFamily: 'monospace',
    fontSize: '14px',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: '#F9FAFB',
    '&:hover': {
      backgroundColor: '#F3F4F6',
    },
    '&.Mui-focused': {
      backgroundColor: '#FFFFFF',
      boxShadow: '0 0 0 2px #EEF2FF',
    },
  },
});

const PlaceholderChip = styled(Box)({
  display: 'inline-block',
  padding: '2px 8px',
  backgroundColor: '#EEF2FF',
  color: '#6366F1',
  borderRadius: '4px',
  fontSize: '14px',
  margin: '0 4px',
});

const StyledTabs = styled(Tabs)({
  '& .MuiTab-root': {
    textTransform: 'none',
    minWidth: '100px',
    padding: '12px 16px',
    color: '#6B7280',
    '&.Mui-selected': {
      color: '#6366F1',
      backgroundColor: '#EEF2FF',
      borderRadius: '8px',
    },
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const StyledButton = styled(Button)({
  textTransform: 'none',
  borderRadius: '8px',
  padding: '8px 16px',
  '&.primary': {
    backgroundColor: '#6366F1',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#4F46E5',
    },
  },
  '&.secondary': {
    backgroundColor: '#F3F4F6',
    color: '#374151',
    '&:hover': {
      backgroundColor: '#E5E7EB',
    },
  },
});

const PhonePreview = styled(Box)({
  width: '253px',
  height: '524px',
  backgroundColor: '#FFFFFF',
  borderRadius: '40px',
  border: '2px solid #E5E7EB',
  position: 'relative',
  overflow: 'hidden',
  margin: '0',
  '& .header': {
    padding: '16px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FFFFFF',
  },
  '& .header-text': {
    fontSize: '15px',
    fontWeight: 600,
    color: '#111827',
  },
  '& .content': {
    padding: '16px',
    backgroundColor: '#FFFFFF',
    '& .message': {
      backgroundColor: '#F9FAFB',
      padding: '12px',
      borderRadius: '12px',
      fontSize: '14px',
      color: '#374151',
      marginBottom: '8px',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    },
    '& .link': {
      color: '#6366F1',
      textDecoration: 'none',
      wordBreak: 'break-all',
      fontSize: '14px',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
});

const ContactBar = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  padding: '12px 16px',
  borderBottom: '2px solid #E5E7EB',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  '& .icon': {
    marginRight: '8px',
    '& svg': {
      width: '24px',
      height: '24px',
    }
  },
  '& .title': {
    fontWeight: 800,
    fontSize: '14px',
    lineHeight: '20px',
  }
});

const MessageBubble = styled(Box)({
  padding: '12px',
  backgroundColor: '#F3F4F6',
  borderRadius: '12px',
  maxWidth: '80%',
  marginTop: '8px',
  '& .text': {
    wordBreak: 'break-word',
    color: 'black',
    opacity: 0.7,
    fontWeight: 600,
    fontSize: '10px',
    lineHeight: '18px',
  },
  '& a': {
    color: '#6366F1',
    textDecoration: 'none',
    display: 'block',
    marginTop: '4px',
    wordBreak: 'break-all',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
});

const TemplateChip = styled(Box)({
  display: 'inline-block',
  padding: '4px 8px',
  backgroundColor: '#EEF2FF',
  color: '#6366F1',
  borderRadius: '4px',
  fontSize: '14px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#E0E7FF',
  }
});

const CustomizeSection = styled(Box)({
  marginTop: '24px',
  '& .header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  '& .count': {
    color: '#6B7280',
    fontSize: '14px',
  },
  '& .help-icon': {
    marginLeft: '4px',
    color: '#9CA3AF',
    width: '16px',
    height: '16px',
  }
});

const MessageInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    minHeight: '120px',
    '& textarea': {
      height: '120px !important',
    }
  }
});

const EmailPreview = styled(Box)({
  border: '2px solid #E5E7EB',
  borderRadius: '20px',
  height: '500px',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#FFFFFF',
  '& .header': {
    padding: '12px 16px',
    borderBottom: '2px solid #E5E7EB',
    display: 'flex',
    alignItems: 'center',
    '& .icon': {
      marginRight: '8px',
    },
    '& .title': {
      fontWeight: 800,
      fontSize: '14px',
    }
  },
  '& .subject': {
    padding: '12px 16px',
    borderBottom: '2px solid #E5E7EB',
    fontSize: '14px',
  },
  '& .content': {
    padding: '16px',
    fontSize: '14px',
    lineHeight: '1.5',
  }
});

const ReminderCard = styled(Card)({
  padding: '24px',
  marginTop: '24px',
  '& .header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  '& .subject': {
    marginTop: '16px',
    marginBottom: '8px',
  }
});

const RequestTable = styled(Box)({
  marginTop: '24px',
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  border: '1px solid #E5E7EB',
  '& .header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
    borderBottom: '1px solid #E5E7EB',
  },
  '& .search-section': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '16px',
    padding: '16px 24px',
    borderBottom: '1px solid #E5E7EB',
    backgroundColor: '#F9FAFB',
  },
  '& .table-content': {
    maxHeight: '400px',
    overflowY: 'auto',
  },
  '& .table-row': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr auto',
    padding: '16px 24px',
    borderBottom: '1px solid #E5E7EB',
    '&:hover': {
      backgroundColor: '#F9FAFB',
    },
    '& .copy-icon': {
      color: '#6B7280',
      visibility: 'hidden',
    },
    '&:hover .copy-icon': {
      visibility: 'visible',
    }
  }
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function GetReviewsPage() {
  const [tabValue, setTabValue] = useState(0);
  const [reminder3Days, setReminder3Days] = useState(false);
  const [reminder7Days, setReminder7Days] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [previewName, setPreviewName] = useState('Alexander');
  const [customSender, setCustomSender] = useState('Millennium');
  const [messageTemplate, setMessageTemplate] = useState('thanks for choosing us. We ask you to leave us a review.');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
      <StyledTabs value={tabValue} onChange={handleTabChange}>
        <Tab label="SMS" />
        <Tab label="Email" />
        <Tab label="QR Code" />
      </StyledTabs>

      <CustomTabPanel value={tabValue} index={0}>
        <Typography variant="h6" sx={{ mb: 3, color: '#111827' }}>
          Request reviews via SMS
        </Typography>

        <StyledCard>
          <Typography variant="h6" sx={{ mb: 2, color: '#111827' }}>
            Invite your customers
          </Typography>

          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="textSecondary">
              Do you have a list of contacts?
            </Typography>
            <Button
              startIcon={<AddIcon />}
              sx={{
                color: '#6366F1',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#EEF2FF' },
              }}
            >
              Upload a CSV
            </Button>
            <IconButton size="small">
              <QuestionMarkIcon sx={{ fontSize: 16, color: '#9CA3AF' }} />
            </IconButton>
            <WarningAmberIcon sx={{ fontSize: 16, color: '#F59E0B' }} />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <StyledTextField
              placeholder="Name"
              fullWidth
              size="small"
            />
            <StyledTextField
              placeholder="Number"
              fullWidth
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ChatBubbleOutlineIcon sx={{ color: '#6B7280' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small">
                      <CloseIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                checked={hasConsent}
                onChange={(e) => setHasConsent(e.target.checked)}
                sx={{
                  color: '#6366F1',
                  '&.Mui-checked': {
                    color: '#6366F1',
                  },
                }}
              />
            }
            label="I have the receiver's consent to send a message to this contact"
            sx={{ mb: 2 }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              startIcon={<AddIcon />}
              sx={{
                color: '#6366F1',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#EEF2FF' },
              }}
            >
              Add line
            </Button>
            <StyledButton
              variant="contained"
              className="secondary"
              startIcon={<SendIcon />}
            >
              Request a review
            </StyledButton>
          </Box>
        </StyledCard>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">Edit Template</Typography>
          <Button
            startIcon={<EditIcon />}
            sx={{
              color: '#6366F1',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#EEF2FF' },
            }}
          >
            Customize the Review Link
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 6 }}>
          <Box 
            sx={{ 
              display: 'flex',
              gap: 6,
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #E5E7EB',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
              width: '100%'
            }}
          >
            <Box sx={{ flexBasis: '253px' }}>
              <PhonePreview>
                <Box className="header">
                  <ChatBubbleOutlineIcon sx={{ fontSize: 20, color: '#111827' }} />
                  <Typography className="header-text">
                    {customSender}
                  </Typography>
                </Box>
                <Box className="content">
                  <Box className="message">
                    Hi {previewName},
                    <br /><br />
                    {messageTemplate}
                  </Box>
                  <Link 
                    href="#" 
                    className="link"
                    onClick={(e) => e.preventDefault()}
                  >
                    https://go.5starhq.com.au/millennium-granites
                  </Link>
                </Box>
              </PhonePreview>
            </Box>

            <Box sx={{ flex: 1 }}>
              <CustomizeSection>
                <Box className="header">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle2">Customize the sender</Typography>
                    <Tooltip title="The name that will appear as the sender">
                      <HelpOutlineIcon className="help-icon" />
                    </Tooltip>
                  </Box>
                  <Typography className="count">11/11</Typography>
                </Box>
                <TextField
                  fullWidth
                  value={customSender}
                  onChange={(e) => setCustomSender(e.target.value)}
                  inputProps={{ maxLength: 11 }}
                  helperText={`${customSender.length}/11`}
                />

                <Box className="header" sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle2">Customize the message</Typography>
                    <Tooltip title="Use variables to personalize your message">
                      <HelpOutlineIcon className="help-icon" />
                    </Tooltip>
                  </Box>
                  <Typography className="count">1/5</Typography>
                </Box>
                <MessageInput
                  fullWidth
                  multiline
                  value={messageTemplate}
                  onChange={(e) => setMessageTemplate(e.target.value)}
                  inputProps={{ maxLength: 160 }}
                  helperText={`${messageTemplate.length}/160`}
                />

                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <TemplateChip>Company name</TemplateChip>
                  <TemplateChip>Name</TemplateChip>
                  <TemplateChip>Your link</TemplateChip>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#F3F4F6',
                      color: '#374151',
                      '&:hover': {
                        backgroundColor: '#E5E7EB',
                      }
                    }}
                  >
                    Save template
                  </Button>
                </Box>
              </CustomizeSection>
            </Box>
          </Box>
        </Box>

        <Typography variant="subtitle1" sx={{ mt: 4, mb: 2 }}>
          Send an automatic SMS reminder if the customer doesn't click on the review link.
        </Typography>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <StyledCard sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography>Trigger reminders after 3 days</Typography>
              <Switch
                checked={reminder3Days}
                onChange={(e) => setReminder3Days(e.target.checked)}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#6366F1',
                    '& + .MuiSwitch-track': {
                      backgroundColor: '#6366F1',
                    },
                  },
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="subtitle2">Customize the message</Typography>
              <IconButton size="small">
                <QuestionMarkIcon sx={{ fontSize: 16, color: '#9CA3AF' }} />
              </IconButton>
              <Box sx={{ flex: 1 }} />
              <Typography variant="caption" color="textSecondary">1/5</Typography>
            </Box>

            <StyledTextField
              fullWidth
              multiline
              rows={4}
              defaultValue={`Hi {Name},\n\nthanks for choosing us. We ask you to leave us a review.\n\n{Your link}`}
              sx={{ mb: 3 }}
            />

            <Box sx={{ display: 'flex', gap: 1 }}>
              <PlaceholderChip>Company name</PlaceholderChip>
              <PlaceholderChip>Name</PlaceholderChip>
              <PlaceholderChip>Your link</PlaceholderChip>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <StyledButton variant="contained" className="secondary">
                Save
              </StyledButton>
            </Box>
          </StyledCard>

          <StyledCard sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography>Trigger reminders after 7 days</Typography>
              <Switch
                checked={reminder7Days}
                onChange={(e) => setReminder7Days(e.target.checked)}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#6366F1',
                    '& + .MuiSwitch-track': {
                      backgroundColor: '#6366F1',
                    },
                  },
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="subtitle2">Customize the message</Typography>
              <IconButton size="small">
                <QuestionMarkIcon sx={{ fontSize: 16, color: '#9CA3AF' }} />
              </IconButton>
              <Box sx={{ flex: 1 }} />
              <Typography variant="caption" color="textSecondary">1/5</Typography>
            </Box>

            <StyledTextField
              fullWidth
              multiline
              rows={4}
              defaultValue={`Hi {Name},\n\nthanks for choosing us. We ask you to leave us a review.\n\n{Your link}`}
              sx={{ mb: 3 }}
            />

            <Box sx={{ display: 'flex', gap: 1 }}>
              <PlaceholderChip>Company name</PlaceholderChip>
              <PlaceholderChip>Name</PlaceholderChip>
              <PlaceholderChip>Your link</PlaceholderChip>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <StyledButton variant="contained" className="secondary">
                Save
              </StyledButton>
            </Box>
          </StyledCard>
        </Box>

        <Typography variant="h6" sx={{ mt: 4, mb: 3 }}>
          Requests sent
        </Typography>

        <RequestTable>
          <Box className="header">
            <Typography variant="h6">Requests sent</Typography>
            <Button
              startIcon={<DeleteOutlineIcon sx={{ color: '#EF4444' }} />}
              sx={{ color: '#EF4444', fontWeight: 500 }}
            >
              Delete all data
            </Button>
          </Box>

          <Box className="search-section">
            <TextField
              placeholder="Search by name"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon sx={{ color: '#6B7280' }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="Search by email"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon sx={{ color: '#6B7280' }} />
                  </InputAdornment>
                ),
              }}
            />
            <Select
              value="all"
              size="small"
              fullWidth
              sx={{ backgroundColor: '#FFFFFF' }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="today">Today</MenuItem>
              <MenuItem value="yesterday">Yesterday</MenuItem>
              <MenuItem value="last7days">Last 7 days</MenuItem>
              <MenuItem value="last30days">Last 30 days</MenuItem>
              <MenuItem value="custom">Custom</MenuItem>
            </Select>
          </Box>

          <Box className="table-content">
            <Box className="table-row">
              <Typography>Zoie</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography>zoie_07@hotmail.com</Typography>
                <IconButton size="small" className="copy-icon">
                  <ContentCopyIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>
              <Typography>Dec 3, 2024 11:39 PM</Typography>
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Box>
        </RequestTable>
      </CustomTabPanel>

      <CustomTabPanel value={tabValue} index={1}>
        <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '3' }}>
          <Typography variant="h6" sx={{ mb: 3 }}>Request reviews via email</Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <StyledCard>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Invite your customers</Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Typography variant="body2">Do you have a list of contacts?</Typography>
                <Button
                  startIcon={<UploadFileIcon />}
                  variant="outlined"
                  size="small"
                  sx={{ color: '#6366F1', borderColor: '#6366F1' }}
                >
                  Upload a CSV
                </Button>
                <Tooltip title="Upload a CSV file with customer details">
                  <HelpOutlineIcon sx={{ color: '#9CA3AF', fontSize: 16 }} />
                </Tooltip>
                <WarningAmberIcon sx={{ color: '#F59E0B', fontSize: 16 }} />
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                  placeholder="Name"
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon sx={{ color: '#6B7280' }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  placeholder="Email"
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon sx={{ color: '#6B7280' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <FormControlLabel
                control={<Checkbox />}
                label="I have the receiver's consent to send a message to this contact"
                sx={{ mb: 2 }}
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button
                  startIcon={<AddIcon />}
                  sx={{ color: '#6366F1' }}
                >
                  Add line
                </Button>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{ backgroundColor: '#6366F1' }}
                >
                  Request a review
                </Button>
              </Box>
            </StyledCard>

            <Box sx={{ display: 'flex', gap: 3 }}>
              <StyledCard sx={{ flex: '0 0 400px' }}>
                <EmailPreview>
                  <Box className="header">
                    <EmailOutlinedIcon className="icon" />
                    <Typography className="title">Millennium Granites</Typography>
                  </Box>
                  <Typography className="subject">
                    We'd Love to Hear About Your Experience!
                  </Typography>
                  <Box className="content">
                    Hi Alexander,
                    <br /><br />
                    Thank you for choosing Millennium Granites! We hope you enjoyed your experience with us. If you could spare a moment to leave a quick review, it would mean a lot.
                    <br /><br />
                    Your feedback helps us grow and connect with others, and feel free to add any photos!
                    <br /><br />
                    Share your thoughts here:
                    <br />
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: '#6366F1',
                        '&:hover': {
                          backgroundColor: '#4F46E5',
                        }
                      }}
                    >
                      Leave a review
                    </Button>
                    <br /><br />
                    Kind regards,<br />
                    Vee<br />
                    Millennium Granites
                  </Box>
                </EmailPreview>
              </StyledCard>

              <StyledCard sx={{ flex: 1 }}>
                <CustomizeSection>
                  <Box className="header">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="subtitle2">Customize the sender</Typography>
                      <Tooltip title="The name that will appear as the sender">
                        <HelpOutlineIcon className="help-icon" />
                      </Tooltip>
                    </Box>
                    <Typography className="count">20/40</Typography>
                  </Box>
                  <TextField
                    fullWidth
                    value="Millennium Granites"
                    size="small"
                  />

                  <Box className="header" sx={{ mt: 3 }}>
                    <Typography variant="subtitle2">Customize the subject</Typography>
                  </Box>
                  <TextField
                    fullWidth
                    value="We'd Love to Hear About Your Experience!"
                    size="small"
                  />

                  <Box className="header" sx={{ mt: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="subtitle2">Customize the message</Typography>
                      <Tooltip title="Use variables to personalize your message">
                        <HelpOutlineIcon className="help-icon" />
                      </Tooltip>
                    </Box>
                  </Box>
                  <MessageInput
                    fullWidth
                    multiline
                    value={`Hi {Name},\n\nThank you for choosing {Company name}! We hope you enjoyed your experience with us. If you could spare a moment to leave a quick review, it would mean a lot.\n\nYour feedback helps us grow and connect with others, and feel free to add any photos!`}
                  />

                  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                    <TemplateChip>Company name</TemplateChip>
                    <TemplateChip>Name</TemplateChip>
                    <TemplateChip>Your link</TemplateChip>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#F3F4F6',
                        color: '#374151',
                        '&:hover': {
                          backgroundColor: '#E5E7EB',
                        }
                      }}
                    >
                      Save template
                    </Button>
                  </Box>
                </CustomizeSection>
              </StyledCard>
            </Box>

            <Typography sx={{ mt: 3, mb: 2 }}>
              Send an automatic Email reminder if the customer doesn't click on the review link.
            </Typography>

            <Box sx={{ display: 'flex', gap: 3 }}>
              <ReminderCard>
                <Box className="header">
                  <Typography variant="subtitle2">Trigger reminders after 3 days</Typography>
                  <Switch />
                </Box>

                <Typography variant="subtitle2" className="subject">
                  Customize the subject
                </Typography>
                <TextField
                  fullWidth
                  value="We'd Love to Hear About Your Experience"
                  size="small"
                />

                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="subtitle2">Customize the message</Typography>
                    <Tooltip title="Use variables to personalize your message">
                      <HelpOutlineIcon sx={{ color: '#9CA3AF', fontSize: 16 }} />
                    </Tooltip>
                  </Box>
                  <MessageInput
                    fullWidth
                    multiline
                    value={`Hi {Name},\n\nThank you for choosing {Company name}! We hope you enjoyed your experience with us. If you could spare a moment to leave a quick review, it would mean a lot.\n\nYour feedback helps us grow and connect with others, and feel free to add any photos!`}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <TemplateChip>Company name</TemplateChip>
                  <TemplateChip>Name</TemplateChip>
                  <TemplateChip>Your link</TemplateChip>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                  <Button sx={{ color: '#6B7280', mr: 1 }}>Cancel</Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#6366F1' }}
                  >
                    Save
                  </Button>
                </Box>
              </ReminderCard>

              <ReminderCard>
                <Box className="header">
                  <Typography variant="subtitle2">Trigger reminders after 7 days</Typography>
                  <Switch />
                </Box>

                <Typography variant="subtitle2" className="subject">
                  Customize the subject
                </Typography>
                <TextField
                  fullWidth
                  value="We'd Love to Hear About Your Experience"
                  size="small"
                />

                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="subtitle2">Customize the message</Typography>
                    <Tooltip title="Use variables to personalize your message">
                      <HelpOutlineIcon sx={{ color: '#9CA3AF', fontSize: 16 }} />
                    </Tooltip>
                  </Box>
                  <MessageInput
                    fullWidth
                    multiline
                    value={`Hi {Name},\n\nThank you for choosing {Company name}! We hope you enjoyed your experience with us. If you could spare a moment to leave a quick review, it would mean a lot.\n\nYour feedback helps us grow and connect with others, and feel free to add any photos!`}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <TemplateChip>Company name</TemplateChip>
                  <TemplateChip>Name</TemplateChip>
                  <TemplateChip>Your link</TemplateChip>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                  <Button sx={{ color: '#6B7280', mr: 1 }}>Cancel</Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#6366F1' }}
                  >
                    Save
                  </Button>
                </Box>
              </ReminderCard>
            </Box>

            <RequestTable>
              <Box className="header">
                <Typography variant="h6">Requests sent</Typography>
                <Button
                  startIcon={<DeleteOutlineIcon sx={{ color: '#EF4444' }} />}
                  sx={{ color: '#EF4444' }}
                >
                  Delete all data
                </Button>
              </Box>

              <Box className="search-section">
                <TextField
                  placeholder="Search by name"
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon sx={{ color: '#6B7280' }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  placeholder="Search by email"
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon sx={{ color: '#6B7280' }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <Select
                  value="all"
                  size="small"
                  fullWidth
                  sx={{ backgroundColor: '#FFFFFF' }}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="today">Today</MenuItem>
                  <MenuItem value="yesterday">Yesterday</MenuItem>
                  <MenuItem value="last7days">Last 7 days</MenuItem>
                  <MenuItem value="last30days">Last 30 days</MenuItem>
                  <MenuItem value="custom">Custom</MenuItem>
                </Select>
              </Box>

              <Box className="table-content">
                <Box className="table-row">
                  <Typography>Zoie</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography>zoie_07@hotmail.com</Typography>
                    <IconButton size="small" className="copy-icon">
                      <ContentCopyIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </Box>
                  <Typography>Dec 3, 2024 11:39 PM</Typography>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Box>
              </Box>
            </RequestTable>
          </Box>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={tabValue} index={2}>
        <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '32px' }}>
          <Box sx={{ 
            backgroundColor: '#FFFFFF', 
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px',
            border: '1px solid #E5E7EB',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                marginBottom: '16px',
                fontWeight: 600,
                color: '#111827'
              }}
            >
              Review Link
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '16px',
              backgroundColor: '#F9FAFB',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #E5E7EB'
            }}>
              <Typography 
                sx={{ 
                  flex: 1, 
                  color: '#374151',
                  fontSize: '0.9375rem',
                  fontWeight: 500
                }}
              >
                go.5starhq.com.au/millennium-granites
              </Typography>
              <IconButton 
                size="small"
                sx={{
                  color: '#6B7280',
                  '&:hover': {
                    backgroundColor: '#F3F4F6'
                  }
                }}
              >
                <ContentCopyIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ 
            backgroundColor: '#FFFFFF', 
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid #E5E7EB',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                marginBottom: '32px',
                fontWeight: 600,
                color: '#111827'
              }}
            >
              QR Code
            </Typography>
            <Box sx={{ 
              marginBottom: '32px',
              padding: '16px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              border: '1px solid #E5E7EB'
            }}>
              <QRCodeSVG
                value="go.5starhq.com.au/millennium-granites"
                size={200}
                level="H"
                includeMargin={true}
              />
            </Box>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={() => {
                const svg = document.querySelector('.qr-code-container svg');
                if (svg) {
                  const svgData = new XMLSerializer().serializeToString(svg);
                  const canvas = document.createElement('canvas');
                  const ctx = canvas.getContext('2d');
                  const img = new Image();
                  img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx?.drawImage(img, 0, 0);
                    const pngFile = canvas.toDataURL('image/png');
                    const downloadLink = document.createElement('a');
                    downloadLink.download = 'qr-code.png';
                    downloadLink.href = pngFile;
                    downloadLink.click();
                  };
                  img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
                }
              }}
              sx={{
                backgroundColor: '#6366F1',
                '&:hover': {
                  backgroundColor: '#4F46E5'
                },
                textTransform: 'none',
                fontWeight: 600,
                padding: '8px 20px',
                fontSize: '0.9375rem',
                borderRadius: '8px',
                boxShadow: 'none'
              }}
            >
              Download QR Code
            </Button>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
