import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  HStack,
  Circle,
} from '@chakra-ui/react';
import { usePortfolioStore } from '../store/portfolioStore';

const Career: React.FC = () => {
  const { career } = usePortfolioStore((state) => state.data);

  return (
    <Box py={20} id="career">
      <Container maxW="6xl">
        <VStack spacing={12} align="stretch">
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
                02.
              </Text>
              Career
            </Heading>
            <Box h="1px" bg="gray.200" flex={1} ml={4} />
          </Flex>

          <VStack spacing={0} align="stretch">
            {career.map((item, index) => (
              <Flex key={index} position="relative">
                {/* Timeline Line */}
                <Box
                  position="absolute"
                  left="7px"
                  top="10px"
                  bottom={index === career.length - 1 ? 'auto' : '-10px'}
                  w="2px"
                  bg="gray.100"
                  zIndex={0}
                />
                
                {/* Timeline Dot */}
                <Circle
                  size="16px"
                  bg="white"
                  border="2px solid"
                  borderColor="brand.500"
                  zIndex={1}
                  mt="8px"
                />

                <VStack align="flex-start" ml={8} mb={12} spacing={2} w="100%">
                  <HStack w="100%" justify="space-between" align="baseline" wrap="wrap">
                    <Heading size="md" color="text.primary">
                      {item.company}
                    </Heading>
                    <Text fontSize="sm" fontFamily="body" color="gray.500">
                      {item.duration}
                    </Text>
                  </HStack>
                  
                  <Text fontWeight="bold" color="brand.500" fontSize="sm" fontFamily="body">
                    {item.position}
                  </Text>
                  
                  <Text color="gray.600" pt={2}>
                    {item.description}
                  </Text>

                  {item.projects && (
                    <VStack align="flex-start" spacing={1} pt={2} w="100%">
                      {item.projects.map((proj, pIdx) => (
                        <HStack key={pIdx} align="flex-start" spacing={2}>
                          <Text color="accent.500" fontSize="xs" mt={1}>▹</Text>
                          <Text fontSize="sm" color="gray.600">{proj}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  )}
                </VStack>
              </Flex>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Career;