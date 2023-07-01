import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useAlertContext } from '../context/alertContext'
import useSubmit from '../hooks/useSubmit'
import FullScreenSection from './FullScreenSection'

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit()
  const { onOpen } = useAlertContext()
  const [isTouched, setIsTouched] = useState(false)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: (values) => {
      submit('https://asd/asds', values)
      // onOpen(response.type, response.message)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Please enter your first name'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter email'),
      type: '',
      comment: ''
    })
  })

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message)
    }
  }, [response])

  // console.log('Condicional', isTouched ? !formik.values.firstName.length > 0 : false)

  /*
    Se inicia el form control isInvalid = false

    Para ello si el input se toco cambiar de isTouched false a true --> isInvalid es = al cambio de isTouched == true

    isInvalid debe cambiar a false si cumple con la validacion del tamaño del campo

    explicacion:

    Si el campo no esta tocado isInvalid sera falso

    Si se toca pero el valor del campo es menor a un tamaño de 0 devolvera false --> isInvalid == false por lo que debemos invertir este resultado
    Si es mayor sera true y debemos cambiarlo a false para que el isInvalid no sea verdadero y marque error.
  */
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor='#512DA8'
      py={16}
      spacing={8}
    >
      <VStack w='1024px' p={32} alignItems='flex-start'>
        <Heading as='h1' id='contactme-section'>
          Contact me
        </Heading>
        <Box p={6} rounded='md' w='100%'>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={isTouched ? !formik.values.firstName.length > 0 : false}>
                <FormLabel htmlFor='firstName'>Name</FormLabel>
                <Input
                  id='firstName'
                  name='firstName'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={() => setIsTouched(true)}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor='email'>Email Address</FormLabel>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormErrorMessage />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='type'>Type of enquiry</FormLabel>
                <Select
                  id='type' name='type'
                  onChange={formik.handleChange}
                  value={formik.values.type}
                >
                  <option value='hireMe'>Freelance project proposal</option>
                  <option value='openSource'>
                    Open source consultancy session
                  </option>
                  <option value='other'>Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor='comment'>Your message</FormLabel>
                <Textarea
                  id='comment'
                  name='comment'
                  height={250}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
                <FormErrorMessage />
              </FormControl>
              <Button type='submit' colorScheme='purple' width='full' isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>

  )
}

export default LandingSection
