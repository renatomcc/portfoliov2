import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppContainer } from "../components/AppContainer";
import { MantineProvider } from "@mantine/core";
import Background from "../components/Background";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Background />
      <AnimatePresence exitBeforeEnter>
        <div className="main">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </MantineProvider>
  );
}
