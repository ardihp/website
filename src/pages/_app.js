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
