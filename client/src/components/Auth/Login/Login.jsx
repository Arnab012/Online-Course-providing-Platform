import {
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
          <Heading children={'Welcome to Learn_Here'} />
          <Box marginY={'4'}>
            <form style={{ width: '100%' }}>
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

              <Box display={'flex'} justifyContent={'flex-end'}>
                <Link to="/forgotpassword">
                  <Button variant={'link'} fontSize={'sm'}>
                    Forget Password?
                  </Button>
                </Link>
              </Box>

              <Box display={'flex'} justifyContent={'center'}>
                <Button my={'4'} colorScheme={'yellow'} type="submit">
                  Login
                </Button>
              </Box>

              <Box my={'4'} display={'flex'} justifyContent={'flex-end'}>
                New User?
                <Link to="/register">
                  <Button colorScheme="yellow" variant={'link'}>
                    Sign Up{' '}
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

export default Login;
