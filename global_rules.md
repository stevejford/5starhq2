# Global Rules for Review Management Dashboard

## Design Guidelines

### Colors
- Primary Brand Color: `#5861c5` (var --brand_main_color)
- Background Color: `#FBF8F6` (var --brand_main_background)
- Text Colors:
  - Primary: `#484848`
  - Secondary: `#8e8e8e`

### Typography
- Font Family: Poppins (var --brand_font)
- Font Weights:
  - Regular: 400
  - Medium: 500
  - Semibold: 600
  - Bold: 700

### Border Radius
- Default: 20px (var --brand_button_border_radius)

### Button Styles
- Height: 41px
- Width: 207px (standard)
- Primary Button:
  - Background: `#25D366`
  - Hover: `rgb(29, 168, 81)`
  - Text Color: White
  - Font Weight: 600

### Card Styles
- Border: 1px solid #D6D6D6
- Background: White
- Box Shadow: 0px 4px 30px rgba(0, 0, 0, 0.03)
- Padding: 16px

## Layout Guidelines

### Spacing
- Page Padding: 40px
- Grid Gap: 24px
- Section Spacing: 32px

### Responsive Breakpoints
- Mobile: < 600px
- Tablet: 600px - 960px
- Desktop: > 960px

## Icon Usage
- Always use Material-UI (MUI) icons from `@mui/icons-material` package
- Never use external image files for icons that are available in MUI
- For custom icons not available in MUI, create them as SVG components following MUI's icon pattern
- Common icon imports should be centralized in a shared icons file

### Icon Styling
```typescript
// Correct usage with MUI icons
import { Icon } from '@mui/icons-material';

// For consistent sizing, use MUI's built-in size props or sx
<Icon sx={{ 
  width: 24,
  height: 24,
  '& path': {
    fill: 'currentColor'
  }
}} />

// For custom scaling, use transform
<Icon sx={{ 
  transform: 'scale(0.45)',
  '& path': {
    fill: 'currentColor'
  }
}} />
```

### Custom Icon Pattern
```typescript
// For custom icons not available in MUI
import { SvgIcon } from '@mui/material';

const CustomIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      d="[path data]"
    />
  </SvgIcon>
);
```

## MUI Theme and Styling Guidelines

### Color Palette
```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#5861c5', // Sidebar and primary buttons
    },
    background: {
      default: '#FBF8F6', // Main content background
      paper: '#ffffff',   // Card background
    },
    text: {
      primary: '#484848',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    grey: {
      200: '#D6D6D6', // Border color
    }
  },
});
```

### Layout Constants
```typescript
const LAYOUT = {
  sidebar: {
    width: 240,
    backgroundColor: '#5861c5',
    textColor: '#ffffff',
  },
  content: {
    padding: {
      top: 40,
      left: 40,
      right: 40,
    }
  },
  card: {
    width: 255,
    height: 205,
    borderRadius: 20,
    padding: 16,
    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.03)',
  },
  button: {
    height: 41,
    width: 207,
    borderRadius: 20,
  }
};
```

### Component Specific Styles

#### TextField (Search)
```typescript
const searchBarStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    backgroundColor: '#fff',
    '& fieldset': {
      borderColor: '#D6D6D6',
    },
  },
  width: '100%',
  maxWidth: 600,
};
```

#### Integration Card
```typescript
const cardStyles = {
  width: 255,
  height: 205,
  border: '1px solid #D6D6D6',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  gap: '16px',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.03)',
};
```

#### Integration Button
```typescript
const buttonStyles = {
  standard: {
    color: '#FFFFFF',
    width: '207px',
    height: '41px',
    background: '#5861c5',
    fontWeight: 600,
    borderRadius: '20px',
    textTransform: 'none',
    '&:hover': {
      background: '#4a51a5',
    },
  },
  edit: {
    color: '#5861c5',
    width: '207px',
    height: '41px',
    background: 'transparent',
    border: '1px solid #5861c5',
    fontWeight: 600,
    borderRadius: '20px',
    textTransform: 'none',
  },
};
```

### Grid Layout
```typescript
const gridConfig = {
  container: {
    spacing: 3,
    padding: 2,
  },
  item: {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  },
};
```

### Typography
```typescript
const typography = {
  h4: {
    fontWeight: 500,
    marginBottom: 1,
  },
  body1: {
    color: 'text.secondary',
    marginBottom: 3,
  },
};
```

