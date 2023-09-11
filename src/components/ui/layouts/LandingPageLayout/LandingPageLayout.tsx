import { AppShell, Box, Button, Group, Text } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import React from 'react';

import { Breadcrumbs, Footer, Header, IBreadcrumb } from '@/components/ui';

import { useStyles } from './LandingPageLayout.style';

type Props = {
  children: React.ReactNode;
  breadcrumbs?: IBreadcrumb[];
  enableBack?: boolean;
};

export function LandingPageLayout(props: Props) {
  const router = useRouter();
  const { classes } = useStyles();
  return (
    <AppShell
      header={<Header />}
      footer={<Footer />}
      styles={{
        main: {
          paddingLeft: 0,
          paddingRight: 0,
          overflow: 'hidden',
          position: 'relative',
          minHeight: '100vh',
        },
      }}
    >
      <Box className={classes.flyPosition}>
        {props.breadcrumbs && (
          <Breadcrumbs data={props.breadcrumbs ?? []} mb="xs" />
        )}

        {props.enableBack && (
          <Button
            variant="subtle"
            color="gray.8"
            onClick={() => router.back()}
            compact
            size="xs"
            px={0}
          >
            <Group spacing={4}>
              <IconChevronLeft size={16} />
              <Text span>Kembali</Text>
            </Group>
          </Button>
        )}
      </Box>
      {props.children}
    </AppShell>
  );
}
