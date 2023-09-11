import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  header: {
    textTransform: 'capitalize',
    backgroundColor: 'inherit !important',

    '&& th': {
      color: theme.colors.dark[5],
      fontWeight: 500,
    },
  },
  root: {
    '&& tr': {
      backgroundColor: 'inherit !important',
    },
  },
}));