### Search Field Styles
- Max Width: 500px
- Border Radius: 8px
- Background: White
- Border Color: rgba(0, 0, 0, 0.12)
- Hover Border Color: rgba(0, 0, 0, 0.24)
- Padding: 12px 14px
- Placeholder Color: text.secondary

### Typography Variants
```typescript
typography: {
  h4: {
    fontSize: '24px',
    fontWeight: 500,
    color: 'text.primary',
    marginBottom: '8px'
  },
  body1: {
    lineHeight: 1.5,
    color: 'text.secondary'
  }
}
```

### Grid Layout
```typescript
const GRID_BREAKPOINTS = {
  xs: '1fr',                    // Mobile: 1 column
  sm: 'repeat(2, 1fr)',         // Tablet: 2 columns
  md: 'repeat(3, 1fr)',         // Small Desktop: 3 columns
  lg: 'repeat(6, 1fr)'          // Large Desktop: 6 columns
};
```

### Logo
- Location: /temp_project/public/5star-logo.png
- Width: 140px
- Height: auto
- Margin Bottom: 24px

## UI/UX Design Principles

### Design Philosophy
- Maintain visual hierarchy through consistent spacing and typography
- Use whitespace effectively to improve readability
- Ensure interactive elements are easily identifiable
- Maintain consistent hover and focus states
- Follow Material Design principles while maintaining our brand identity

### Component Spacing
- Vertical Rhythm: Maintain 8px grid system
- Section Spacing: 32px between major sections
- Component Padding: 24px for containers
- Element Spacing: 16px between related elements
- List Item Spacing: 12px between items

### Interactive States
- Hover Effects:
  - Scale: transform: scale(1.02)
  - Transition: 200ms ease-in-out
  - Shadow: Subtle elevation increase
- Focus States:
  - Visible outline for accessibility
  - Color: primary.main with 0.2 opacity
- Active States:
  - Slight depression effect
  - Darker shade of the base color

### Reviews Page Guidelines

#### Header Section
```typescript
const REVIEWS_HEADER = {
  title: {
    fontSize: '24px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '& .info-icon': {
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize: '20px'
    }
  },
  location: {
    position: 'absolute',
    right: '24px',
    top: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '& .MuiSelect-root': {
      minWidth: '150px'
    }
  }
}
```

#### Review Card Design
```typescript
const REVIEW_CARD = {
  container: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    marginBottom: '16px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px'
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#FF8C00', // For default avatar background
    color: 'white',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userInfo: {
    flex: 1,
    '& .name': {
      fontSize: '16px',
      fontWeight: 500,
      marginBottom: '4px'
    },
    '& .date': {
      fontSize: '14px',
      color: 'text.secondary'
    }
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'text.secondary',
    fontSize: '14px',
    '& .location-icon': {
      fontSize: '16px'
    }
  },
  rating: {
    display: 'flex',
    gap: '2px',
    '& .star': {
      color: '#FFB400',
      fontSize: '20px'
    }
  },
  content: {
    fontSize: '14px',
    lineHeight: 1.5,
    color: 'text.primary',
    marginBottom: '16px'
  },
  actions: {
    display: 'flex',
    gap: '12px',
    '& .action-button': {
      height: '36px',
      padding: '0 16px',
      borderRadius: '18px',
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '14px'
    },
    '& .icon-button': {
      width: '36px',
      height: '36px',
      padding: '8px',
      color: 'rgba(0, 0, 0, 0.54)'
    }
  }
}
```

#### Review Card Additional Details
```typescript
const REVIEW_CARD_DETAILS = {
  googleBadge: {
    position: 'absolute',
    right: '4px',
    top: '4px',
    width: '16px',
    height: '16px'
  },
  verifiedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '2px 6px',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: '4px',
    fontSize: '12px',
    color: '#4CAF50',
    marginLeft: '8px'
  },
  contactIcons: {
    display: 'flex',
    gap: '4px',
    '& .icon': {
      width: '16px',
      height: '16px',
      opacity: 0.6
    }
  },
  replyButton: {
    backgroundColor: '#5861c5',
    color: 'white',
    '&:hover': {
      backgroundColor: '#4a51a5'
    }
  },
  replyPrivatelyButton: {
    backgroundColor: '#5861c5',
    color: 'white',
    '&:hover': {
      backgroundColor: '#4a51a5'
    }
  },
  actionIcons: {
    marginLeft: 'auto',
    display: 'flex',
    gap: '8px',
    '& .icon-button': {
      padding: '6px',
      borderRadius: '50%',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
      }
    }
  }
}
```

