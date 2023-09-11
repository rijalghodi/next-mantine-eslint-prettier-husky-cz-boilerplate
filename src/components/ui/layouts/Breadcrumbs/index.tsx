import {
  Anchor,
  Box,
  BoxProps,
  Breadcrumbs as MantineBreadcrumbs,
  Menu,
  UnstyledButton,
} from '@mantine/core';
import { IconChevronRight, IconCornerDownRight } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import React from 'react';

import { useStyles } from './styles';

export type TBreadcrumb = {
  title: string;
  link: string;
};

type Props = BoxProps & {
  data: TBreadcrumb[];
};

export function Breadcrumbs(props: Props) {
  const router = useRouter();
  const { classes, cx } = useStyles();
  const { data, ...rest } = props;
  const length = data.length;

  const ellipsisBreadcrumbs = length > 3 ? data.slice(1, length - 2) : null;
  const tailBreadcrumbs = length > 1 ? data.slice(length - 2, length) : null;

  return (
    <Box {...rest}>
      <MantineBreadcrumbs
        separator={<IconChevronRight size={12} />}
        styles={{
          root: {
            gap: '4px !important',
          },
          separator: {
            margin: 0,
          },
        }}
      >
        {length > 2 && (
          <Anchor
            py={8}
            href={data[0].link}
            className={cx(classes.link, classes.ellipsis)}
          >
            {data[0].title}
          </Anchor>
        )}

        {ellipsisBreadcrumbs && (
          <Menu
            shadow="md"
            width={200}
            position="bottom-start"
            trigger="click"
            radius="md"
            classNames={{
              itemLabel: cx(classes.ellipsis),
              item: classes.linkFontStyle,
            }}
            styles={{
              item: {
                padding: '4px 8px',
              },
              dropdown: {
                padding: '8px',
              },
              label: {},
            }}
          >
            <Menu.Target>
              <UnstyledButton className={classes.link} py={8}>
                ....
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              {ellipsisBreadcrumbs?.map((v, i) => (
                <Menu.Item
                  key={i}
                  component="a"
                  href={v.link}
                  icon={<IconCornerDownRight size={14} />}
                >
                  {v.title}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        )}

        {tailBreadcrumbs?.map((v, i) => (
          <Anchor
            py={8}
            href={v.link}
            key={i}
            className={cx(
              classes.link,
              {
                [classes.activeLink]: router.asPath === v.link,
              },
              classes.ellipsis
            )}
          >
            {v.title}
          </Anchor>
        ))}
      </MantineBreadcrumbs>
    </Box>
  );
}
