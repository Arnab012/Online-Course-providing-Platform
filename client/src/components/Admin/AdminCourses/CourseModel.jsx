import {
    Box,
    Button,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { FaTimes } from 'react-icons/fa';
  import React, { useState } from 'react';
  import { RiDeleteBin7Fill } from 'react-icons/ri';
  import { fileUplodecss } from '../../Auth/Login/Register';
  
  const CourseModel = ({
    isOpen,
    onClose,
    id,
    deleteButtonHandeler,
    coursetitle,
    lectures = [1, 2, 3, ],
    addlectureHandler,
  }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('');
    const [videoprev, setvideoprev] = useState('');
  
    const changevideoHandler = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onloadend = () => {
        setvideoprev(reader.result);
        setVideo(file);
      };
    };
  
    const handelClose = () => {
      setTitle('');
      setDescription('');
      setVideo('');
      setvideoprev('');
      onClose();
    };
  
    return (
      <Modal isOpen={isOpen} size={'full'} onClose={handelClose} scrollBehavior="outside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{coursetitle}</ModalHeader>
          <Button onClick={handelClose} position={'fixed'} right={'10'} top={'4'}>
            <FaTimes />
          </Button>
  
          <ModalBody p={['4', '4', '16']}>
            <Box
              display={'flex'}
              flexDirection={['column', 'column', 'row']}
              justifyContent={'space-evenly'}
              alignItems={'center'}
            >
              <Box px={['0', '0', '16']} width={['100%', '100%', '60%']}>
                <Box my={'5'}>
                  <Heading children={coursetitle} />
                  <Heading children={id} size={'sm'} opacity={0.4} />
                </Box>
                <Heading children={'Lectures'} size={'lg'} />
                {lectures.map((item, index) => (
                  <VideoCard
                    key={index}
                    title="React Intro"
                    description="This is an Intro Lecture of React Tutorial"
                    num={index + 1}
                    lectureId="2t3ewvqge26e22"
                    courseId={id}
                    deleteButtonHandeler={deleteButtonHandeler}
                  />
                ))}
              </Box>
  
              <Box width={['100%', '100%', '40%']}>
                <form
                  onSubmit={(e) =>
                    addlectureHandler({ e, id, title, description, video })
                  }
                >
                  <VStack spacing={'4'}  >
                    <Heading
                      children="Add Lectures"
                      size={'md'}
                      textTransform={'uppercase'}
                    />
                    <Input
                      focusBorderColor="purple.500"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <Input
                      focusBorderColor="purple.500"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <Input
                      accept="video/mp4"
                      required
                      type={'file'}
                      focusBorderColor="purple.300"
                      css={{
                        '&::file-selector-button': {
                          ...fileUplodecss,
                          color: 'purple',
                        },
                      }}
                      onChange={changevideoHandler}
                    />
                    {videoprev && (
                      <video
                        controlsList="nodownload"
                        src={videoprev}
                        controls
                        muted
                        style={{ height: '300px', width: '100%' }}
                      ></video>
                    )}
                    <Button w={'full'} colorScheme={'purple'} type="submit">
                      Upload
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handelClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default CourseModel;
  
  function VideoCard({
    title,
    description,
    num,
    lectureId,
    courseId,
    deleteButtonHandeler,
  }) {
    return (
      <Stack
        direction={['column', 'row']}
        my={'8'}
        borderRadius={'lg'}
        boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
        justifyContent={['flex-start', 'space-between']}
        p={['4', '8']}
      >
        <Box>
          <Heading size={'sm'} children={`#${num} ${title}`} />
          <Text children={description} />
        </Box>
        <Button
          color={'purple.600'}
          onClick={() => deleteButtonHandeler(courseId, lectureId)}
        >
          <RiDeleteBin7Fill />
        </Button>
      </Stack>
    );
  }
  