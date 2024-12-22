// Review Page Styles
export const REVIEWS_LAYOUT = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px'
  }
};

export const HEADER_REFINEMENTS = {
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
    gap: '8px'
  }
};

export const SEARCH_BAR = {
  container: {
    position: 'relative',
    maxWidth: '500px',
    marginBottom: '24px'
  },
  input: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',
      backgroundColor: 'white',
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.12)'
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.24)'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'primary.main'
      }
    },
    '& .MuiInputBase-input': {
      padding: '12px 14px 12px 40px'
    }
  },
  searchIcon: {
    color: 'rgba(0, 0, 0, 0.54)',
    marginLeft: '8px'
  }
};

export const FILTER_SECTION = {
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
      '& .MuiOutlinedInput-root': {
        borderRadius: '20px',
        '& fieldset': {
          borderColor: 'rgba(0, 0, 0, 0.12)'
        }
      }
    }
  }
};

export const ASSESSMENT_SECTION = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
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
};

export const REVIEW_CARD = {
  container: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    marginBottom: '16px',
    position: 'relative'
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
    backgroundColor: '#FF8C00',
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
    marginBottom: '8px',
    '& .star': {
      color: '#FFB400',
      fontSize: '20px',
      '&.empty': {
        color: 'rgba(0, 0, 0, 0.12)'
      }
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
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

export const REVIEW_CARD_DETAILS = {
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
  actionIcons: {
    display: 'flex',
    gap: '8px',
    '& .icon-button': {
      padding: '6px',
      borderRadius: '50%',
      color: 'rgba(0, 0, 0, 0.54)',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
      }
    }
  }
};

export const PLATFORM_BADGES = {
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
};

export const PLATFORM_ICON_SIZES = {
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
};
