import Head from "next/head";
import Home from "../components/Home";
import { Flex } from "@mantine/core";
import Background from "../components/Background";

export default function App() {
  return (
    <>
      <Background />
      <Head>
        <title>Renato Castro</title>
        <meta
          name="description"
          content="Renato Manfredinny Castro Portfolio Skills Projects and Links"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Home />
      </Flex>
    </>
  );
}
