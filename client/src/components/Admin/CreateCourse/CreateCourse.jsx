import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import SideBar from '../DashBoard/SideBar';
import { fileUplodecss } from '../../Auth/Login/Register';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBY] = useState('');
  const [catagory, setCatagory] = useState('');
  const [image, setImage] = useState('');
  const [imageprev, setImageprev] = useState('');

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
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageprev(reader.result);
      setImage(file);
    };
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
        <Container py={'16'}>
          <form>
            <Heading
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              children="Create Course"
              textTransform={'uppercase'}
              my={'16'}
              textAlign={['center', 'left']}
            />
            <VStack margin={'auto'} spacing={'8'}>
              <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
                type="text"
                focusBorderColor="purple.500"
              />
              <Input
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description"
                type="text"
                focusBorderColor="purple.500"
              />
              <Input
                value={createdBy}
                onChange={e => setCreatedBY(e.target.value)}
                placeholder="Creator Name"
                type="text"
                focusBorderColor="purple.500"
              />

              <Select
                focusBorderColor="purple.500"
                value={catagory}
                onChange={e => setCatagory(e.target.value)}
              >
                <option value={''}>Catagory</option>

                {categories.map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </Select>
              <Input
                accept="image/*"
                required
                type={'file'}
                focusBorderColor="purple.300"
                css={{
                  '&::file-selector-button': {
                    ...fileUplodecss,
                    color: 'purple',
                  },
                }}
                onChange={changeImageHandler}
              />
              {imageprev && (
                <Image src={imageprev} boxSize="64" objectFit={'contain'} />
              )}

              <Button w={'full'} type="submit" colorScheme="purple">
                Create
              </Button>
            </VStack>
          </form>
        </Container>

        <SideBar />
      </Grid>
    </>
  );
};

export default CreateCourse;
