import { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { CacheProvider, EmotionCache } from "@emotion/react";

import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { NextIntlProvider } from "next-intl";

import { Router } from "next/router";
import NProgress from "nprogress";
import NProgressStyles from "../src/components/NProgressStyles";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
const isProduction = process.env.NODE_ENV === "production";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      {GOOGLE_ANALYTICS && isProduction && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`}
          />

          <Script
            strategy="lazyOnload"
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });`,
            }}
          />
        </>
      )}

      <CacheProvider value={emotionCache}>
        <NextIntlProvider messages={pageProps.messages}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
            <title>GeoPractice</title>
          </Head>

          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <NProgressStyles />

            <Header />

            <Box component="main" mt={3} mb={6} minHeight="80vh">
              <Component {...pageProps} />
            </Box>

            <Footer />
          </ThemeProvider>
        </NextIntlProvider>
      </CacheProvider>
    </>
  );
}
