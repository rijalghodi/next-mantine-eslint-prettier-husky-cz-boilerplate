import { createStyles, rem } from '@mantine/core';

const HEADER_HEIGHT = rem(80);

export default createStyles((theme) => ({
  rootContainer: {
    position: 'relative',
    overflow: 'hidden',
    background: ' linear-gradient(180deg, #FFFFFF 0%, #F2F9FF 100%)',
  },
  header: {
    zIndex: 10,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    paddingLeft: '2.5rem',
    paddingRight: '2.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    borderBottom: '1px solid #000',
    borderColor: theme.colors.brand[5],
    boxShadow: '0px 2px 24px -6px rgba(134, 142, 150, 0.50)',
  },

  desktopMenuContainer: {
    display: 'none',
    [theme.fn.largerThan('67em')]: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },

  mobileMenuContainer: {
    display: 'block',
    [theme.fn.largerThan('67em')]: {
      display: 'none',
    },
  },

  mobileMenuDropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    padding: '3em 1em',
    left: 0,
    right: 0,
    zIndex: 9,
    borderRadius: '1.5rem',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    borderColor: theme.colors.brand[5],
    boxShadow: '0px 2px 24px -6px rgba(134, 142, 150, 0.50)',
  },

  buttonBoxDropdown: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
}));
