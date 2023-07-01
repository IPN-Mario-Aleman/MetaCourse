import React from 'react'
import FullScreenSection from './FullScreenSection'
import { Box, Heading } from '@chakra-ui/react'
import Card from './Card'
import img from '../assets/images/photo1.jpg'
import img2 from '../assets/images/photo2.jpg'
import img3 from '../assets/images/photo3.jpg'
import img4 from '../assets/images/photo4.jpg'

const projects = [
  {
    title: 'React Space',
    description:
      'Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️',
    img
  },
  {
    title: 'React Infinite Scroll',
    description:
      'A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️',
    img: img2
  },
  {
    title: 'Photo Gallery',
    description:
      'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
    img: img3
  },
  {
    title: 'Event planner',
    description:
      'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps',
    img: img4
  }
]

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor='#14532d'
      isDarkBackground
      p={8}
      alignItems='flex-start'
      spacing={8}
    >
      <Heading as='h1' id='projects-section'>
        Featured Projects
      </Heading>
      <Box
        display='grid'
        gridTemplateColumns='repeat(2,minmax(0,1fr))'
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.img}
          />
        ))}
      </Box>
    </FullScreenSection>
  )
}

export default ProjectsSection
