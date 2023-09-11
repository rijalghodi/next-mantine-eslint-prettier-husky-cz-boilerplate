import { Badge, BadgeProps } from '@mantine/core';
import React from 'react';

type Props = BadgeProps & {
  entity: 'opk' | 'odcb' | 'cb' | 'sdm' | 'lb' | 'sarpras' | string;
};

export function EntityBadge(props: Props) {
  const style = React.useMemo(() => {
    switch (props.entity) {
      case 'opk':
        return {
          color: 'pink.4',
          label: 'OPK',
        };
      case 'odcb':
        return {
          color: 'lime.7',
          label: 'ODCB',
        };
      case 'cb':
        return {
          color: 'grape.4',
          label: 'CB',
        };
      case 'sdm':
        return {
          color: 'blue.4',
          label: 'SDM',
        };
      case 'lb':
        return {
          color: 'cyan.4',
          label: 'LB',
        };
      case 'sarpras':
        return {
          color: 'orange.4',
          label: 'SARPRAS',
        };
      default:
        return undefined;
    }
  }, [props.entity]);

  if (!style) {
    return null;
  }
  return (
    <Badge
      variant="filled"
      color={style?.color}
      styles={(theme) => ({
        root: {
          padding: '2px 6px',
          height: '100%',
        },
        inner: {
          fontWeight: 500,
          fontSize: `calc(${theme.fontSizes[props.size ?? 'xs']} - 2px)`,
        },
      })}
    >
      {style?.label}
    </Badge>
  );
}
