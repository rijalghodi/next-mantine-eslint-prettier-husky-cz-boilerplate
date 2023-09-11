import {
  Box,
  Button,
  ColProps,
  Grid,
  Group,
  MantineSize,
  Paper,
  Stack,
} from '@mantine/core';
import { IconFilter } from '@tabler/icons-react';
import React from 'react';

export type IFilter = {
  component: React.ReactNode;
  col?: ColProps;
};

export type FiltersProps = {
  filters?: IFilter[];
  gutter?: MantineSize;
  initialExpanded?: boolean;
  alwaysExpanded?: boolean;
  hideFilterIcon?: boolean;
};

export function Filters(props: FiltersProps) {
  const [expanded, setExpanded] = React.useState(props.initialExpanded);
  return (
    <Stack spacing={props.gutter ?? '1em'}>
      {!props.hideFilterIcon && (
        <Group position="left">
          <Button
            radius="md"
            size="sm"
            fullWidth={false}
            sx={(theme) => ({
              color: theme.colors.dark[8],
              backgroundColor: expanded ? theme.colors.gray[2] : 'transparent',
              ['&:hover']: {
                backgroundColor: theme.colors.gray[2],
              },
            })}
            onClick={() => setExpanded?.((v) => !v)}
            leftIcon={<IconFilter size={14} />}
          >
            Filter
          </Button>
        </Group>
      )}
      <Box
        style={{
          maxHeight: props.alwaysExpanded || expanded ? 1000 : 0,
          transition: 'max-height 0.3s ease-in',
          overflow: 'hidden',
        }}
      >
        <Paper
          withBorder={!props.hideFilterIcon}
          style={{
            padding: props.hideFilterIcon ? 0 : '1em',
            borderRadius: 12,
            backgroundColor: props.hideFilterIcon ? 'transparent' : undefined,
          }}
        >
          <Grid gutter={props.gutter ?? '1em'}>
            {props.filters?.map((filter, index) => {
              return (
                <Grid.Col span={12} key={index} {...filter.col}>
                  {filter.component}
                </Grid.Col>
              );
            })}
          </Grid>
        </Paper>
      </Box>
    </Stack>
  );
}
