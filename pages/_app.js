import "../styles/globals.css";
import { Manrope } from "@next/font/google";
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';


const manrope = Manrope({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={manrope.className}>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </main>
  );
}

export default MyApp;
