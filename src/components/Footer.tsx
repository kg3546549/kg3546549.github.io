import React from 'react';
import {
  Box,
  Container,
  Text,
  VStack,
  Link,
  Icon,
  HStack,
  Heading,
} from '@chakra-ui/react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { usePortfolioStore } from '../store/portfolioStore';

const Footer: React.FC = () => {
  const { profile, thankYou } = usePortfolioStore((state) => state.data);

  return (
    <Box py={20} borderTop="1px solid" borderColor="gray.100">
      <Container maxW="6xl">
        <VStack spacing={10}>
          <VStack spacing={4}>
            <Heading size="md" color="text.primary" fontFamily="mono">
              // 읽어주셔서 감사합니다
            </Heading>
            <Text color="gray.600" textAlign="center" maxW="lg">
              {thankYou.message}
            </Text>
          </VStack>

          <HStack spacing={6}>
            <Link
              href={profile.github}
              isExternal
              color="gray.400"
              _hover={{ color: 'brand.500' }}
            >
              <Icon as={FaGithub as any} w={6} h={6} />
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              color="gray.400"
              _hover={{ color: 'brand.500' }}
            >
              <Icon as={FaEnvelope as any} w={6} h={6} />
            </Link>
          </HStack>
          
          <VStack spacing={1}>
            <Text
              fontFamily="mono"
              fontSize="xs"
              color="gray.400"
            >
              Built by {profile.name}
            </Text>
            <Text
              fontFamily="mono"
              fontSize="xs"
              color="gray.400"
            >
              © 2024 - Portfolio Template
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;