#### Header Refinements
```typescript
const HEADER_REFINEMENTS = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    position: 'relative'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '& .info-icon': {
      color: 'rgba(0, 0, 0, 0.54)',
      cursor: 'pointer',
      '&:hover': {
        color: 'rgba(0, 0, 0, 0.87)'
      }
    }
  },
  locationSelector: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '& .MuiSwitch-root': {
      marginRight: '8px'
    }
  }
}
```

#### Rating Display
```typescript
const RATING_DISPLAY = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },
  star: {
    color: '#FFB400',
    fontSize: '16px',
    '&.empty': {
      color: 'rgba(0, 0, 0, 0.12)'
    }
  },
  partialStar: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
      backgroundColor: '#FFB400',
      maskImage: 'url(star-half.svg)',
      maskSize: 'cover'
    }
  }
}
```

#### Assessment Section
```typescript
const ASSESSMENT_SECTION = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px 24px',
    backgroundColor: '#F5F2FD',
    borderRadius: '8px'
  },
  label: {
    fontSize: '14px',
    color: 'text.secondary',
    marginRight: '8px'
  },
  thumbButton: {
    minWidth: 'unset',
    padding: '6px',
    borderRadius: '50%',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)'
    },
    '&.active': {
      backgroundColor: '#5861c5',
      color: 'white',
      borderColor: '#5861c5'
    }
  }
}
```

#### Date Format
```typescript
const DATE_FORMAT = {
  format: 'MMM DD, YYYY',
  style: {
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.6)'
  }
}
```

#### Filter Section
```typescript
const FILTER_SECTION = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  filters: {
    display: 'flex',
    gap: '16px',
    '& .filter-select': {
      minWidth: '150px',
      '& .MuiSelect-select': {
        padding: '8px 16px',
        borderRadius: '20px'
      }
    }
  },
  assessment: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '& .thumbs-button': {
      width: '36px',
      height: '36px',
      borderRadius: '18px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
      }
    }
  }
}
```

#### Search Bar
```typescript
const SEARCH_BAR = {
  container: {
    position: 'relative',
    maxWidth: '300px',
    marginBottom: '24px'
  },
  input: {
    width: '100%',
    height: '40px',
    borderRadius: '20px',
    padding: '8px 16px 8px 40px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    backgroundColor: 'white',
    '&:focus': {
      borderColor: 'primary.main',
      outline: 'none'
    }
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '20px'
  }
}
```

#### Icons and Badges
```typescript
const REVIEW_ICONS = {
  verified: {
    color: '#4CAF50',
    fontSize: '16px'
  },
  phone: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '16px'
  },
  email: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '16px'
  }
}
```

#### Review Status Indicators
```typescript
const REVIEW_STATUS = {
  replied: {
    backgroundColor: '#E3F2FD',
    color: '#1976D2',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 500
  },
  pending: {
    backgroundColor: '#FFF3E0',
    color: '#F57C00',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 500
  }
}
```

## Component Guidelines

### Integration Cards
- Width: 255px
- Height: 205px
- Icon Size: 56px x 56px
- Vertical Layout:
  1. Platform Icon
  2. Platform Name
  3. Action Button

### Search Bar
- Full width (max 600px)
- Height: 48px
- Border: 1px solid #D6D6D6
- Border Radius: 20px

## Best Practices

### Code Organization
1. Use TypeScript for type safety
2. Implement proper error handling
3. Follow React best practices and hooks guidelines
4. Keep components modular and reusable

### Performance
1. Implement lazy loading for routes
2. Optimize images and assets
3. Use proper caching strategies
4. Minimize bundle size

### Accessibility
1. Use semantic HTML
2. Provide proper ARIA labels
3. Ensure keyboard navigation
4. Maintain sufficient color contrast

### State Management
1. Use React Query for server state
2. Local state with useState/useReducer
3. Context API for theme/global states
4. Proper error boundaries implementation

### MUI Best Practices
1. Use MUI's `useTheme` and `makeStyles` for consistent styling
2. Leverage MUI's built-in responsive breakpoints
3. Use MUI's spacing units (1 unit = 8px)
4. Maintain consistent elevation with MUI's shadow system
5. Use MUI's Typography components for text consistency

