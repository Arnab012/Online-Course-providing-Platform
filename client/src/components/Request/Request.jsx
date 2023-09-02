import React, { useState } from 'react';
import {
  Heading,
  Container,
  VStack,
  Box,
  Input,
  Button,
  FormLabel,
  Textarea,
  
} from '@chakra-ui/react';
import {Link} from "react-router-dom"

const Request = () => {
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [name, setName] = useState('');

  return (
    <>
    <Container h={'92vh'}>
      <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading children={'Request New Course'} />
        <form style={{ width: '100%' }}>
        <Box>
            <FormLabel htmlFor="name" children={'Name'} />
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
            <FormLabel htmlFor="course" children={'Course'} />
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain The Course"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box display={'flex'} justifyContent={'center'}>
            <Button my={'4'} colorScheme={'yellow'} type="submit">
              Send Mail
            </Button>
          </Box>

          <Box my={'4'} display={'flex'} justifyContent={'flex-end'}>
              See Avaliable Courses?
              <Link to="/courses">
                <Button colorScheme="yellow" variant={'link'}>
                  Click {' '}
                </Button>{' '}
                Here
              </Link>
            </Box>
        </form>
      </VStack>
    </Container>
  </>
  )
}

export default Request