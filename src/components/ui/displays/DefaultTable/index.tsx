import { Box, Overlay, ScrollArea, useMantineTheme } from '@mantine/core';
import { DataTable, DataTableColumn, DataTableProps } from 'mantine-datatable';
import React from 'react';

import {
  EmptyTableState,
  IEmptyTableStateProps,
  Pagination,
  PaginationProps,
  TableSkeleton,
} from '@/components/ui';

import { useStyles } from './DefaultTable.styles';

export type IDefaultTableProps<T> = DataTableProps<T> & {
  minWidth?: number | string;
  sameWidthColumns?: boolean;
  paginationProps?: PaginationProps;
  emptyTableStateProps?: IEmptyTableStateProps;
  skeletonRowNumber?: number;
};

export function DefaultTable<T>(props: IDefaultTableProps<T>) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const {
    minHeight, // eslint-disable-line unused-imports/no-unused-vars
    noRecordsText, // eslint-disable-line unused-imports/no-unused-vars
    defaultColumnRender, // eslint-disable-line unused-imports/no-unused-vars
    highlightOnHover, // eslint-disable-line unused-imports/no-unused-vars
    fetching, // eslint-disable-line unused-imports/no-unused-vars
    noRecordsIcon, // eslint-disable-line unused-imports/no-unused-vars
    groups, // eslint-disable-line unused-imports/no-unused-vars
    paginationProps,
    emptyTableStateProps,
    columns,
    sameWidthColumns,
    minWidth,
    skeletonRowNumber,
    ...rest
  } = props;

  const modifiedColumns: DataTableColumn<T>[] | undefined =
    React.useMemo(() => {
      if (sameWidthColumns && columns) {
        const width = `${100 / columns?.length}%`;
        return columns.map((v) => ({ ...v, width }));
      }
      return columns;
    }, [columns, sameWidthColumns]);

  // if (fetching) {
  //   return <TableSkeleton rowNumber={props.skeletonRowNumber ?? 3} />;
  // }

  return (
    <Box>
      <ScrollArea w="100%" h="100%" mb="xs" pos="relative">
        {fetching && <Overlay color="#fff" opacity={0.1} />}
        <Box sx={{ minWidth: minWidth ?? 600, width: '100%' }}>
          <DataTable
            classNames={classes}
            fontSize={12}
            columns={modifiedColumns ?? []}
            rowClassName="bodyXs"
            horizontalSpacing="8px"
            verticalSpacing="sm"
            verticalAlignment="center"
            borderColor={theme.colors.brand[5]}
            highlightOnHover={true}
            rowBorderColor={theme.colors.brand[1]}
            minHeight={0}
            defaultColumnRender={(row, _, accessor) => {
              const data = row[accessor];
              return data === 0 ? 0 : data ?? '-';
            }}
            emptyState={<></>}
            {...rest}
          />
        </Box>
      </ScrollArea>

      {fetching && <TableSkeleton rowNumber={skeletonRowNumber ?? 3} />}
      {props.records && props.records.length === 0 && (
        <EmptyTableState {...emptyTableStateProps} />
      )}

      {paginationProps && <Pagination {...paginationProps} />}
    </Box>
  );
}
