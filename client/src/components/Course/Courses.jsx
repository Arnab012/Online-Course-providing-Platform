import React, { useState } from 'react';
import {
  Button,
  Container,
  HStack,
  VStack,
  Heading,
  Input,
  Stack,
  Text,
  Image,
  
} from '@chakra-ui/react';
import {Link} from "react-router-dom"

const addtoplaylistHandler = () => {
  console.log('clg');
};

export const Course = ({
  views,
  title,
  imageSrc,
  id,
  addtoplaylistHandler,
  creater,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={60} objectFit="contain" />
      <Heading
        maxW="200px"
        size="sm"
        textAlign={['center', 'left']}
        fontFamily="sans-serif"
        noOfLines={3}
      >
        {title}
      </Heading>

      <Text noOfLines={2}>{description}</Text>

      <HStack>
        <Text fontWeight="bold" textTransform="uppercase">
          Creater
        </Text>
        <Text fontFamily="body" textTransform="uppercase">
          {creater}
        </Text>
      </HStack>

      <Heading textAlign="center" textTransform="uppercase" size="xs">
        Leactures-{lectureCount}
      </Heading>
      <Heading textTransform="uppercase" size="xs">
        Views-{views}
      </Heading>
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme="purple">Watch Now</Button>
        </Link>
        <Button
          onClick={() => addtoplaylistHandler(id)}
          variant="ghost"
          colorScheme="purple"
        >
          Add To PlayList
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [key, setKey] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'Web Development',
    'DSA',
    'AI',
    'ML',
    'Data Science',
    'DAA',
    'Cloud Computing',
    'App Development',
    'Game Development',
  ];

  return (
    <>
      <Container maxH="95vh" maxW="container.lg" paddingY={8}>
        <Heading  display={"flex"}justifyContent={"center"}  m={8}>All Courses</Heading>

        <Input
          placeholder="Search for courses..."
          type="text"
          focusBorderColor="yellow.500"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />

        <HStack
          overflowX="auto"
          paddingY={8}
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {categories.map((item, index) => (
            <Button key={index} minW={60} onClick={() => setCategory(item)}>
              <Text flexWrap="wrap">{item}</Text>
            </Button>
          ))}
        </HStack>

        <Stack
          flexWrap="wrap"
          direction={['column', 'row']}
          justifyContent={['flex-start', 'space-evenly']}
          alignItems={['center', 'flex-start']}
        >
          <Course
            title="sample1"
            id="sample" // Provide a valid ID here
            description="sample1"
            views={250}
            imageSrc={"https://cdn.pixabay.com/photo/2023/07/04/10/20/river-8105970_1280.jpg"}
            creater="sample boy"
            lectureCount={2}
            addtoplaylistHandler={addtoplaylistHandler}
          />
        </Stack>
      </Container>
    </>
  );
};

export default Courses;
