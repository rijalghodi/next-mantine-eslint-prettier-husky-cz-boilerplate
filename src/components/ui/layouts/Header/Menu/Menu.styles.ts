import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  menu: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    [theme.fn.smallerThan('67em')]: {
      borderRadius: 0,
      flexDirection: 'column',
      gap: theme.spacing.lg,
    },
  },
  link: {
    display: 'block',
    lineHeight: 1,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.dark[6],
    fontSize: '14px',
    fontWeight: 400,
    '&:hover': {
      color: theme.colors.brand[7],
    },
    [theme.fn.smallerThan('67em')]: {
      borderRadius: 0,
      fontSize: '18px',
    },
    [theme.fn.smallerThan('xs')]: {
      borderRadius: 0,
      fontSize: '16px',
    },
  },

  activeLink: {
    '&, &:hover': {
      color: theme.colors.brand[6],
      fontWeight: 600,
    },
  },
}));
