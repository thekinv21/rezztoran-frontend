import React from "react";
import { Stack } from "@chakra-ui/react";

const AminitiesContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Stack
        w="100%"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {children}
      </Stack>
    </React.Fragment>
  );
};

export default AminitiesContainer;