#### Platform Badges
```typescript
const PLATFORM_BADGES = {
  container: {
    position: 'absolute',
    right: '8px',
    top: '8px',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  platforms: {
    google: '/temp_project/public/platform-icons/google.svg',
    facebook: '/temp_project/public/platform-icons/facebook.svg',
    trustpilot: '/temp_project/public/platform-icons/trustpilot.svg',
    tripadvisor: '/temp_project/public/platform-icons/tripadvisor.svg',
    airbnb: '/temp_project/public/platform-icons/airbnb.svg',
    'google-play': '/temp_project/public/platform-icons/google-play.svg',
    'app-store': '/temp_project/public/platform-icons/app-store.svg',
    yelp: '/temp_project/public/platform-icons/yelp.svg',
    agoda: '/temp_project/public/platform-icons/agoda.svg',
    amazon: '/temp_project/public/platform-icons/amazon.svg',
    ebay: '/temp_project/public/platform-icons/ebay.svg',
    'yellow-pages': '/temp_project/public/platform-icons/yellow-pages.svg',
    'hotels.com': '/temp_project/public/platform-icons/hotels.svg',
    opentable: '/temp_project/public/platform-icons/opentable.svg',
    healthgrades: '/temp_project/public/platform-icons/healthgrades.svg',
    ratemds: '/temp_project/public/platform-icons/ratemds.svg'
  }
}
```

### Shared Components

#### Platform Icon
```typescript
interface PlatformIconProps {
  platform: keyof typeof PLATFORM_BADGES.platforms;
  size?: 'small' | 'medium' | 'large';
}

const PLATFORM_ICON_SIZES = {
  small: {
    width: '24px',
    height: '24px'
  },
  medium: {
    width: '32px',
    height: '32px'
  },
  large: {
    width: '48px',
    height: '48px'
  }
}

```

### Reviews Page Filter Section

#### Layout & Typography
- Section headings: 
  - Color: #111827
  - Font weight: 500
  - Font size: Subtitle2 variant
  - Margin bottom: 8px

#### Assessment Section
- Header row:
  - "Assessment" text aligned left
  - "Clear" button aligned right
  - Use space-between for alignment

