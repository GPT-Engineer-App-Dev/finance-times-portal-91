import { Box, Flex, Heading, Link } from '@chakra-ui/react';

const Header = () => (
  <Box bg="gray.800" color="white" p={4}>
    <Flex justify="space-between" align="center">
      <Heading as="h1" size="lg">Financial Times</Heading>
      <Flex>
        <Link href="#" mx={2}>Home</Link>
        <Link href="#" mx={2}>World</Link>
        <Link href="#" mx={2}>Business</Link>
        <Link href="#" mx={2}>Tech</Link>
        <Link href="#" mx={2}>Markets</Link>
        <Link href="#" mx={2}>Opinion</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Header;