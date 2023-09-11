import { List as MantineList, ListItemProps, ListProps } from '@mantine/core';
import React from 'react';

type TProps = Omit<ListProps, 'children'> & {
  data: (string | React.ReactNode)[];
  listItemProps?: Omit<ListItemProps, 'children'>;
};

export function List(props: TProps) {
  const { data, listItemProps, ...rest } = props;
  return (
    <MantineList {...rest}>
      {data.map((v, i) => (
        <MantineList.Item key={i} {...listItemProps}>
          {v}
        </MantineList.Item>
      ))}
    </MantineList>
  );
}
