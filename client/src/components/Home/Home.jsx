import React from 'react';
import {
  Heading,
  Stack,
  Text,
  VStack,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';

import logo from '../../assets/images/bg.png';
import introVideo from '../../assets/videos/intro.mp4';

import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width="full" alignItems={['center', 'flex-end']} spacing={"8"}>
            <Heading children="Learn From the Experts " size="2xl" />
            <Text fontFamily={"cursive"}
            fontSize={"2xl"}
              textAlign={['center', 'left']}
              children="Find Valuable Course For you SucessFull Carrier"
            />

            <Link to="/courses">
              <Button size="lg" colorScheme="pink" borderRadius="10">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="chobi"
            boxSize="md"
            src={logo}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding="8" bg="blackAlpha.800">
        <Heading
          textAlign="center"
          children="OUR PARTNERS"
          fontFamily="body"
          color="yellow.400"
        />

        <HStack
          className="Brandsbanner"
          justifyContent="space-evenly"
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          autoPlay
          muted
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
}

export default Home;
