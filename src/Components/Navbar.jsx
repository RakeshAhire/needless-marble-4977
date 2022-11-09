import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../Images/Mega Kart Logo.jpg"
const Navbar = () => {

  return (
    <Box>
      <Box>
        <Flex gap={5} justifyContent="flex-end" mr="20px">
          <Text fontSize='md'>Save $3 with app</Text>
          <Text fontSize='md'>Support Center</Text>
          <Text fontSize='md'>Ship to  / USD</Text>
          <Text fontSize='md'>Language</Text>
          <Text fontSize='md'>Country Website</Text>
        </Flex>
      </Box>
      <Box>
        <Image w="200px"
          h="80px" src={logo} alt="Logo" />
      </Box>
    </Box>
  )
}

export default Navbar
