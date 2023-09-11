import { Skeleton, Stack } from '@mantine/core';
import React from 'react';
interface Props {
  rowNumber?: number;
}

export function TableSkeleton(props: Props) {
  const foo: number[] = [];
  for (let i = 0; i < (props.rowNumber ?? 10); i++) {
    foo.push(i);
  }
  return (
    <Stack spacing={10}>
      {foo.map((v) => (
        <Skeleton height={50} width="100%" key={v} />
      ))}
    </Stack>
  );
}
