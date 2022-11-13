
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Box, Text, Flex, UnorderedList, ListItem, List } from "@chakra-ui/react";
import '../App.css';
import { Link } from 'react-router-dom';
const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"

    };
    return (
        <div style={{marginBottom:'20px'}}>
            <Box  w="80%" backgroundColor="#ffda00" m="auto">
                <Flex as="b" w="70%"  justifyContent="space-between">
                    <Box w="28%" backgroundColor="black" p={2}><Text color={"whiteAlpha.900"} >Category</Text>
                        <List backgroundColor="whiteAlpha.900" opacity="0.9" left={{base:'153px',sm:'50px',md:'140px'}}  p={"7px 15px"} mt={2} lineHeight={{base:'35px',sm:'16px',md:'17px',lg:'35px'}}  position={"absolute"} textAlign='left' zIndex="9">
                            <Link to="/product-page"><ListItem>Consumer Electronics</ListItem></Link>
                            <ListItem>Industrial & Scientific</ListItem>
                            <ListItem>Cell Phones & Accessories</ListItem>
                            <ListItem>Appliances</ListItem>
                            <ListItem>Outdoors,Fitness & Sports</ListItem>
                            <ListItem>Computers,Tablets & Office</ListItem>
                            <ListItem>Health & Personal Care</ListItem>
                            <ListItem>Home Improvements & Tools</ListItem>
                            <ListItem>Drones, Toys & Hobbies</ListItem>
                            <ListItem>Home & Garden</ListItem>
                            <ListItem>Motor & Car Electronics</ListItem>
                            <ListItem>Men's Fashion</ListItem>
                            <ListItem>Watches & Jewelry</ListItem>
                            <ListItem>Gearbest Promotion</ListItem>
                        </List>
                    </Box>
                    <Box w="23%" p={2} ><Text>Super Deals</Text></Box>
                    <Box w="23%" p={2}><Text>App Only</Text></Box>
                    <Box w="23%" p={2}><Text>New Arrivals</Text></Box>
                </Flex>
            </Box>
            <Slider {...settings} style={{ width: "80%", margin: 'auto' }}>

                <Box h={{base:'500px',sm:"250px",md:'250px',lg:'500px'}}>
                    <Image objectFit="cover" w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/8823/eleven_1190x420_en.jpg" alt="Image 1" />
                </Box>

                <Box h={{base:'500px',sm:"250px",md:'250px',lg:'500px'}}>
                    <Image w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/8823/electronics_1190x420_en.jpg" alt="Image 2" />
                </Box>

                <Box h={{base:'500px',sm:"250px",md:'250px',lg:'500px'}}>
                    <Image w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/8823/en_1190x420.jpg?imbypass=true" alt="Image 2" />
                </Box>

                <Box h={{base:'500px',sm:"250px",md:'250px',lg:'500px'}}>
                    <Image w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/8823/printer_1190x420_en.jpg" alt="Image 2" />
                </Box>

                <Box h={{base:'500px',sm:"250px",md:'250px',lg:'500px'}}>
                    <Image w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/8823/home_1190x420_en.jpg" alt="Image 2" />
                </Box>

                <Box h={{base:'500px',sm:"250px",md:'250px',lg:'500px'}}>
                    <Image w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg" alt="Image 2" />
                </Box>
            </Slider>
        </div>
    );
}
export default Slide
