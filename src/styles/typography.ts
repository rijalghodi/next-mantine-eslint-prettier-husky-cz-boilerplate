import { MantineTheme } from '@mantine/core';

export const typographyStyles = (theme: MantineTheme) => ({
  '.heading1': {
    fontSize: 22,
    color: theme.colors.dark[5],
    fontWeight: 600,
    lineHeight: 1.3,
    [theme.fn.largerThan('sm')]: {
      fontSize: 32,
      fontWeight: 700,
    },
  },
  '.heading2': {
    fontSize: 20,
    lineHeight: 1.35,
    color: theme.colors.dark[5],
    fontWeight: 600,
    [theme.fn.largerThan('sm')]: {
      fontSize: 28,
      fontWeight: 700,
    },
  },
  '.heading3': {
    fontSize: 18,
    lineHeight: 1.4,
    color: theme.colors.dark[5],
    fontWeight: 600,
    [theme.fn.largerThan('sm')]: {
      fontSize: 24,
    },
  },
  '.heading4': {
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 600,
    color: theme.colors.dark[5],
    [theme.fn.largerThan('sm')]: {
      fontSize: 20,
    },
  },
  '.heading5': {
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: 600,
    color: theme.colors.dark[5],
    [theme.fn.largerThan('sm')]: {
      fontSize: 16,
    },
  },
  '.heading6': {
    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: 500,
    color: theme.colors.dark[4],
    [theme.fn.largerThan('sm')]: {
      fontSize: 14,
    },
  },
  '.bodyXxs': {
    fontSize: 8,
    lineHeight: 1.5,
    color: theme.colors.dark[3],
    [theme.fn.largerThan('sm')]: {
      fontSize: 10,
    },
  },
  '.bodyXs': {
    fontSize: 10,
    lineHeight: 1.5,
    color: theme.colors.dark[3],
    [theme.fn.largerThan('sm')]: {
      fontSize: 12,
    },
  },
  '.bodySm': {
    fontSize: 12,
    color: theme.colors.dark[3],
    lineHeight: 1.5,
    [theme.fn.largerThan('sm')]: {
      fontSize: 14,
    },
  },
  '.bodyMd': {
    fontSize: 14,
    color: theme.colors.dark[3],
    lineHeight: 1.5,
    [theme.fn.largerThan('sm')]: {
      fontSize: 16,
    },
  },
  '.bodyLg': {
    fontSize: 16,
    lineHeight: 1.5,
    color: theme.colors.dark[3],
    [theme.fn.largerThan('sm')]: {
      fontSize: 18,
    },
  },
  '.bodyXl': {
    fontSize: 18,
    lineHeight: 1.5,
    color: theme.colors.dark[3],
    [theme.fn.largerThan('sm')]: {
      fontSize: 20,
    },
  },

  // Body Only Size
  '.bodyXxsSizeOnly': {
    fontSize: 8,
    lineHeight: 1.5,
    [theme.fn.largerThan('sm')]: {
      fontSize: 10,
    },
  },
  '.bodyXsSizeOnly': {
    fontSize: 10,
    lineHeight: 1.5,
    [theme.fn.largerThan('sm')]: {
      fontSize: 12,
    },
  },
  '.bodySmSizeOnly': {
    fontSize: 12,
    lineHeight: 1.5,
    [theme.fn.largerThan('sm')]: {
      fontSize: 14,
    },
  },
  '.bodyMdSizeOnly': {
    fontSize: 14,
    lineHeight: 1.5,
    [theme.fn.largerThan('sm')]: {
      fontSize: 16,
    },
  },
  '.bodyLgSizeOnly': {
    fontSize: 16,
    lineHeight: 1.5,
    [theme.fn.largerThan('sm')]: {
      fontSize: 18,
    },
  },
  '.bodyXlSizeOnly': {
    fontSize: 18,
    lineHeight: 1.5,
    [theme.fn.largerThan('sm')]: {
      fontSize: 20,
    },
  },
});
