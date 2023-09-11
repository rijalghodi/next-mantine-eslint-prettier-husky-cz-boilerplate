import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  jumbotronText: {
    fontSize: 24,
    color: theme.colors.dark[6],
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: '1.4',
    [theme.fn.largerThan('xs')]: {
      fontSize: 34,
    },
    [theme.fn.largerThan('sm')]: {
      fontSize: 44,
    },
    [theme.fn.largerThan('md')]: {
      fontSize: 56,
    },
  },
}));
