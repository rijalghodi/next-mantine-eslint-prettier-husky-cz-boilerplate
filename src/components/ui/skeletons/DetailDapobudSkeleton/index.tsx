import { Grid, Group, Skeleton, Stack } from '@mantine/core';
import React from 'react';

import { KeyValuePairsSkeleton } from '../KeyValuePairsSkeleton';
export function DetailDapobudSkeleton() {
  return (
    <Grid gutter="lg">
      <Grid.Col span={12} md={6}>
        <Group position="center">
          <Skeleton width="75%" sx={{ aspectRatio: '1 / 1' }} radius="md" />
        </Group>
      </Grid.Col>
      <Grid.Col span={12} md={6}>
        <Stack spacing={64}>
          <KeyValuePairsSkeleton />
          <KeyValuePairsSkeleton />
          <KeyValuePairsSkeleton />
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
