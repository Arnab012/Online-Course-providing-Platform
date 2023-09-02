import React from 'react';

import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';

const Subscribe = () => {
  return (
    <>
      <Container h="90vh" p={'16'}>
        <Heading children="Welcome" my={'8'} textAlign={'center'} />
        <VStack
          boxShadow={'lg'}
          alignItems={'stretch'}
          borderRadius={'lg'}
          spacing={'0'}
        >
          <Box bg={'yellow.400'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
            <Text
              color={'black'}
              display={'flex'}
              justifyContent={'center'}
              children={`Pro Pack--₹299.00`}
            />
          </Box>
          <Box p={'4'}>
            <VStack px={'8'} spacing={'8'} textAlign={'center'} mt={'4'}>
              <Text
                color={'green'}
                children={`Join Pro Pack  and Get Access  to all Content.`}
              />
              <Heading size={'md'} children={'₹299 Only'} />
            </VStack>

            <Button my={'8'} w={'full'} colorScheme="yellow">
              Buy Now
            </Button>
          </Box>
          <Box
            bg={'blackAlpha.600'}
            p={'4'}
            css={{ borderRadius: '0 0 8px 8px' }}
          >
            <Heading
              display={'flex'}
              justifyContent={'center'}
              color={'green'}
              textTransform={'uppercase'}
              size={'sm'}
              children={'100% Refund at Cancellation'}
            />
            <Text
              fontSize={'xs'}
              display={'flex'}
              justifyContent={'center'}
              color={'green'}
              children={'*Terms & COndition Applied'}
            />
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Subscribe;
