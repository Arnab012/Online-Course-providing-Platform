import React, { useState } from 'react';

import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
const ForgotPassword = () => {

    const [email,setEmail]=useState("")
  return (
    <>
      <Container py={"16"} height={"80vh"} >
        <form>
          <Heading
          display={"flex"} justifyContent={"center"}
            my="16"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Forgot Password
          </Heading>
          <VStack spacing={"8"}>
          <Input
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                  type="email"
                  focusBorderColor="yellow.500"
                />

                <Button type='submit' w={"full"} colorScheme='yellow'>Send Reset Link</Button>

          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ForgotPassword;
