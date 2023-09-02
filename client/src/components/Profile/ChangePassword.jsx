import React, { useState } from 'react';
import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';

const ChangePassword = () => {

  const [oldpassword,setOldpassword]=useState("");
  const [newpassword,setNewpassword]=useState("");

  return (
    <>
      <Container minH={'90vh'} py={'16'}>
        <form>
          <Heading
            my={'16'}
            children={'Change Password'}
            textAlign={['center', 'left']}
            textTransform={'uppercase'}
          />
          <VStack spacing={'8'}>
            <Input
              required
              value={oldpassword}
              onChange={e => setOldpassword(e.target.value)}
              placeholder="  Old Password"
              type="password"
              focusBorderColor="yellow.500"
            />
            <Input
              required
              value={newpassword}
              onChange={e => setNewpassword(e.target.value)}
              placeholder=" New Password"
              type="password"
              focusBorderColor="yellow.500"
            />

            <Button w={"full"} type='submit' colorScheme='yellow'>Change</Button>
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ChangePassword;
