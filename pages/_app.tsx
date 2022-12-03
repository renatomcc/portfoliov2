import "../styles/globals.scss";
import "../styles/Home.module.scss"
import type { AppProps } from "next/app";
import { AppContainer } from "../components/AppContainer";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </MantineProvider>
  );
}
