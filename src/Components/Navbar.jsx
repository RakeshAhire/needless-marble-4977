import { Box, Center, Flex, Image, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import logo from "../Images/Mega Kart Logo.jpg";
import { FiSearch } from 'react-icons/fi';
import {AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai';
import { GiLoveMystery } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [text,setText]=useState()

  return (
    <Center mt="52px" mb="60px">
    <Box width={[
      '80%', // 0-30em
      '80%', // 30em-48em
      '90%', // 48em-62em
      '100%', // 62em+
    ]} position="fixed" zIndex="99" bgColor={"white"} m="auto" p={"5px 15px"} >
      <Box >
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
          <Link to="/"><Image w="200px" h="80px" src={logo} alt="Logo" /></Link>
          <Flex p={{sm: "2px 10px", md: "5px 15px",lg:"7px 20px"}} border="1px" borderRadius={10} borderColor="#ffda00" align={"center"} gap="20px" >
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
            <Input variant='unstyled' w={{sm: '100px', md: '100px',lg:'sm'}} placeholder='Search'  />
            <Box bgColor="#ffda00" ><FiSearch size="2em" /></Box>
            {/* <Image /> */}
          </Flex>
          <Flex  gap={5}>
            <Link to="/login"><Flex align={"center"} gap={2} color={'black'}><AiOutlineUser size="1.5em" /> <Text>Sign In</Text> </Flex></Link>
            <Flex align={"center"} gap={2} color={'black'}><GiLoveMystery size="1.5em"/><Text>Favorites</Text> </Flex>
            <Link to="/cart"><Flex align={"center"} gap={2} color={'black'}><AiOutlineShoppingCart size="1.5em" /><Text>Cart</Text> </Flex></Link>
            <Link to="/admin-page"><Flex align={"center"} gap={2} color={'black'}><AiOutlineUser size="1.5em" /> <Text>Admin</Text> </Flex></Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
    </Center>
  )
}

export default Navbar
