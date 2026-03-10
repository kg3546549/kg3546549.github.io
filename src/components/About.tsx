import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { usePortfolioStore } from '../store/portfolioStore';

const About: React.FC = () => {
  const { about } = usePortfolioStore((state) => state.data);

  return (
    <Box py={20} id="about">
      <Container maxW="6xl">
        <VStack spacing={8} align="flex-start">
          <Flex align="center" w="100%">
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl' }}
              display="flex"
              alignItems="baseline"
              color="text.primary"
              whiteSpace="nowrap"
            >
              <Text as="span" fontFamily="body" color="accent.500" fontSize="xl" mr={2}>
                01.
              </Text>
              About Me
            </Heading>
            <Box h="1px" bg="gray.200" flex={1} ml={4} />
          </Flex>

          <VStack align="flex-start" spacing={4}>
            <Text fontSize="lg" color="gray.600" whiteSpace="pre-wrap">
              {about.introduction}
            </Text>
            
            <Text fontSize="md" color="gray.600">
              Here are a few highlights of my background:
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} w="100%">
              {about.highlights.map((highlight, index) => (
                <HStack key={index} align="flex-start" spacing={2}>
                  <Text color="accent.500" fontFamily="body" fontSize="xs" mt={1}>▹</Text>
                  <Text fontSize="sm" fontFamily="body" color="gray.700">{highlight}</Text>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;