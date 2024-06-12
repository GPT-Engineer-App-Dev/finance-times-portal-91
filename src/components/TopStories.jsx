import { Box, Heading, Text } from '@chakra-ui/react';

const TopStories = () => (
  <Box p={4}>
    <Heading as="h2" size="md" mb={4}>Top Stories</Heading>
    <Box mb={4}>
      <Heading as="h3" size="sm">Story 1</Heading>
      <Text>Summary of the top story 1...</Text>
    </Box>
    <Box mb={4}>
      <Heading as="h3" size="sm">Story 2</Heading>
      <Text>Summary of the top story 2...</Text>
    </Box>
    <Box mb={4}>
      <Heading as="h3" size="sm">Story 3</Heading>
      <Text>Summary of the top story 3...</Text>
    </Box>
  </Box>
);

export default TopStories;