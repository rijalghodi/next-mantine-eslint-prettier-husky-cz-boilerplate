import { MantineSize, Stack } from '@mantine/core';
import React from 'react';

import {
  Filters,
  SearchBar,
  TFiltersProps,
  TSearchBarProps,
} from '@/components/ui';

import { DefaultTable, TDefaultTableProps } from '../DefaultTable';

export type TBookProps<T> = TDefaultTableProps<T> & {
  loading?: boolean;
  error?: boolean;
  gutter?: MantineSize;
  searchBarProps?: TSearchBarProps;
  filtersProps?: TFiltersProps;
};

export function Book<T>(props: TBookProps<T>) {
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
