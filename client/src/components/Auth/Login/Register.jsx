import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';

export const fileUplodecss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUplodecss,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [name, setName] = useState('');
  const [imagepreview, setImagepreview] = useState('');
  const [image, setImage] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagepreview(reader.result);
      setImage(file);
    };
  };

  return (
    <>
      <Container h={'105vh'} padding={'8'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
          <Heading children={'Registration'} />

          <Box my="4" display={'flex'} justifyContent={'center'}>
            <Avatar src={imagepreview} size={'2xl'} />
          </Box>

          <Box marginY={'4'}>
            <form style={{ width: '100%' }} marginY="8">
              <Box>
                <FormLabel htmlFor="name" children={'Your Name'} />
                <Input
                  required
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="abc"
                  type="text"
                  focusBorderColor="yellow.500"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="email" children={'Email Address'} />
                <Input
                  required
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                  type="email"
                  focusBorderColor="yellow.500"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="password" children={'Password'} />
                <Input
                  required
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  type="password"
                  focusBorderColor="yellow.500"
                />
              </Box>
              <Box>
                <FormLabel
                  htmlFor="chooseAvatar"
                  children={'Choose Your Avatar'}
                />
                <Input
                  accept="image/*"
                  required
                  id="chooseAvatar"
                  type={'file'}
                  focusBorderColor="yellow.500"
                  css={fileUploadStyle}
                  onChange={changeImageHandler}
                />
              </Box>

              <Box display={'flex'} justifyContent={'center'}>
                <Button my={'4'} colorScheme={'yellow'} type="submit">
                  Sign Up
                </Button>
              </Box>

              <Box my={'4'} display={'flex'} justifyContent={'flex-end'}>
                Alrready Have an Accout ?
                <Link to="/login">
                  <Button colorScheme="yellow" variant={'link'}>
                    Login
                  </Button>{' '}
                  Here
                </Link>
              </Box>
            </form>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Register;
