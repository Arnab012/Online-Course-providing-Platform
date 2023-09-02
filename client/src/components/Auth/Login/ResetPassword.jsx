import React, { useState } from 'react';

import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import {useParams}from "react-router-dom"
const ResetPassword = () => {

    const [password,setPassword]=useState("")

    const params=useParams();
  return (
    <>
      <Container py={"16"} height={"80vh"}>
        <form>
          <Heading
          display={"flex"} justifyContent={"center"}
            my="16"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Reset Password
          </Heading>
          <VStack spacing={"8"}>
          <Input
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  type="password"
                  focusBorderColor="yellow.500"
                />

                <Button type='submit' w={"full"} colorScheme='yellow'>Reset  Password</Button>

          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ResetPassword;
