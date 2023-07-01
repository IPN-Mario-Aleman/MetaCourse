import { Box, Image, Text, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box className='bg-white text-black rounded-2xl '>
      <Image src={imageSrc} alt='projects' className='aspect-video rounded-2xl' />
      <Box className='p-4'>
        <h2 className='font-bold text-[20px] text-left'>{title}</h2>
        <VStack marginBottom={2} marginTop={2}>
          <Text color='#738195'>{description}</Text>
        </VStack>
        <a className='cursor-pointer'>See more <FontAwesomeIcon icon={faArrowRight} size='1x' /></a>
      </Box>
    </Box>
  )
}

export default Card
