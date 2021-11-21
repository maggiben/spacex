import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  AspectRatio,
} from '@chakra-ui/react'
import { getEmbedUrl } from '../../util/youtube'

interface ILaunch {
  mission_name: string | null | undefined;
  links?: {
    article_link?: string | null | undefined;
    video_link?: string | null | undefined;
    mission_patch?: string | null | undefined;
  } | null | undefined;
  rocket_name: string | null | undefined;
}

const Launch = ({ mission_name, links, rocket_name }: ILaunch) => {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <AspectRatio maxH="180px" layout={'fill'}>
            <iframe
              title="naruto"
              src={getEmbedUrl(links?.video_link)}
              allowFullScreen
            />
          </AspectRatio>
        </Box>
        <Stack>
          <Text
            color={'black.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            minH="60px"
            letterSpacing={1.1}>
            {mission_name}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {}
          </Heading>
          <Text color={'gray.500'}>
            {rocket_name}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={`${links?.mission_patch ? links?.mission_patch : 'https://spaceflightnow.com' }`}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default Launch