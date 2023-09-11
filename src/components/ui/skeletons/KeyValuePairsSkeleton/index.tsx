import { Skeleton, Stack } from '@mantine/core';
import React from 'react';
export function KeyValuePairsSkeleton() {
  return (
    <Stack spacing={10}>
      <Skeleton width={250} height={15} radius="xl" />
      <Skeleton width={200} height={15} radius="xl" />
      <Skeleton width={250} height={15} radius="xl" />
      <Skeleton width={300} height={15} radius="xl" />
    </Stack>
  );
}
