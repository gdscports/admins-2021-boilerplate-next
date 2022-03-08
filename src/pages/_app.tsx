import {NextSeo} from 'next-seo';

import Layout from '../components/Layout';

const App = ({Component, pageProps}) => {
  return (
    <>
      <NextSeo
        title="GDSC University of Portsmouth"
        description="A GDSC University of Portsmouth application."
        additionalLinkTags={[
          {rel: 'icon', href: '/favicon.png'},
          {rel: 'apple-touch-icon', href: '/favicon-180.png', sizes: '180x180'},
        ]}
        noindex
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
