import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppContainer } from "../components/AppContainer";
import { MantineProvider } from "@mantine/core";
import Background from "../components/Background";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppContainer>
        <Background />
        <Component {...pageProps} />
      </AppContainer>
    </MantineProvider>
  );
}
