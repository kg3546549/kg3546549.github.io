import React from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  SimpleGrid,
  Text,
  Badge,
  Flex,
  Image,
} from '@chakra-ui/react';
import { usePortfolioStore } from '../store/portfolioStore';

const levelColors = {
  'Beginner': 'gray',
  'Intermediate': 'blue',
  'Advanced': 'cyan',
  'Expert': 'brand',
};

const TechStack: React.FC = () => {
  const { techStack } = usePortfolioStore((state) => state.data);

  return (
    <Box py={20} id="tech">
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
                03.
              </Text>
              Technical Skills
            </Heading>
            <Box h="1px" bg="gray.200" flex={1} ml={4} />
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
            {techStack.map((category, index) => (
              <VStack
                key={index}
                align="stretch"
                bg="gray.50"
                p={4}
                borderRadius="md"
                border="1px solid"
                borderColor="gray.200"
                _hover={{
                  borderColor: 'brand.500',
                  transform: 'translateY(-5px)',
                  transition: 'all 0.3s ease',
                  boxShadow: 'md',
                }}
              >
                <Heading
                  as="h3"
                  fontSize="md"
                  fontFamily="body"
                  color="text.primary"
                  mb={3}
                >
                  {category.category}
                </Heading>

                <VStack spacing={2} align="stretch">
                  {techStack[index].technologies.map((tech, techIndex) => (
                    <VStack
                      key={techIndex}
                      align="stretch"
                      spacing={1}
                      p={2}
                      bg="white"
                      borderRadius="sm"
                      border="1px solid"
                      borderColor="gray.100"
                    >
                      <HStack justify="space-between">
                        <Text
                          fontSize="xs"
                          fontWeight="bold"
                          color="gray.700"
                        >
                          {tech.name}
                        </Text>
                        <Badge
                          variant="subtle"
                          colorScheme="brand"
                          fontSize="3xs"
                          px={1}
                        >
                          {tech.level}
                        </Badge>
                      </HStack>

                      {tech.badges && tech.badges.length > 0 && (
                        <HStack spacing={1} wrap="wrap">
                          {tech.badges.map((badgeUrl, bIdx) => (
                            <Image
                              key={bIdx}
                              src={badgeUrl}
                              alt={`${tech.name}-badge`}
                              borderRadius="sm"
                              height="14px"
                            />
                          ))}
                        </HStack>
                      )}
                    </VStack>
                  ))}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default TechStack;