import '@shopify/polaris/dist/styles.css';
import { AppProvider } from '@shopify/polaris';
import { Provider as AppBridgeProvider } from '@shopify/app-bridge-react';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const config = {
    apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY,
    host: pageProps.host || router.query.host,
    forceRedirect: true,
  };

  return (
    <AppBridgeProvider config={config}>
      <AppProvider i18n={{}}>
        <Component {...pageProps} />
      </AppProvider>
    </AppBridgeProvider>
  );
}
