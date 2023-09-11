import { MantineSize, Stack } from '@mantine/core';
import React from 'react';

import {
  Filters,
  FiltersProps,
  SearchBar,
  SearchBarProps,
} from '@/components/ui';

import { DefaultTable, IDefaultTableProps } from '../DefaultTable';

export type BookProps<T> = IDefaultTableProps<T> & {
  loading?: boolean;
  error?: boolean;
  gutter?: MantineSize;
  searchBarProps?: SearchBarProps;
  filtersProps?: FiltersProps;
};

export function Book<T>(props: BookProps<T>) {
  const {
    loading,
    searchBarProps,
    filtersProps,
    gutter,
    ...defaultTableProps
  } = props;

  return (
    <Stack spacing={gutter ?? '1em'}>
      {searchBarProps && <SearchBar {...searchBarProps} />}
      {filtersProps && (
        <Filters {...filtersProps} gutter={filtersProps.gutter ?? gutter} />
      )}
      <DefaultTable
        skeletonRowNumber={5}
        {...defaultTableProps}
        fetching={loading}
      />
    </Stack>
  );
}
