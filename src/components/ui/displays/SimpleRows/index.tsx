import { Table, useMantineTheme } from '@mantine/core';
import React from 'react';

type Props = {
  data: string[] | React.ReactNode[];
};

export function SimpleRows(props: Props) {
  const theme = useMantineTheme();
  const rows = props.data.map((v: string | React.ReactNode, i: number) => (
    <tr key={i}>
      <td
        style={{
          borderBottom: '1px solid #999',
          borderBottomColor: theme.colors.brand[1],
        }}
      >
        {v}
      </td>
    </tr>
  ));

  return (
    <Table verticalSpacing="xs" horizontalSpacing="xs">
      <tbody>{rows}</tbody>
    </Table>
  );
}
