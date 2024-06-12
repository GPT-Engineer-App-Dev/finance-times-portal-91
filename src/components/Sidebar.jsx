import { Box, Heading, Link } from '@chakra-ui/react';

const Sidebar = () => (
  <Box p={4} bg="gray.100">
    <Heading as="h2" size="md" mb={4}>Additional Links</Heading>
    <Box mb={4}>
      <Link href="#">Link 1</Link>
    </Box>
    <Box mb={4}>
      <Link href="#">Link 2</Link>
    </Box>
    <Box mb={4}>
      <Link href="#">Link 3</Link>
    </Box>
    <Box mb={4}>
      <Link href="#">Link 4</Link>
    </Box>
  </Box>
);

export default Sidebar;