import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} textAlign="center">
      <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;