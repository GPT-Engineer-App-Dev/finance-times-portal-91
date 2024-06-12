import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import TopStories from '../components/TopStories';
import LatestNews from '../components/LatestNews';
import Sidebar from '../components/Sidebar';

const Home = () => (
  <Box>
    <Header />
    <Flex p={4}>
      <Box flex="3">
        <TopStories />
        <LatestNews />
      </Box>
      <Box flex="1" ml={4}>
        <Sidebar />
      </Box>
    </Flex>
  </Box>
);

export default Home;