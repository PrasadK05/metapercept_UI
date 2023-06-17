import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      w="100%"
      display="flex"
      justifyContent={"space-between"}
      alignItems={"center"}
      border="1px solid red"
      h="70px"
      px="30px"
    >
      <Box>
        <Text>Title</Text>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Blog</Text>
        <Text>Contact</Text>
        <Button>Button</Button>
      </Box>
    </Box>
  );
}
