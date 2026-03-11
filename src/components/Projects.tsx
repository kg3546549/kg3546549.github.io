import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  SimpleGrid,
  Text,
  Link,
  Icon,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaGamepad } from 'react-icons/fa';
import { usePortfolioStore } from '../store/portfolioStore';
import { Project } from '../types/portfolio';

const MarkdownRenderer = ({ content }: { content: string }) => {
  const lines = content.split('\n');

  const renderInline = (text: string, color: string = "gray.600") => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => 
      part.startsWith('**') && part.endsWith('**') 
        ? <Text as="span" key={i} fontWeight="bold" color="brand.500">{part.slice(2, -2)}</Text>
        : <Text as="span" key={i} color={color}>{part}</Text>
    );
  };

  return (
    <VStack align="flex-start" spacing={3} w="100%">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('# ')) {
          return (
            <Heading key={index} size="lg" pt={3} color="text.primary">
              {renderInline(trimmedLine.replace('# ', ''), 'text.primary')}
            </Heading>
          );
        }
        if (trimmedLine.startsWith('## ')) {
          return (
            <Heading key={index} size="md" pt={2} color="text.primary">
              {renderInline(trimmedLine.replace('## ', ''), 'text.primary')}
            </Heading>
          );
        }
        if (trimmedLine.startsWith('### ')) {
          return (
            <Heading key={index} size="sm" pt={1} color="text.primary">
              {renderInline(trimmedLine.replace('### ', ''), 'text.primary')}
            </Heading>
          );
        }
        if (trimmedLine.startsWith('- ')) {
          return (
            <HStack key={index} align="flex-start" spacing={2} pl={2}>
              <Text color="accent.500">▹</Text>
              <Text color="gray.600" lineHeight="tall">
                {renderInline(trimmedLine.replace('- ', ''))}
              </Text>
            </HStack>
          );
        }
        if (trimmedLine.startsWith('![')) {
          const match = trimmedLine.match(/!\[(.*?)\]\((.*?)\)/);
          if (match) {
            const alt = match[1];
            const url = match[2];
            const finalUrl = url.startsWith('http') ? url : process.env.PUBLIC_URL + url;
            return (
              <Box key={index} py={4} w="100%">
                <Image
                  src={finalUrl}
                  alt={alt}
                  borderRadius="md"
                  boxShadow="sm"
                  maxH="400px"
                  objectFit="contain"
                  mx="auto"
                />
                {alt && <Text fontSize="xs" color="gray.500" textAlign="center" mt={2}>{alt}</Text>}
              </Box>
            );
          }
        }
        if (trimmedLine === '') return <Box key={index} h={2} />;
        
        return (
          <Text key={index} color="gray.600" lineHeight="tall">
            {renderInline(trimmedLine)}
          </Text>
        );
      })}
    </VStack>
  );
};

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <VStack
    align="stretch"
    bg="gray.50"
    borderRadius="xl"
    border="1px solid"
    borderColor="gray.200"
    overflow="hidden"
    transition="all 0.3s ease"
    cursor="pointer"
    onClick={onClick}
    _hover={{
      transform: 'translateY(-10px)',
      borderColor: 'brand.500',
      boxShadow: '2xl',
    }}
  >
    <Box position="relative" overflow="hidden" h="200px">
      {project.image ? (
        <Image
          src={project.image.startsWith('http') ? project.image : process.env.PUBLIC_URL + project.image}
          alt={project.title}
          objectFit="cover"
          w="100%"
          h="100%"
          transition="transform 0.5s ease"
          _hover={{ transform: 'scale(1.1)' }}
        />
      ) : (
        <Flex w="100%" h="100%" bg="gray.100" align="center" justify="center">
          <Icon as={project.type === 'project' ? FaFolder : FaGamepad as any} w={12} h={12} color="gray.300" />
        </Flex>
      )}
    </Box>

    <VStack align="stretch" p={6} flex={1} spacing={4}>
      <HStack justify="space-between">
        <Text fontSize="xs" fontFamily="body" color="accent.500" fontWeight="bold">
          {project.type === 'project' ? 'PROJECT' : 'TOY PROJECT'}
        </Text>
        <HStack spacing={4}>
          {project.github && (
            <Link href={project.github} isExternal onClick={(e) => e.stopPropagation()}>
              <Icon as={FaGithub as any} w={5} h={5} color="gray.400" _hover={{ color: 'brand.500' }} />
            </Link>
          )}
          {project.link && (
            <Link href={project.link} isExternal onClick={(e) => e.stopPropagation()}>
              <Icon as={FaExternalLinkAlt as any} w={5} h={5} color="gray.400" _hover={{ color: 'brand.500' }} />
            </Link>
          )}
        </HStack>
      </HStack>

      <VStack align="flex-start" spacing={2}>
        <Heading as="h3" fontSize="xl" color="text.primary">
          {project.title}
        </Heading>
        <Text fontSize="sm" color="gray.600" noOfLines={2}>
          {project.description}
        </Text>
      </VStack>

      <VStack align="flex-start" spacing={1} flex={1}>
        {project.highlights.slice(0, 2).map((highlight, hIndex) => (
          <HStack key={hIndex} spacing={2} align="flex-start">
            <Text color="accent.500" fontSize="xs" mt={1}>▹</Text>
            <Text fontSize="xs" color="gray.600" noOfLines={1}>{highlight}</Text>
          </HStack>
        ))}
      </VStack>

      <HStack spacing={3} wrap="wrap" pt={4} borderTop="1px solid" borderColor="gray.100">
        {project.techStack.map((tech, techIndex) => (
          <Text key={techIndex} fontFamily="body" fontSize="2xs" color="brand.500" fontWeight="bold">
            #{tech}
          </Text>
        ))}
      </HStack>
    </VStack>
  </VStack>
);

