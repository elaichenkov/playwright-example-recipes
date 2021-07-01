import { matchers } from 'playwright-expect';
import { PlaywrightTestConfig, expect } from '@playwright/test';

expect.extend(matchers);

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./global-setup'),
};

export default config;
