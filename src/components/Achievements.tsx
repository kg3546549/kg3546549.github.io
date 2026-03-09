import React from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Link,
  Icon,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { usePortfolioStore } from '../store/portfolioStore';

const Achievements: React.FC = () => {
  const { achievements } = usePortfolioStore((state) => state.data);

  return (
    <Box py={20} id="awards">
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
              <Text as="span" fontFamily="mono" color="accent.500" fontSize="xl" mr={2}>
                04.
              </Text>
              Awards & Achievements
            </Heading>
            <Box h="1px" bg="gray.200" flex={1} ml={4} />
          </Flex>

          <VStack spacing={8} align="stretch">
            {achievements.map((achievement, index) => (
              <Box
                key={index}
                bg="gray.50"
                p={8}
                borderRadius="md"
                border="1px solid"
                borderColor="gray.200"
                position="relative"
                _hover={{
                  borderColor: 'brand.500',
                  transition: 'all 0.3s ease',
                  boxShadow: 'md',
                }}
              >
                <HStack justify="space-between" align="flex-start" mb={4}>
                  <VStack align="flex-start" spacing={1}>
                    <Heading as="h3" fontSize="xl" color="text.primary">
                      {achievement.title}
                    </Heading>
                    <Text fontSize="sm" fontFamily="mono" color="brand.500">
                      {achievement.organization}
                    </Text>
                  </VStack>
                  <Text fontSize="sm" fontFamily="mono" color="gray.500">
                    {achievement.date}
                  </Text>
                </HStack>
                <Text color="gray.600" mb={4}>
                  {achievement.description}
                </Text>
                {achievement.link && (
                  <Link
                    href={achievement.link}
                    isExternal
                    color="brand.500"
                    fontFamily="mono"
                    fontSize="sm"
                    display="flex"
                    alignItems="center"
                  >
                    View Details <Icon as={FaExternalLinkAlt as any} ml={2} />
                  </Link>
                )}
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Achievements;