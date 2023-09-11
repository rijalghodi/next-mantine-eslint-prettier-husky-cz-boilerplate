import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  flyPosition: {
    position: 'static',
    marginLeft: theme.spacing.md,
    marginRight: theme.spacing.md,
    [theme.fn.largerThan('77.5em')]: {
      marginLeft: 'calc((100vw - 1200px)/2)',
      marginRight: 'calc((100vw - 1200px)/2)',
    },
  },
}));
