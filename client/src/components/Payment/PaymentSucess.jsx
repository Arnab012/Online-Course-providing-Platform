import React from 'react';

import {RiCheckboxCircleFill} from "react-icons/ri"
import{Link} from "react-router-dom"

import { Container, Heading, VStack, Box, Text, Button } from '@chakra-ui/react';
const PaymentSucess = () => {
  return (
    <>
      <Container h={'90vh'} p={'16'}>
        <Heading my={'8'} textAlign={'center'} children={'You Have Pro Pack'} />

        <VStack
          alignItems={'center'}
          borderRadius={'lg'}
          boxShadow={'lg'}
          pb={'16'}
        >
          <Box
            width={'full'}
            bg={'yellow.400'}
            p={'4'}
            css={{ borderRadius: '8px 8px 0 0 ' }}
          >
            <Text display={"flex"} justifyContent={"center"} color={'black'}>Payment Sucessfull</Text>
          </Box>
          <Box p={'4'}>
            <VStack px={'8'} textAlign={'center'} spacing={'8'}>
              <Text
                children={
                  'Congralution You are a pro member .You Have a access to premuim content'
                }
              />
              <Heading size={"4xl"}>
                <RiCheckboxCircleFill/>
              </Heading>
              
            </VStack>
          </Box>

          <Link to="/profile">
            <Button variant={"ghost"}>Go to Profile</Button>
          </Link>
          <Heading size={"sm"}>
            Reference:-8218vbgvfcbhbb85
          </Heading>
        </VStack>
      </Container>
    </>
  );
};

export default PaymentSucess;
