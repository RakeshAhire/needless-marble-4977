import { Badge, Box, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';

import { getProduct } from '../Redux/AppReducer/action';


const MensFasion = () => {

    const dispatch = useDispatch();
    const products = useSelector((store) => store.AppReducer.products);
    
  // console.log(products)
   
    useEffect(()=>{
            

            dispatch(getProduct());
    },[])


  return (
    

<div>

  {products.length > 0 && 
  products.map((el)=>(
   <ProductCard key={el.id} {...el} />
 
    // <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={item.id}> 
    //   <Image src={item.image} alt={item.title} />

    //   <Box p='6'>
    //     <Box display='flex' alignItems='baseline'>
    //       <Badge borderRadius='full' px='2' colorScheme='teal'>
    //         New
    //       </Badge>
          
    //     </Box>

    //     <Box
    //       mt='1'
    //       fontWeight='semibold'
    //       as='h4'
    //       lineHeight='tight'
    //       noOfLines={1}
    //     >
    //       {item.title}
    //     </Box>

    //     <Box>
    //       {item.price}
    //       <Box as='span' color='gray.600' fontSize='sm'>
    //         / wk
    //       </Box>
    //     </Box>

        
    //   </Box>
    // </Box>
))
    }
    </div>

  )
}

export default MensFasion
