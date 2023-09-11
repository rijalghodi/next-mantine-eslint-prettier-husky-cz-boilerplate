import {
  MultiSelect as MantineMultiSelect,
  MultiSelectProps as MantineMultiSelectProps,
} from '@mantine/core';
import React from 'react';

export type MultiSelectProps = MantineMultiSelectProps & {
  fullWidth?: boolean;
};

export function MultiSelect(props: MultiSelectProps) {
  const { styles, ...rest } = props;
  return (
    <MantineMultiSelect
      radius="md"
      styles={(theme) => ({
        root: { width: props.fullWidth ? '100%' : 'auto' },
        values: {
          flexWrap: 'nowrap',
          // flexDirection: 'row-reverse',
          // justifyContent: 'left',
          overflow: 'auto',
          scrollbarWidth: 'none',
          '::-webkit-srollbar': {
            display: 'none',
          },
        },

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
