import {
  Grid,
  Group,
  Pagination as MantinePagination,
  Select,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

export type TPageSizeValue = 10 | 20 | 30;

export type TPaginationProps = {
  currentPage?: number;
  totalPage?: number;
  totalAllData?: number;
  totalData?: number;
  pageSize?: TPageSizeValue;
  setPage?: (page: number) => void;
  setTotalData?: (pageSize: TPageSizeValue) => void;
};

export function Pagination(props: TPaginationProps) {
  const largeScreen = useMediaQuery(`(min-width: 77.5em`);
  const smallScreen = useMediaQuery(`(min-width: 52em`);

  const totalAllData = props.totalAllData ?? 0;
  const totalData = props.totalData ?? 0;
  const totalPage = props.totalPage ?? 0;
  const currentPage = props.currentPage ?? 0;
  const pageLength =
    props.currentPage === props.totalPage && props.totalPage !== 1
      ? (totalAllData - totalData) / (totalPage - 1)
      : (totalPage * totalData) / totalPage;

  const start = pageLength * (currentPage - 1) + 1;
  const end = start + totalData - 1;

  if (totalPage < 1 || totalAllData < 1) {
    return null;
  }
  return (
    <Grid mx={smallScreen ? 'sm' : 0} gutter="xs" gutterXs="xs">
      <Grid.Col span={12} sm={3}>
        <Group align="center" h="100%">
          <Text
            className="bodyXsSizeOnly"
            color="dark.2"
          >{`${start} - ${end} dari ${props.totalAllData} `}</Text>
        </Group>
      </Grid.Col>

      <Grid.Col span={12} sm={6}>
        <Group position="center">
          <MantinePagination
            aria-label="pagination component"
            total={totalPage}
            value={props.currentPage}
            onChange={props.setPage}
            size={largeScreen ? 'sm' : 'xs'}
            spacing={6}
            siblings={smallScreen ? 2 : 1}
            styles={(theme) => ({
              control: {
                color: `${theme.colors.dark[3]} !important`,
                // '&:hover': {
                //   borderColor: `${theme.colors.brand[0]} !important`,
                //   backgroundColor: `${theme.colors.brand[0]} !important`,
                // },
                '&[data-active]': {
                  backgroundImage: theme.fn.gradient({
                    from: theme.colors.brand[6],
                    to: theme.colors.brand[5],
                  }),
                  color: '#fff !important',
                  border: 0,
                  '&:hover': {
                    backgroundImage: theme.fn.gradient({
                      from: theme.colors.brand[7],
                      to: theme.colors.brand[6],
                    }),
                  },
                },
              },
            })}
          />
        </Group>
      </Grid.Col>

      {props.setTotalData && smallScreen && (
        <Grid.Col span={0} sm={3}>
          <Group position="right" align="center" h="100%" spacing="8px">
            <Text className="bodyXs" c="dark.2">
              Baris per halaman
            </Text>
            <Select
              onChange={(v) => {
                props.setTotalData?.(parseInt(v ?? '10', 10) as TPageSizeValue);
              }}
              value={String(props.pageSize)}
              data={['10', '20', '30']}
              defaultValue="10"
              size="xs"
              radius="md"
              classNames={{
                input: 'bodyXs',
                item: 'bodyXs',
              }}
              styles={{
                input: {
                  width: 60,
                },
                dropdown: {
                  borderRadius: '8px !important',
                  boxShadow: '0px 4px 24px -8px rgba(134, 142, 150, 0.50)',
                },
                item: {
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  borderRadius: '6px !important',
                },
              }}
            />
          </Group>
        </Grid.Col>
      )}
    </Grid>
  );
}
