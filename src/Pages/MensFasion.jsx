import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';
import { getProduct } from '../Redux/AppReducer/action';
import styles from "../styles"

const MensFasion = () => {

    const dispatch = useDispatch();
    const products = useSelector((store) => store.AppReducer.products);
    
   
   
    useEffect(()=>{
            

            dispatch(getProduct());
    },[])


  return (
    <div>
      {products.length > 0 && 
                products.map((item)=>{
                    return <div key={item.id} >
                        <div className={styles.maincard} >
                            <img className={styles.maincardimg} src={item.image} alt={item.title} />
                            <h3 className={styles.maincardtitle}>{item.title}</h3>
                            <h2 className={styles.maincardprice}>{item.price}</h2>
                        </div>
                    </div>
                })
                }
    </div>
  )
}

export default MensFasion
