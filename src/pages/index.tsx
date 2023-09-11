import { LandingPageLayout, ResponsiveContainer } from '@/components/ui';
import { Jumbotron } from '@/components/ui/displays';
import { Title } from '@mantine/core';

export default function Home() {
  return (
    <LandingPageLayout>
      <Jumbotron text="Halo" />
      <ResponsiveContainer>
        <Title>Next Mantine Eslint Prettier Husky Cz Boilerplate</Title>
      </ResponsiveContainer>
    </LandingPageLayout>
  );
}
