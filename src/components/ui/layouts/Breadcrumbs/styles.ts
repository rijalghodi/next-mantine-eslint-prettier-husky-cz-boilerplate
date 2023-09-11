import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  ellipsis: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },

  link: {
    maxWidth: 80,
    minHeight: 'min-content',
    textDecoration: 'none !important',
    color: theme.colors.dark[5],
    fontSize: '12px',
    fontWeight: 500,
    '&:hover': {
      color: theme.colors.brand[6],
    },
    [theme.fn.largerThan('xs')]: {
      maxWidth: 120,
    },
    [theme.fn.largerThan('sm')]: {
      maxWidth: 160,
    },
  },

  linkFontStyle: {
    textDecoration: 'none !important',
    color: theme.colors.dark[5],
    fontSize: '12px',
    fontWeight: 500,
    '&:hover': {
      color: theme.colors.brand[6],
    },
  },

  activeLink: {
    '&': {
      color: theme.colors.brand[5],
      fontWeight: 600,
    },
  },
}));
