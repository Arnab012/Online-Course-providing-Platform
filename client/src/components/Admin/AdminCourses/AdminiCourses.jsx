import React from 'react';
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import SideBar from '../DashBoard/SideBar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModel from './CourseModel';

const Courses = [
  {
    _id: 'ndajasd5acad45c',
    title: 'React development ',
    catagory: 'web Development',
    poster: {
      url: 'https://avatars.githubusercontent.com/u/129972847?v=4',
    },
    views: 123,
    numOfVideos: 12,
    createdBy: 'Arnab ',
  },
];

const AdminiCourses = () => {

  const { isOpen, onClose, onOpen } = useDisclosure();

  const coursesDetailsHandeler = userId => {
    onOpen();
  };

  const deleButtonHandler = userId => {
    console.log(userId);
  };

  const deleLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  };

  const addlectureHandler = (e, title, courseId, description, video) => {
    e.preventDefault();
  };
  return (
    <>
      <Grid
        minH={'100vh'}
        css={{
          cursor: `url(${cursor}),default`,
        }}
        templateColumns={['1fr', '5fr 1fr']}
      >
        <Box p={['0', '8']} overflowX={'auto'}>
          <Heading
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            children="All Lectures Details"
            textTransform={'uppercase'}
            my={'8'}
            textAlign={['center', 'left']}
          />

          <TableContainer w={['100vw', 'full']}>
            <Table variant={'simple'} size={'lg'}>
              <TableCaption>All Available Courses in the Database</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Courses.map(item => (
                  <Row
                    coursesDetailsHandeler={coursesDetailsHandeler}
                    deleButtonHandler={deleButtonHandler}
                    key={item._id}
                    item={item}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <CourseModel
            isOpen={isOpen}
            onClose={onClose}
            deleteButtonHandeler={deleLectureButtonHandler}
            addlectureHandler={addlectureHandler}
            id={'jhbis34bib444courseId'}
            coursetitle={'React Course'}
          />
        </Box>
        <SideBar />
      </Grid>
    </>
  );
};

function Row({ item, coursesDetailsHandeler, deleButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>

      <Td>
        <Image src={item.poster.url} />
      </Td>

      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.catagory}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => coursesDetailsHandeler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            View Lectures
          </Button>
          <Button
            onClick={() => deleButtonHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminiCourses;
