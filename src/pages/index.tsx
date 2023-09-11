import { Title } from '@mantine/core';

import { LandingPageLayout, ResponsiveContainer } from '@/components/ui';
import { Jumbotron } from '@/components/ui/displays';

export default function Home() {
  console.log('test');
  return (
    <LandingPageLayout>
      <Jumbotron text="Halo" />
      <ResponsiveContainer>
        <Title>Next Mantine Eslint Prettier Husky Cz Boilerplate</Title>
      </ResponsiveContainer>
    </LandingPageLayout>
  );
}
