import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>{Component.title}</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
