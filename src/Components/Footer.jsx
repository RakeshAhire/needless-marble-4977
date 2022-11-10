import React from 'react'
import { Flex, Box , Image, Text, Input, Button} from '@chakra-ui/react'
import logo from "../Images/Mega Kart Logo.jpg"


const Footer = () => {
  return (
    <div>
       <Box w={"70%"} margin={"auto"}>
        <Flex 
        // border={"1px solid red"} 
        gap="20px">

          {/* 1 */}
          <Box 
          // border={"1px"} 
          // marginLeft={"120px"}
           padding={"10px"}>
          <Box>
            <Image w="120px" h="60px" margin={"auto"}  src={logo} alt='logo' />
          </Box>
            <Box>
            <Text fontSize={"14px"} as={"b"} padding={"10px"}>
             AFFORDABLE QUALITY
             </Text>
             <br/>
             <Text fontSize={"13px"} as={"b"} >
             FUN SHOPPING
             </Text>

           </Box>
           </Box>

            {/* 2  */}
           <Box 
          //  border={"1px"} 
           padding={"10px"}>
            <Box>
              <Image w="80px" h="60px" margin={"auto"} src={"https://banner2.cleanpng.com/20180420/vlq/kisspng-font-awesome-computer-icons-font-housing-logo-5ada418c752ba8.1327093815242530684799.jpg"} alt='logo' />
            </Box>
            <Box>
            <Text fontSize='md' as={"b"}>
             High Quality Selection
             </Text>
             <Text fontSize='sm' >
             Total product quality control for peace of mind
             </Text>

           </Box>
           </Box>

           {/* 3  */}
           <Box 
          //  border={"1px"} 
           padding={"10px"}>
          <Box>
            <Image w="100px" h="60px" margin={"auto"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD50awLbR6VSN5qTId469qIj7tZQINmX2gCA&usqp=CAU"} alt='logo' />
          </Box>
            <Box>
            <Text fontSize='md' as={"b"}>
             Affordable Prices
             </Text>
             <Text fontSize='sm'>
             Factory direct prices for maximum savings
             </Text>

           </Box>
           </Box>

            {/* 4  */}
           <Box 
          //  border={"1px"} 
           padding={"10px"}>
          <Box>
            <Image w="130px" h="70px" margin={"auto"} src={"https://media.istockphoto.com/vectors/delivery-service-icon-shopping-cart-sign-vector-vector-id1253034973"} alt='logo' />
          </Box>
            <Box>
            <Text fontSize='md'as={"b"}>
             Express Shipping
             </Text>
             <Text fontSize='sm' >
             Fast, reliable delivery from global warehouses
             </Text>

           </Box>
           </Box>

            {/* 5  */}
           <Box 
          //  border={"1px"} 
           padding={"10px"} 
          //  marginRight={"120px"}
           >
          <Box>
            <Image w="110px" h="70px" margin={"auto"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lJqyI2uH_GFo8cFjOdzEq3EEmsiczFIMAA&usqp=CAU"} alt='logo' />
          </Box>
            <Box>
            <Text fontSize='md' as={"b"} >
             Worry-free After-sales
             </Text>
             <Text fontSize='sm' >
             Instant access to professional support
             </Text>

           </Box>
           </Box>

          </Flex>

{/* 2nd part */}
          <Flex marginTop={"50px"}>
          <Box  >
           <Text fontSize='md' as={"b"} opacity={"0.6"}  padding={"10px"} display={"flex"}>
             Newsletter
             </Text>
           </Box>
           <Box  display={"flex"}>
            <Input placeholder='Enter Email to get 50 points' width={"340px"} size='lg' margin={"auto"} />
            <Button colorScheme='White' backgroundColor={"black"} size='lg' margin={"auto"} > Subscribe </Button>
           </Box>

           <Box display={"flex"} border={"1px"}>
             <Image w="25px" h="15px" margin={"auto"} src={"https://cdn-icons-png.flaticon.com/512/20/20673.png"} alt='fb' />
             <Image w="30px" h="20px" margin={"auto"} src={"https://4.bp.blogspot.com/-HbbdUL3LpX4/XufdAx4OmNI/AAAAAAAAPGI/UbkoFCI2tW4I0ZqqAiTyS_F9ERVw71bpgCLcBGAsYHQ/s1600/image2.png"} alt='msg' />
             <Image w="25px" h="15px" margin={"auto"} src={""} alt='yt' />
             <Image w="25px" h="15px" margin={"auto"} src={""} alt='pixel' />
             <Image w="25px" h="15px" margin={"auto"} src={""} alt='insta' />
             <Image w="25px" h="15px" margin={"auto"} src={""} alt='twitter' />
             <Image w="25px" h="15px" margin={"auto"} src={""} alt='blog' />
             <Image w="25px" h="15px" margin={"auto"} src={""} alt='t' />
             <Image w="25px" h="15px" margin={"auto"} src={""} alt='t' />
           </Box>
          </Flex>

       </Box>
    </div>
  )
}

export default Footer

