import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.reup.app',
  appName: 'REUP',
  webDir: 'out',
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#000000',
    preferredContentMode: 'mobile'
  },
  server: {
    // For development - point to your live URL
    // url: 'https://web-self-two-69.vercel.app',
    // cleartext: true
  }
};

export default config;
