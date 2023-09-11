// This file configures the intialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import getConfig from 'next/config';

const SENTRY_DSN = getConfig().publicRuntimeConfig.dsn;

Sentry.init({
  dsn: SENTRY_DSN,
  sampleRate: 0.65,
  // This sets the sample rate to be 10%. You may want this to be 100% while
});
