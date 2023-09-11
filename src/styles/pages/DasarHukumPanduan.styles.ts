import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  topRightBlob: {
    position: 'absolute',
    top: -400,
    right: -600,
    zIndex: -1,
    transform: 'rotate(15deg)',
    [theme.fn.largerThan('xs')]: {
      right: -550,
    },
    [theme.fn.largerThan('sm')]: {
      right: -500,
    },
    [theme.fn.largerThan('md')]: {
      right: -450,
    },
    [theme.fn.largerThan('lg')]: {
      top: -400,
      right: -400,
    },
  },

  componentsPaddingX: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
  },
}));
