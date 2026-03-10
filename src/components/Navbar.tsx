import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  useDisclosure,
  Stack,
  IconButton,
  Container,
  Icon,
} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavLink = ({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) => (
  <Link
    px={4}
    py={2}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color: 'brand.500',
    }}
    href={href}
    color="slate.700"
    fontWeight="medium"
    fontFamily="body"
    fontSize="sm"
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      if (onClick) onClick();
    }}
  >
    <Text as="span" color="brand.500" mr={1}>//</Text>
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Career', href: '#career' },
    { name: 'Tech', href: '#tech' },
    { name: 'Awards', href: '#awards' },
    { name: 'Projects', href: '#projects' },
    { name: 'Activities', href: '#activities' },
  ];

  return (
    <Box
      px={4}
      position="fixed"
      top={0}
      w="100%"
      zIndex={100}
      transition="all 0.3s ease"
      bg={scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      boxShadow={scrolled ? 'sm' : 'none'}
      height={scrolled ? '70px' : '100px'}
    >
      <Container maxW="6xl" h="100%">
        <Flex h="100%" alignItems={'center'} justifyContent={'space-between'}>
          <HStack
            spacing={2}
            cursor="pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Text
              fontFamily="body"
              color="brand.500"
              fontWeight="bold"
              fontSize="xl"
            >
              Kim Geon
            </Text>
          </HStack>

          <HStack spacing={8} alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
            <HStack as={'nav'} spacing={4}>
              {navLinks.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <IconButton
            size={'md'}
            icon={<Icon as={isOpen ? FaTimes : FaBars as any} />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            color="brand.500"
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} bg="white" p={4} borderRadius="md" mt={2} boxShadow="lg">
            <Stack as={'nav'} spacing={4}>
              {navLinks.map((link) => (
                <NavLink key={link.name} href={link.href} onClick={onClose}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};

export default Navbar;
