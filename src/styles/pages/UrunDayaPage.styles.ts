import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  topRightBlob: {
    position: 'absolute',
    top: -500,
    right: -500,
    zIndex: -1,
    [theme.fn.largerThan('xs')]: {
      right: -100,
    },
    [theme.fn.largerThan('sm')]: {
      right: 0,
    },
    [theme.fn.largerThan('md')]: {
      right: 50,
    },
    [theme.fn.largerThan('lg')]: {
      top: -450,
      right: 100,
    },
  },

  bottomLeftBlob: {
    position: 'absolute',
    left: -500,
    top: 260,
    zIndex: -1,
    [theme.fn.largerThan('xs')]: {
      left: -500,
      top: 250,
    },
    [theme.fn.largerThan('sm')]: {
      left: -450,
      top: 260,
    },
    [theme.fn.largerThan('md')]: {
      left: -400,
      top: 270,
    },
    [theme.fn.largerThan('lg')]: {
      left: -400,
      top: 270,
    },
  },

  componentsPaddingX: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
  },
}));
