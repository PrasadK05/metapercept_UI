import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box w="100%">
      <Box w="50%" m="auto" border="1px solid red">
        <Text>Title</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam ad
          nobis rem ipsam dolor ipsum veniam, vitae repellat. Aliquid!
        </Text>
        <Button>Raed More</Button>
      </Box>
    </Box>
  );
}
