import React from 'react';
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { usePortfolioStore } from '../store/portfolioStore';

const Languages: React.FC = () => {
  const { languages } = usePortfolioStore((state) => state.data);

  if (!languages || languages.length === 0) return null;

  return (
    <Box py={20} id="languages">
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
              <Text as="span" fontFamily="body" color="accent.500" fontSize="xl" mr={2}>07.</Text>
              Language Certifications
            </Heading>
            <Box h="1px" bg="gray.200" flex={1} ml={4} />
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {languages.map((item, index) => (
              <Box
                key={index}
                bg="white"
                p={6}
                borderRadius="md"
                border="1px solid"
                borderColor="gray.100"
                boxShadow="sm"
                _hover={{
                  borderColor: 'brand.500',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease',
                  boxShadow: 'md',
                }}
              >
                <VStack align="flex-start" spacing={3}>
                  <Badge colorScheme="brand" variant="subtle" fontSize="2xs" px={2} py={0.5}>
                    {item.language}
                  </Badge>
                  <VStack align="flex-start" spacing={1}>
                    <Heading as="h3" fontSize="lg" color="text.primary">
                      {item.exam}
                    </Heading>
                    <Text fontSize="sm" fontWeight="bold" color="brand.600">
                      {item.level}
                    </Text>
                  </VStack>
                  {item.description && (
                    <Text color="gray.600" fontSize="sm" lineHeight="tall">
                      {item.description}
                    </Text>
                  )}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Languages;
