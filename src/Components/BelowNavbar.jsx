import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img1 from "../Images/Below1.jpg"
import img2 from "../Images/Below2.jpg"
import { BsBagCheck } from "react-icons/bs";
import AppOnly from "../Images/AppOnly.jpg"
import { useSelector } from 'react-redux';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import "../Styles/BelowNavbar.css"
const BelowNavbar = () => {
    const products = useSelector((state) => state.AppReducer.products)
    // console.log('products: ', products);
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const AppOnlyData = [
        {
            imgUrl: 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16675/goods_thumb_220-v3/40531eb61b7a.jpg',
            title: 'Nimble Tech Store',
        },
        {
            imgUrl: 'https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16545/goods_thumb_220-v3/a75d89f4a160.jpg',
            title: 'Ortur Official Store',
        },
        {
            imgUrl: 'https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16388/goods_thumb_220-v1/7f75f2f344a1.jpg',
            title: 'Assio Go Store',
        },
        {
            imgUrl: 'https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16512/goods_thumb_220-v1/8d220616eed4.jpg',
            title: 'Eight Hours Store',
        },
        {
            imgUrl: 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_thumb_220-v1/4e5c7e4add41.jpg',
            title: 'Clearence Sale',
        },

    ]
    return (
        <>
            <Flex w={{ base: '95%', sm: '70%', md: "70%", lg: "95%" }} m="auto" justifyContent="space-between" >
                <Image w={{ base: '350px', sm: '100px', md: "120px", lg: "270px" }} h={{ base: '150px', sm: '80px', md: "100px", lg: "150px" }} src={img2} onMouseOver={e => (e.currentTarget.src = img1)} transition={"all 0.5s"} onMouseLeave={e => (e.currentTarget.src = img2)} alt="image5" />
                <Image w={{ base: '250px', sm: '100px', md: "120px", lg: "270px" }} h={{ base: '150px', sm: '80px', md: "100px", lg: "150px" }} src="https://uidesign.gbtcdn.com/GB/image/8823/ortur_master3_230%C3%97120_en.jpg" alt="image1" />
                <Image w={{ base: '250px', sm: '100px', md: "120px", lg: "270px" }} h={{ base: '150px', sm: '80px', md: "100px", lg: "150px" }} src="https://uidesign.gbtcdn.com/GB/image/7257/230_120_en.jpg" alt="image2" />
                <Image w={{ base: '250px', sm: '100px', md: "120px", lg: "270px" }} h={{ base: '150px', sm: '80px', md: "100px", lg: "150px" }} src="https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg" alt="image3" />
                <Image w={{ base: '250px', sm: '100px', md: "120px", lg: "270px" }} h={{ base: '150px', sm: '80px', md: "100px", lg: "150px" }} src="https://uidesign.gbtcdn.com/GB/image/6080/230x120.jpg?imbypass=true" alt="image4" />
            </Flex>
            <Box w={"90%"} m="auto" mt={20}>
                <Image w="full" src='https://uidesign.gbtcdn.com/GB/image/8823/eleven_1190x210_en.jpg' alt='BelowSecond' />
            </Box>
            <Box w={"90%"} m="auto" mt={5}>
                <Flex gap={5} justifyContent="flex-start">
                    <BsBagCheck size="2em" />
                    <Text as={"b"} fontSize="2xl">COLLECTION</Text>
                </Flex>
            </Box>
            <Flex w={'95%'} m="auto" justifyContent="space-between" mt={5}>
                <Box w="230px" h="auto" >
                    <Image w={"full"} h="full" src={AppOnly} />
                </Box>
                {
                    AppOnlyData.map((e) => (
                        <Box key={e.title} w="230px" h="auto" p={2} border="1px" borderColor={"gray.300"} >
                            <Image w={"full"} src={e.imgUrl} />
                            <Text fontSize={"20px"} mt={10} >{e.title}</Text>
                        </Box>
                    ))
                }
            </Flex>

            {/* Slider Part */}
            {/* <Box>
                <Slider {...settings}>
                    <div>
                        <Image w="450px" h="300px" src='https://uidesign.gbtcdn.com/GB/image/8823/lQDPJxa0uAZUaPTNASzNAcKwpTzUF6FCvx4DKSfz08AdAA_450_300.jpg' />
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </Box> */}

        </>
    )
}

export default BelowNavbar
