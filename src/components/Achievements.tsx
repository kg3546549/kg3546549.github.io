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
  SimpleGrid,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaYoutube, FaGithub, FaTrophy } from 'react-icons/fa';
import { usePortfolioStore } from '../store/portfolioStore';

const MedalIcon = ({ title }: { title: string }) => {
  if (title.includes('금메달')) return <Icon as={FaTrophy as any} color="yellow.400" w={6} h={6} />;
  if (title.includes('은메달')) return <Icon as={FaTrophy as any} color="gray.400" w={6} h={6} />;
  if (title.includes('동메달')) return <Icon as={FaTrophy as any} color="orange.400" w={6} h={6} />;
  return null;
};

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
              <Text as="span" fontFamily="body" color="accent.500" fontSize="xl" mr={2}>
                04.
              </Text>
              Awards & Achievements
            </Heading>
            <Box h="1px" bg="gray.200" flex={1} ml={4} />
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <VStack align="flex-start" spacing={1} mb={4} flexGrow={1}>
                  <HStack justify="space-between" align="flex-start" w="100%" mb={2}>
                    <MedalIcon title={achievement.title} />
                    <Text fontSize="sm" fontFamily="body" color="gray.500" whiteSpace="nowrap">
                      {achievement.date}
                    </Text>
                  </HStack>
                  <Heading as="h3" fontSize="xl" color="text.primary" whiteSpace="pre-wrap">
                    {achievement.title}
                  </Heading>
                  <Text fontSize="sm" fontFamily="body" color="brand.500">
                    {achievement.organization}
                  </Text>
                  <Text color="gray.600" mt={2} whiteSpace="pre-wrap">
                    {achievement.description}
                  </Text>
                </VStack>
                <HStack spacing={4} mt={4}>
                  {achievement.link && (
                    <Link
                      href={achievement.link}
                      isExternal
                      color="brand.500"
                      fontFamily="body"
                      fontSize="sm"
                      display="flex"
                      alignItems="center"
                    >
                      View Details <Icon as={FaExternalLinkAlt as any} ml={2} />
                    </Link>
                  )}
                  {achievement.youtubeLink && (
                    <Link
                      href={achievement.youtubeLink}
                      isExternal
                      color="brand.500"
                      fontFamily="body"
                      fontSize="sm"
                      display="flex"
                      alignItems="center"
                    >
                      YouTube <Icon as={FaYoutube as any} ml={2} />
                    </Link>
                  )}
                  {achievement.githubLink && (
                    <Link
                      href={achievement.githubLink}
                      isExternal
                      color="brand.500"
                      fontFamily="body"
                      fontSize="sm"
                      display="flex"
                      alignItems="center"
                    >
                      GitHub <Icon as={FaGithub as any} ml={2} />
                    </Link>
                  )}
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Achievements;