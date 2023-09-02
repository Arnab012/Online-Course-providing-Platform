import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  useDisclosure,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUplodecss } from '../Auth/Login/Register';
const Profile = () => {
  const user = {
    name: 'Arnab ',
    email: 'hansdaaranb@gmail.com',
    CreatedAt: String(new Date().toISOString()),
    role: 'user',
    Subscription: {
      status: 'active',
    },

    playlist: [
      {
        course: 'bdBJDS',
        Poster:
          'https://cdn.pixabay.com/photo/2023/06/10/21/23/flower-8054861_1280.jpg',
      },
    ],
  };

  const removefromplaylisthandleer = id => {
    console.log(id);
  };

 
  
  const chageimageonsubmit=(e,image)=>{
    e.preventDefault()
    console.log(image)
  }
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
        <Heading  display={"flex"} justifyContent={["center","flex-start"]} children={'Profile'} m={'8'} textTransform={'uppercase'} />

        <Stack
          justifyContent={'flex-start'}
          direction={['column', 'row']}
          alignItems={'center'}
          spacing={['8', '16']}
          p={'8'}
        >
          <VStack>
            <Avatar boxSize={'48'} />
            <Button onClick={onOpen} colorScheme="yellow" variant={'ghost'}>
              Change Photo
            </Button>
          </VStack>
          <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
            <HStack>
              <Text children={'Name-'} fontWeight="bold" />
              <Text children={user.name} />
            </HStack>
            <HStack>
              <Text children={'E-Mail-'} fontWeight="bold" />
              <Text children={user.email} />
            </HStack>
            <HStack>
              <Text children={'CreatedAt-'} fontWeight="bold" />
              <Text children={user.CreatedAt.split('T')[0]} />
            </HStack>

            {user.role !== 'admin' && (
              <HStack>
                <Text fontWeight={'bold'}>Subscription</Text>
                {user.Subscription.status === 'active' ? (
                  <Button color={'yellow.500'} variant={'unstyled'}>
                    Cancle SubScription
                  </Button>
                ) : (
                  <Link to="/subscribe">
                    <Button colorScheme="yellow">SUbscribe</Button>
                  </Link>
                )}
              </HStack>
            )}

            <Stack direction={['column', 'row']} alignItems={'center'}>
              <Link to="/updateprofile">
                <Button>Update Profile</Button>
              </Link>
              <Link to="/changepassword">
                <Button>Change Password</Button>
              </Link>
            </Stack>
          </VStack>
        </Stack>

        <Heading children="Playlist" size={'md'} my={'8'} />

        {user.playlist.length > 0 && (
          <Stack
            direction={['column', 'row']}
            alignItems={'center'}
            flexWrap={'wrap'}
            p={'4'}
          >
            {user.playlist.map(element => (
              <VStack w={'48'} m={'2'} key={element.course}>
                <Image
                  boxSize="full"
                  objectFit="contain"
                  src={element.Poster}
                />

                <HStack>
                  <Link to={`/course/${element.course}`}>
                    <Button variant={'ghost'} colorScheme="yellow">
                      Watch Now
                    </Button>
                  </Link>

                  <Button
                    onClick={() => removefromplaylisthandleer(element.course)}
                  >
                    <RiDeleteBin7Fill />
                  </Button>
                </HStack>
              </VStack>
            ))}
          </Stack>
        )}

        <ChangePhotoBox isOpen={isOpen} onClose={onClose} chageimageonsubmit={chageimageonsubmit} />
      </Container>
    </>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, chageimageonsubmit }) {
  const [image, setImage] = useState('');
  const [imageprev, setImagepreview] = useState('');

  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagepreview(reader.result);
      setImage(file);
    };
  };

  const closeHandler=()=>{
    onClose();
    setImage("");
    setImagepreview("")

  }

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />

      <ModalContent>
        <ModalHeader display={"flex"} justifyContent={"center"}>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => chageimageonsubmit(e, image)}>
              <VStack spacing={'8'}>
                {imageprev && <Avatar src={imageprev} boxSize={'48'} />}
                <Input
                  onChange={changeImage}
                  type="file"
                  css={{ '&::file-selector-button': fileUplodecss }}
                />

                <Button w={'full'} colorScheme="yellow" type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr={'3'} onClick={closeHandler}>
            Cancle
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
