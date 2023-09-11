import {
  Select as MantineSelect,
  SelectProps as MantineSelectProps,
} from '@mantine/core';
import React from 'react';

export type TSelectProps = MantineSelectProps & {
  fullWidth?: boolean;
};

export function Select(props: TSelectProps) {
  const { styles, ...rest } = props;
  return (
    <MantineSelect
      radius="md"
      styles={(theme) => ({
        root: { width: props.fullWidth ? '100%' : 'auto' },
        dropdown: {
          borderRadius: '12px !important',
          boxShadow: '0px 4px 24px -8px rgba(134, 142, 150, 0.50)',
        },
        input: {
          color: theme.colors.dark[5],
        },
        item: {
          paddingTop: '10px',
          color: theme.colors.dark[5],
          paddingBottom: '10px',
          borderRadius: '8px !important',
        },
        label: {
          fontWeight: 500,
          color: theme.colors.dark[5],
        },
        ...styles,
      })}
      {...rest}
    />
  );
}
