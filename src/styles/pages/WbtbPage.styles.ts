import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  topRightBlob: {
    position: 'absolute',
    top: -300,
    right: -450,
    zIndex: 0,
    overflow: 'hidden',
    [theme.fn.largerThan('xs')]: {
      right: -350,
    },
    [theme.fn.largerThan('sm')]: {
      right: -250,
    },
    [theme.fn.largerThan('md')]: {
      right: -200,
    },
    [theme.fn.largerThan('lg')]: {
      right: -200,
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
}));
