import React from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Flex,
  HStack,
  SimpleGrid,
  Badge,
} from '@chakra-ui/react';
import { usePortfolioStore } from '../store/portfolioStore';

const ExtraActivities: React.FC = () => {
  const { activities } = usePortfolioStore((state) => state.data);

  if (!activities || activities.length === 0) return null;

  return (
    <Box py={20} id="activities">
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
              <Text as="span" fontFamily="body" color="accent.500" fontSize="xl" mr={2}>06.</Text>
              Extra Activities
            </Heading>
            <Box h="1px" bg="gray.200" flex={1} ml={4} />
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {activities.map((activity, index) => (
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
                  <HStack justify="space-between" w="100%">
                    <Badge colorScheme="brand" variant="subtle" fontSize="2xs" px={2} py={0.5}>
                      {activity.type}
                    </Badge>
                    <Text fontSize="xs" color="gray.500" fontFamily="body">
                      {activity.duration}
                    </Text>
                  </HStack>
                  
                  <VStack align="flex-start" spacing={1}>
                    <Heading as="h3" fontSize="lg" color="text.primary">
                      {activity.title}
                    </Heading>
                    <Text fontSize="sm" fontWeight="bold" color="brand.600">
                      {activity.organization}
                    </Text>
                  </VStack>

                  <Text color="gray.600" fontSize="sm" lineHeight="tall">
                    {activity.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default ExtraActivities;
