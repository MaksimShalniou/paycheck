import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const getCustomTheme = (primary, secondary) => {
  const theme = responsiveFontSizes(
    createTheme({
      spacing: 4,
      props: {
        MuiButtonBase: {
          disableRipple: true
        }
      },
      palette: {
        primary: {
          main: primary || '#FFFFFF'
        },
        secondary: {
          main: secondary || '#E5E5E5'
        },
        error: {
          main: '#D72A2A'
        }
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 992,
          lg: 1200
        }
      }
    })
  );

  theme.overrides = {
    MuiTypography: {
      h1: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '82px',
        letterSpacing: 0,

        [theme.breakpoints.up('lg')]: {
          fontSize: '72px'
        },

        [theme.breakpoints.up('md')]: {
          fontSize: '72px'
        },

        [theme.breakpoints.down('sm')]: {
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: '42px'
        }
      },
      h3: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '18px',
        letterSpacing: 0.2,

        [theme.breakpoints.up('lg')]: {
          fontSize: '18px'
        },

        [theme.breakpoints.up('md')]: {
          fontSize: '18px'
        }
      },
      body1: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '28px',
        display: 'flex',
        alignItems: 'center',
        letterSpacing: '0.2px',
        [theme.breakpoints.down('sm')]: {
          fontSize: '12px',
          lineHeight: '22px'
        }
      },
      body2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '28px',
        [theme.breakpoints.down('sm')]: {
          fontSize: '12px',
          lineHeight: '24px'
        }
      }
    }
  };

  return theme;
};
