import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  InputBase,
  Select,
  MenuItem,
  Paper,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const SearchInput = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '8px 8px 8px 32px',
    backgroundColor: '#F8F8F8',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#111827',
    '&::placeholder': {
      color: '#6B7280',
      opacity: 1,
    },
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#F8F8F8',
  borderRadius: '4px',
  fontSize: '14px',
  '& .MuiSelect-select': {
    padding: '8px 12px',
    color: '#111827',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const SearchIconWrapper = styled('div')({
  position: 'absolute',
  left: 8,
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#9CA3AF',
  display: 'flex',
  alignItems: 'center',
});

const PaginationButton = styled(Button)({
  minWidth: 'unset',
  padding: '4px',
  color: '#6B7280',
  '&.Mui-disabled': {
    color: '#D1D5DB',
  },
});

export default function BusinessUsers() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <Box sx={{ p: 3, bgcolor: '#F9FAFB', minHeight: '100vh' }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 3,
        mx: 1,
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600,
            fontSize: '18px',
            color: '#111827'
          }}
        >
          Business Users
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#5B5FEF',
            borderRadius: '20px',
            textTransform: 'none',
            px: 2,
            py: 1,
            '&:hover': {
              backgroundColor: '#4B4FDF',
            },
          }}
        >
          Add user
        </Button>
      </Box>

      <Paper 
        elevation={0} 
        sx={{ 
          p: 4,
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3 }}>
          <Box>
            <Typography sx={{ mb: 1.5, fontWeight: 500, fontSize: '14px', color: '#111827' }}>
              Name
            </Typography>
            <Box sx={{ position: 'relative' }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ fontSize: 20 }} />
              </SearchIconWrapper>
              <SearchInput
                placeholder="Search by name"
                fullWidth
              />
            </Box>
          </Box>

          <Box>
            <Typography sx={{ mb: 1.5, fontWeight: 500, fontSize: '14px', color: '#111827' }}>
              Email
            </Typography>
            <Box sx={{ position: 'relative' }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ fontSize: 20 }} />
              </SearchIconWrapper>
              <SearchInput
                placeholder="Search by email"
                fullWidth
              />
            </Box>
          </Box>

          <Box>
            <Typography sx={{ mb: 1.5, fontWeight: 500, fontSize: '14px', color: '#111827' }}>
              Locations
            </Typography>
            <StyledSelect
              value=""
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
              renderValue={(selected) => {
                if (!selected) {
                  return "Search by locations";
                }
                return selected;
              }}
            >
              <MenuItem value="">All locations</MenuItem>
            </StyledSelect>
          </Box>

          <Box>
            <Typography sx={{ mb: 1.5, fontWeight: 500, fontSize: '14px', color: '#111827' }}>
              Role
            </Typography>
            <StyledSelect
              value="All"
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="User">User</MenuItem>
            </StyledSelect>
          </Box>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center',
          mt: 4,
          gap: 2,
          pt: 2,
          borderTop: '1px solid #E5E7EB',
        }}>
          <Typography sx={{ color: '#6B7280', fontSize: '14px' }}>
            Rows per page:
          </Typography>
          <Select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            variant="standard"
            IconComponent={KeyboardArrowDownIcon}
            sx={{ 
              fontSize: '14px',
              '& .MuiSelect-select': {
                py: 0,
                color: '#111827',
              },
              '&:before, &:after': {
                display: 'none',
              },
            }}
          >
            <MenuItem value={10}>10 Rows</MenuItem>
            <MenuItem value={25}>25 Rows</MenuItem>
            <MenuItem value={50}>50 Rows</MenuItem>
          </Select>
          <Typography sx={{ color: '#6B7280', fontSize: '14px', ml: 2 }}>
            0-0 of 0
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <PaginationButton disabled>
              <NavigateBeforeIcon />
            </PaginationButton>
            <PaginationButton disabled>
              <NavigateNextIcon />
            </PaginationButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
