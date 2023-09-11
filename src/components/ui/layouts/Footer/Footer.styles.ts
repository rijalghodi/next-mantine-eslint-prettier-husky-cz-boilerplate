import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  footerConatiner: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: '2.5rem 2.5rem 0rem 0rem',
    overflow: 'hidden',
    background:
      'radial-gradient(100% 100% at 50% 0%, #FFFFFF 0%, #F8F9FA 100%);',
  },
  footer: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },

  footerNonCopyrightContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    alignItems: 'center',
    [theme.fn.largerThan('md')]: {
      flexDirection: 'row',
      gap: theme.spacing.sm,
    },
  },

  firstContent: {
    padding: '0px 1.5rem',
    flex: 2,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing.xs,
    width: '100%',
    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
      paddingLeft: theme.spacing.xl,
      paddingRight: 0,
      justifyContent: 'center',
      gap: '1rem',
    },
  },

  footerLogoContent: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
    padding: theme.spacing.xs,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing.lg,
    [theme.fn.largerThan('sm')]: {
      flex: 1.1,
    },
  },

  tutWuriLogo: {
    width: 80,
    height: 54,
    [theme.fn.largerThan('xs')]: {
      width: 100,
      height: 60,
    },
    [theme.fn.largerThan('sm')]: {
      width: 140,
      height: 80,
    },
  },

  firstContentDivider: {
    display: 'none',
    [theme.fn.largerThan('sm')]: { display: 'block' },
  },

  footerAddressContent: {
    padding: 0,
    [theme.fn.largerThan('xs')]: {
      flex: 2,
      paddingLeft: theme.spacing.sm,
    },
  },
  secondContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '100%',
    background:
      'radial-gradient(100% 100% at 50% 0%, #12B886 0%, #0AA475 100%)',
    padding: '1rem 1.5rem',
    [theme.fn.largerThan('xs')]: {
      flex: 0.95,
      padding: '1rem 2rem',
    },
    [theme.fn.largerThan('sm')]: {
      padding: '1rem 3rem',
      gap: theme.spacing.sm,
    },
    [theme.fn.largerThan('md')]: {
      padding: '2rem 1rem',
    },
  },
  ikutiMediaSosialContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    gap: 8,
    [theme.fn.largerThan('sm')]: {
      gap: theme.spacing.xs,
    },
  },

  copyright: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    [theme.fn.largerThan('sm')]: {
      padding: '3rem',
    },
    [theme.fn.largerThan('md')]: {
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
    },
  },

  bodyXs: {
    fontSize: 10,
    [theme.fn.largerThan('sm')]: {
      fontSize: 12,
    },
  },
  bodySm: {
    fontSize: 12,
    [theme.fn.largerThan('sm')]: {
      fontSize: 14,
    },
  },
  bodyMd: {
    fontSize: 12,
    [theme.fn.largerThan('sm')]: {
      fontSize: 16,
    },
  },
}));
