const buttonStyles = {
  border: 'none',
  borderRadius: '8px',
  bg: '#0095f6',
  color: '#ffffff',
  padding: '7px 16px',
  fontSize: '14px',
}

export default {
  variants: {
    primary: {
      ...buttonStyles,
      '&:hover': {
        bg: '#1877f2',
      },
    },
    secondary: {
      ...buttonStyles,
      color: 'none',
      bg: '#ffffff',
      '&:hover': {
        bg: '#f8f8ff',
      },
    },
    like: {
      ...buttonStyles,
      color: 'none',
      padding: 'none',
      bg: '#ffffff',
      '&:hover': {
        bg: '#f8f8ff',
      },
    },
  },
}
