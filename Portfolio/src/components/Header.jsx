import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons'
import { Box, HStack } from '@chakra-ui/react'
import useScrollDirection from '../hooks/useScrolled'

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: hello@example.com'
  },
  {
    icon: faGithub,
    url: 'https://github.com'
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com'
  },
  {
    icon: faMedium,
    url: 'https://medium.com'
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com'
  }
]

const navigation = [
  {
    name: 'Projects',
    url: 'projects'
  },
  {
    name: 'Contact me',
    url: 'contactme'
  }
]

const Header = () => {
  /* Animation on scroll */

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollDirection = useScrollDirection()

  const [scroll, setScroll] = useState({
    position: 0,
    direction: ''
  })
  const prevScroll = usePreviousScroll(scroll.position)

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault()
      const st = window.scrollY || e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]
      console.log('Actual scroll', scroll)
      console.log('Anterior scroll', prevScroll)
      if (st > prevScroll || prevScroll === undefined) {
        setScroll({ ...scroll, position: st, direction: 'down' })
      } else if (st < prevScroll) {
        setScroll({ ...scroll, position: st, direction: 'up' })
      }
      // prevScroll = st <= 0 ? 0 : st
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('touchmove', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.addEventListener('touchmove', handleScroll)
    }
  }, [scroll])

  return (
    <div className={`fixed ${scrollDirection === 'down' ? '-top-24' : 'top-0'} h-24 bg-blue-200 transition-all duration-500`}>
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <ul className='flex gap-4'>
              {
              socials.map((links, idx) => {
                return (
                  <li key={idx}>
                    <a href={links.url}>
                      <FontAwesomeIcon icon={links.icon} size='2x' />
                    </a>
                  </li>
                )
              })
              }
            </ul>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              {
                navigation.map((nav, idx) => {
                  return (
                    <a className='cursor-pointer' onClick={handleClick(nav.url)} key={idx}>{nav.name}</a>
                  )
                })
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </div>
  )
}
export default Header

function usePreviousScroll (val) {
  const ref = useRef()

  useEffect(() => {
    ref.current = val
  }, [val])

  return ref.current
}
