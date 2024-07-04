import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Progress from "@/components/Progress";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>{Component.title}</title>

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/v1/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/v1/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/v1/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/v1/favicon/manifest.json" />
        </Head>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={Component.route} />
        </AnimatePresence>
        <Progress />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