- Clear button:
  - Color: #DC2626 (red)
  - Font size: 14px
  - Text decoration: underline
  - Text underline offset: 2px
  - Hover: Darker red (#B91C1C)
  - No background
  - No text transform

- Thumbs up/down buttons:
  - Size: 120px width, 44px height
  - White background
  - Border: 1px solid #E5E7EB
  - Border radius: 22px (pill shape)
  - Padding: consistent
  - Icons: 20px size
  - Thumbs up: Black icon (#111827)
  - Thumbs down: Red icon (#DC2626)
  - Hover: Darker border (#D1D5DB)

#### Dropdown Selects
- Height: 44px
- White background
- Border: 1px solid #D1D5DB
- Border radius: 6px
- Hover/focus: Darker border
- Padding: 8px 12px
- Gap between items: 8px

#### Date Range Selector
- Uses the same styling as other dropdowns
- Includes calendar icon
- Proper spacing between elements

#### Search Input
- Same styling as dropdowns
- Includes search icon
- Placeholder text styling matches other inputs

#### Buttons
- Primary button (Apply):
  - Background: #2563EB
  - Text color: white
  - Border radius: 6px
  - Padding: 8px 16px
- Reset button:
  - Text color: #4B5563
  - No background
  - Same padding as Apply button

#### Layout
- Flex layout with proper spacing
- Responsive design considerations
- Consistent alignment of elements
- Section spacing: 16px (mb: 2)
- Between header and buttons: 8px (mb: 1)
- Between buttons: 16px (gap: 2)

#### Icons
- Use solid icons (not outlined)
- Size: 20px x 20px
- Proper scaling and centering

#### Hover States
- Buttons: Maintain white background, darken border
- Clear: No background change, darker red
- Dropdowns: Darker border on hover/focus

#### Branding Toggle and Alert
- When the branding toggle is switched to the right, the branding elements will have their opacity reduced to indicate that branding is off.
- A success alert will appear at the top of the page stating "Your changes have been saved!" when the branding is toggled.
- The alert will automatically disappear after 5 seconds.

## Locations Page Specifications

#### Layout
- Page padding: 326px left and right, 24px top and bottom
- Grid layout with auto-fill columns
- Minimum card width: 280px
- Gap between cards: 24px (gap: 3)
- Top margin for grid: 32px (mt: 4)

#### Header Section
- Title "Locations" styling:
  - Font weight: 600
  - Color: #111827
- Search bar:
  - Width: 400px
  - Border: 1px solid #E5E7EB
  - Border radius: 8px
  - No box shadow
  - Padding: 2px 4px

#### Add New Location Card
- Background color: #FFFFFF
- Border: 1px solid #F3F4F6
- Border radius: 12px
- Box shadow: 0px 1px 3px rgba(0, 0, 0, 0.1)
- Minimum height: 240px
- Padding: 32px (p: 4)
- Hover state: Box shadow changes to 0px 4px 6px rgba(0, 0, 0, 0.1)
- Add icon:
  - Circle background: #F9FAFB
  - Icon color: #9CA3AF
  - Circle size: 48px x 48px
  - Icon size: 24px
- Text color: #6B7280
- Font size: 0.875rem
- Font weight: 500

#### Location Cards
- Border: 1px solid #F3F4F6
- Border radius: 12px
- Padding: 32px (p: 4)
- Minimum height: 240px
- Background color: #FFFFFF
- Box shadow: 0px 1px 3px rgba(0, 0, 0, 0.1)

#### Card Icons
- Verified icon:
  - Position: top-left (16px from top and left)
  - Color: #10B981
- Delete icon:
  - Position: top-right (16px from top and right)
  - Color: #6B7280
  - Cursor: pointer

#### Logo
- Height: 47px exactly
- Width: auto
- Object-fit: contain
- Container:
  - Top margin: 40px (mt: 5)
  - Bottom margin: 16px (mb: 2)
  - Centered horizontally and vertically

#### Text Elements
- Location name:
  - Font weight: 500
  - Color: #111827
  - Text align: center
  - No top margin
  - Bottom margin: 8px (mb: 1)
- Date:
  - Color: #6B7280
  - Font size: 0.875rem
  - Text align: center
  - Bottom margin: 24px (mb: 3)

#### Edit Button
- Variant: outlined
- Color: #6B7280
- Border color: #E5E7EB
- Border radius: 20px
- No text transform
- Hover:
  - Border color: #D1D5DB
  - No background color
- Margin top: auto (pushes to bottom)

## Review Link Page Specifications

#### Layout and Dimensions
- Card width: 390px
- Card height: 728px
- Consistent padding and margins throughout the layout

#### Typography
- "Powered by" text:
  - Font size: 14px
  - Color: #6B7280
  - Font weight: 400
  - White space: nowrap to prevent text wrapping
- Logo height: 48px with auto width

#### Branding Section
- Positioned at the bottom of the card
- Includes "Powered by" text and 5star logo
- Logo links to 5starhq.com.au
- When branding is hidden:
  - Opacity reduces to 0.2
  - Smooth transition with 0.3s ease
  - Success alert appears at top of page
  - Alert automatically disappears after 5 seconds

#### Interactive Elements
- Edit icons next to business name and stars
- Hide Branding Popper:
  - Width: 80px
  - Height: 42px
  - Includes eye-off icon and toggle switch
  - Proper padding for aesthetics

## Reviews Page Specifications

#### Filter Section
- Background color: #F9FAFB
- Border radius: 8px
- Padding: 16px

#### Filter Inputs
- Font: Inter
- Font size: 14px
- Line height: 20px
- Color: #374151

#### Dropdowns
- Border: 1px solid #D1D5DB
- Border radius: 6px
- Background color: white
- Hover/focus: Darker border
- Padding: 8px 12px
- Gap between items: 8px

#### Date Range Selector
- Uses the same styling as other dropdowns
- Includes calendar icon
- Proper spacing between elements

#### Search Input
- Same styling as dropdowns
- Includes search icon
- Placeholder text styling matches other inputs

#### Buttons
- Primary button (Apply):
  - Background: #2563EB
  - Text color: white
  - Border radius: 6px
  - Padding: 8px 16px
- Reset button:
  - Text color: #4B5563
  - No background
  - Same padding as Apply button

#### Layout
- Flex layout with proper spacing
- Responsive design considerations
- Consistent alignment of elements
- Spacing:
  - Between sections: 16px (mb: 2)
  - Between header and buttons: 8px (mb: 1)
  - Between buttons: 16px (gap: 2)

#### Icons
- Use solid icons (not outlined)
- Size: 20px x 20px
- Proper scaling and centering

#### Hover States
- Buttons: Maintain white background, darken border
- Clear: No background change, darker red
- Dropdowns: Darker border on hover/focus

#### Branding Toggle and Alert
- When the branding toggle is switched to the right, the branding elements will have their opacity reduced to indicate that branding is off.
- A success alert will appear at the top of the page stating "Your changes have been saved!" when the branding is toggled.
- The alert will automatically disappear after 5 seconds.
