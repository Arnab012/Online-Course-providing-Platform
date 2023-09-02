import React, { useState } from 'react'
import{Container,VStack,Heading,Input,Button} from "@chakra-ui/react"

const UpdateProfile = () => {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('')
  return (
    <>
     <Container minH={'90vh'} py={'16'}>
        <form>
          <Heading
            my={'16'}
            children={'Update Profile'}
            textAlign={['center', 'left']}
            textTransform={'uppercase'}
          />
          <VStack spacing={'8'}>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="  Name"
              type="text"
              focusBorderColor="yellow.500"
            />
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              focusBorderColor="yellow.500"
            />

            <Button w={"full"} type='submit' colorScheme='yellow'>Update</Button>
          </VStack>
        </form>
      </Container>
      
    </>
  )
}

export default UpdateProfile
