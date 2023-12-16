import React, { useState } from "react";
import { fetchNui } from "@/utils/fetchNui";
import useAppStates from "@/hooks/useAppStates";

import { Flex } from "@chakra-ui/layout";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

import "./IndexView.css";

interface ReturnClientDataCompProps {
  data: unknown;
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({
  data,
}) => (
  <>
    <Heading>Returned Data:</Heading>
    <pre>
      <code>{JSON.stringify(data, null)}</code>
    </pre>
  </>
);

interface ReturnData {
  x: number;
  y: number;
  z: number;
}

const IndexView: React.FC = () => {
  const [clientData, setClientData] = useState<ReturnData | null>(null);
  const { token } = useAppStates();

  const handleGetClientData = () => {
    fetchNui<ReturnData>("getClientData")
      .then((retData) => {
        console.log("Got return data from client scripts:");
        console.dir(retData);
        setClientData(retData);
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
        setClientData({ x: 500, y: 300, z: 200 });
      });
  };

  return (
    <Flex
      h="100dvh"
      w="100dvw"
      overflowY="auto"
      marginLeft="auto"
      marginRight="auto"
      justifyContent="center"
    >
      <Flex
        w="fit-content"
        direction="column"
        justifyContent="center"
        padding={5}
      >
        <Box bg="customDark.800" padding={5} borderRadius={25}>
          <Heading>This is the NUI Popup!</Heading>
          <Text>Exit with the escape key</Text>
          <Button onClick={handleGetClientData}>Get Client Data</Button>
          {clientData && <ReturnClientDataComp data={clientData} />}
          {token && <Text>Token: {token}</Text>}
        </Box>
      </Flex>
    </Flex>
  );
};

export default IndexView;
