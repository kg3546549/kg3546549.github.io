import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  IconButton,
  VStack,
  HStack,
  Icon,
  Button,
  Image,
} from '@chakra-ui/react';
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { usePortfolioStore } from '../store/portfolioStore';

const Profile: React.FC = () => {
  const { profile, about } = usePortfolioStore((state) => state.data);

  return (
    <Box
      minH="100vh"
      pt={{ base: '90px', md: '100px' }}
      pb={{ base: 10, md: 0 }}
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="6xl" zIndex={1}>
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 10, md: 20 }}
        >
          <VStack align="flex-start" spacing={6} flex={1}>
            <Text fontFamily="body" color="brand.500" fontSize="lg">
              Hi, my name is
            </Text>
            
            <VStack align="flex-start" spacing={2}>
              <Heading
                as="h1"
                fontSize={{ base: '4xl', md: '7xl' }}
                color="text.primary"
                fontWeight="bold"
              >
                {profile.name}.
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '6xl' }}
                color="gray.600"
                fontWeight="bold"
              >
                {profile.title}
              </Heading>
            </VStack>

            <Box maxW="600px">
              <Text fontSize="lg" color="gray.600">
                {about.introduction.trim()}
              </Text>
            </Box>

            <HStack spacing={6} wrap="wrap">
              <HStack spacing={2}>
                <Icon as={FaPhone as any} color="brand.500" />
                <Text fontSize="sm" color="gray.600">{profile.phone}</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaMapMarkerAlt as any} color="brand.500" />
                <Text fontSize="sm" color="gray.600">{profile.location}</Text>
              </HStack>
            </HStack>

            <HStack spacing={6} pt={8}>
              <Button
                as="a"
                href="#projects"
                size="lg"
                variant="outline"
                fontFamily="body"
                px={8}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Check out my work!
              </Button>
              
              <HStack spacing={4}>
                <IconButton
                  as={Link}
                  href={profile.github}
                  target="_blank"
                  aria-label="GitHub"
                  icon={<Icon as={FaGithub as any} />}
                  size="lg"
                  variant="ghost"
                  color="brand.500"
                  _hover={{ bg: 'rgba(100, 255, 218, 0.1)' }}
                />
                <IconButton
                  as={Link}
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  icon={<Icon as={FaEnvelope as any} />}
                  size="lg"
                  variant="ghost"
                  color="brand.500"
                  _hover={{ bg: 'rgba(100, 255, 218, 0.1)' }}
                />
              </HStack>
            </HStack>
          </VStack>

          <Box
            w={{ base: '140px', md: '280px' }}
            h={{ base: '140px', md: '280px' }}
            border="4px solid"
            borderColor="brand.500"
            borderRadius="full"
            boxShadow="2xl"
            overflow="hidden"
            bg="white"
            position="relative"
          >
            <Image
              src={profile.avatar}
              alt={profile.name}
              w="100%"
              h="100%"
              objectFit="cover"
              objectPosition="center 24%"
              transform="scale(1.02)"
              transformOrigin="center"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Profile;
