import React from 'react';
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import SideBar from '../DashBoard/SideBar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const users = [
  {
    _id: 'ndajasd5acad45casc',
    name: 'Arnab ',
    role: 'admin',
    subscription: {
      status: 'active',
    },
    email: 'hansranb@gmail.com',
  },
];

const updateHandeler = userId => {
  console.log(userId);
};

const deleButtonHandler = userId => {
  console.log(userId);
};

const Users = () => {
  return (
    <>
      <Grid
        minH={'100vh'}
        css={{
          cursor: `url(${cursor}),default`,
        }}
        templateColumns={['1fr', '5fr 1fr']}
      >
        <Box p={['0', '16']} overflowX={'auto'}>
          <Heading
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            children="Total Users"
            textTransform={'uppercase'}
            my={'16'}
            textAlign={['center', 'left']}
          />

          <TableContainer w={['100vw', 'full']}>
            <Table variant={'simple'} size={'lg'}>
              <TableCaption>All Avaliable User in the Database</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map(item => (
                  <Row
                    updateHandeler={updateHandeler}
                    deleButtonHandler={deleButtonHandler}
                    key={item._id}
                    item={item}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <SideBar />
      </Grid>
    </>
  );
};

export default Users;

function Row({ item, updateHandeler, deleButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => updateHandeler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            Change Role
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