const Projects: React.FC = () => {
  const { projects } = usePortfolioStore((state) => state.data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const mainProjects = projects.filter(p => p.type === 'project');
  const toyProjects = projects.filter(p => p.type === 'toy');

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box py={20} id="projects">
      <Container maxW="6xl">
        <VStack spacing={20} align="stretch">
          <VStack spacing={12} align="stretch">
            <Flex align="center" w="100%">
              <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} display="flex" alignItems="baseline" color="text.primary" whiteSpace="nowrap">
                <Text as="span" fontFamily="body" color="accent.500" fontSize="xl" mr={2}>04.</Text>
                Key Work Projects
              </Heading>
              <Box h="1px" bg="gray.200" flex={1} ml={4} />
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {mainProjects.map((p, i) => (
                <ProjectCard key={i} project={p} onClick={() => handleCardClick(p)} />
              ))}
            </SimpleGrid>
          </VStack>

          <VStack spacing={12} align="stretch">
            <Flex align="center" w="100%">
              <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} display="flex" alignItems="baseline" color="text.primary" whiteSpace="nowrap">
                <Text as="span" fontFamily="body" color="accent.500" fontSize="xl" mr={2}>05.</Text>
                Toy Projects
              </Heading>
              <Box h="1px" bg="gray.200" flex={1} ml={4} />
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {toyProjects.map((p, i) => (
                <ProjectCard key={i} project={p} onClick={() => handleCardClick(p)} />
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>

        <Modal isOpen={isOpen} onClose={onClose} size="3xl" scrollBehavior="inside">
          <ModalOverlay backdropFilter="blur(5px)" />
          <ModalContent borderRadius="xl" bg="white">
            <ModalHeader borderBottom="1px solid" borderColor="gray.100" py={6}>
              <VStack align="flex-start" spacing={1}>
                <Text color="accent.500" fontSize="xs" fontFamily="body" fontWeight="bold">
                  {selectedProject?.type?.toUpperCase()}
                </Text>
                <Heading size="lg" color="text.primary">{selectedProject?.title}</Heading>
                <Text fontSize="sm" color="gray.500" fontFamily="body">{selectedProject?.duration}</Text>
              </VStack>
            </ModalHeader>
            <ModalCloseButton mt={4} />
            <ModalBody py={8}>
              <VStack align="stretch" spacing={8}>
                {selectedProject?.image && (
                  <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                    <Image
                      src={selectedProject.image.startsWith('http') ? selectedProject.image : process.env.PUBLIC_URL + selectedProject.image}
                      alt={selectedProject.title}
                      w="100%"
                      maxH="400px"
                      objectFit="cover"
                    />
                  </Box>
                )}
                
                <Box>
                  <MarkdownRenderer content={selectedProject?.content || selectedProject?.description || ''} />
                </Box>

                <Divider />

                <VStack align="flex-start" spacing={4}>
                  <Heading size="sm" color="text.primary">Tech Stack</Heading>
                  <HStack wrap="wrap" spacing={2}>
                    {selectedProject?.techStack.map((tech, i) => (
                      <Text key={i} px={3} py={1} bg="brand.50" color="brand.500" borderRadius="full" fontSize="xs" fontWeight="bold" fontFamily="body">
                        {tech}
                      </Text>
                    ))}
                  </HStack>
                </VStack>

                <HStack spacing={6} pt={4}>
                  {selectedProject?.github && (
                    <Link href={selectedProject.github} isExternal color="brand.500" fontWeight="bold" display="flex" alignItems="center">
                      <Icon as={FaGithub as any} mr={2} /> GitHub Repository
                    </Link>
                  )}
                  {selectedProject?.link && (
                    <Link href={selectedProject.link} isExternal color="brand.500" fontWeight="bold" display="flex" alignItems="center">
                      <Icon as={FaExternalLinkAlt as any} mr={2} /> Live Demo
                    </Link>
                  )}
                </HStack>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default Projects;