import React from 'react'
import {RiErrorWarningFill} from "react-icons/ri"
import{Link} from "react-router-dom"

import { Container, Heading, VStack, Button } from '@chakra-ui/react';

const PaymentFail = () => {
  return (
    <>
    <Container h={'90vh'} >

<VStack justifyContent={"center"} h={"full"} spacing={"4"}>
<RiErrorWarningFill size={"5rem"}/>

<Heading my={'8'} textAlign={'center'} children={'Payment Fail'} />


<Link to="/subscribe">
  <Button variant={"ghost"}>Try Agin</Button>
</Link>

</VStack>
</Container>
    
    </>
  )
}

export default PaymentFail