import { Stack, StackProps } from '@mantine/core';
import React from 'react';

type Props = StackProps;

export function ResponsiveContainer(props: Props) {
  return (
    <Stack
      sx={(theme) => ({
        margin: '0px auto',
        width: '100%',
        maxWidth: 1200,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        [theme.fn.largerThan('xs')]: {
          paddingLeft: theme.spacing.lg,
          paddingRight: theme.spacing.lg,
        },
        [theme.fn.largerThan('77.5em')]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      })}
      {...props}
    >
      {props.children}
    </Stack>
  );
}
