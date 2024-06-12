import { Box, Heading, Text } from '@chakra-ui/react';

const LatestNews = () => (
  <Box p={4}>
    <Heading as="h2" size="md" mb={4}>Latest News</Heading>
    <Box mb={4}>
      <Heading as="h3" size="sm">News 1</Heading>
      <Text>Summary of the latest news 1...</Text>
    </Box>
    <Box mb={4}>
      <Heading as="h3" size="sm">News 2</Heading>
      <Text>Summary of the latest news 2...</Text>
    </Box>
    <Box mb={4}>
      <Heading as="h3" size="sm">News 3</Heading>
      <Text>Summary of the latest news 3...</Text>
    </Box>
  </Box>
);

export default LatestNews;