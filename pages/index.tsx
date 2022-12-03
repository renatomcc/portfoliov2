import Head from "next/head";
import Home from "../components/Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import { Flex } from "@mantine/core";
import styled from "@emotion/styled";

export default function App() {
  return (
    <>
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
