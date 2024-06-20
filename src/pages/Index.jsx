import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Heading as="h1">Financial Times</Heading>
        <Text>Welcome to Financial Times. Your source for the latest financial news and analysis.</Text>
        <Box bg="gray.100" p={4} borderRadius="md" w="full">
          <Heading as="h2" size="md" mb={2}>Latest Articles</Heading>
          <Text>Article 1: Placeholder content for the latest financial article.</Text>
          <Text>Article 2: Placeholder content for another financial article.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;