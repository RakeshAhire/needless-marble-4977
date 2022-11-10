import { Box, Flex, Image, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../Images/Mega Kart Logo.jpg";
import { FiSearch } from 'react-icons/fi';
import {AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai';
import { GiLoveMystery } from "react-icons/gi";
const Navbar = () => {

  return (
    <Box w='70%' m={"auto"} position="sticky">
      <Box>
        <Flex gap={5} justifyContent="flex-end">
          <Text fontSize='md'>Save $3 with app</Text>
          <Text fontSize='md'>Support Center</Text>
          <Text fontSize='md'>Ship to  / USD</Text>
          <Text fontSize='md'>Language</Text>
          <Text fontSize='md'>Country Website</Text>
        </Flex>
      </Box>
      <Box >
        <Flex align={"center"} justifyContent="space-between">
          <Image w="200px" h="80px" src={logo} alt="Logo" />
          <Flex p={"10px 20px"} border="1px" borderRadius={10} borderColor="#ffda00" align={"center"} gap="20px" >
            <Select placeholder='All' w="60px" variant='unstyled' >
              <option value='option3'>MARKETPLACE</option>
              <option value='option3'>Gearbest Selection</option>
              <option value='option3'>Appliances</option>
              <option value='option3'>Cell Phones & Accessories</option>
              <option value='option3'>Women's Bags</option>
              <option value='option3'>Computers, Tablets & Office</option>
              <option value='option3'>Consumer Electronics</option>
              <option value='option3'>Drones, Toys & Hobbies</option>
              <option value='option3'>Health & Personal Care</option>
            </Select>
            <Input src='' variant='unstyled' w="sm" placeholder='Search' size='md' />
            <Box bgColor="#ffda00"><FiSearch /></Box>
            {/* <Image /> */}
          </Flex>
          <Flex  gap={5}>
            <Flex align={"center"}><AiOutlineUser /> <Text>Sign In</Text> </Flex>
            <Flex align={"center"}><GiLoveMystery /><Text>Favorites</Text> </Flex>
            <Flex align={"center"}><AiOutlineShoppingCart /><Text>Cart</Text> </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Navbar
