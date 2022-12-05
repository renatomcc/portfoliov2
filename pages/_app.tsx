import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppContainer } from "../components/AppContainer";
import { MantineProvider } from "@mantine/core";
import Background from "../components/Background";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppContainer>
        <Background />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </AppContainer>
    </MantineProvider>
  );
}
