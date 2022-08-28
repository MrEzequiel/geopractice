import { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { CacheProvider, EmotionCache } from "@emotion/react";

import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Header from "../src/components/Header";
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

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <NextIntlProvider messages={pageProps.messages}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>GeoPractice</title>
        </Head>

        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <NProgressStyles />

          <Header />

          <Component {...pageProps} />
        </ThemeProvider>
      </NextIntlProvider>
    </CacheProvider>
  );
}
