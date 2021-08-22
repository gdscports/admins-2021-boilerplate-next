import {EmotionCache} from '@emotion/cache';
import {CacheProvider, ThemeProvider} from '@emotion/react';
import {CssBaseline} from '@material-ui/core';
import type {AppProps} from 'next/app';

import createEmotionCache from '../helpers/createEmotionCache';

export interface ExtendedAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: ExtendedAppProps) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default App;
