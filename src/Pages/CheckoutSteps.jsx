import { StepLabel, Typography,Step,Stepper} from '@mui/material'
import React, { Fragment } from 'react'
import {MdLocalShipping} from "react-icons/md";
import {MdLibraryAddCheck,MdAccountBalance} from "react-icons/md"
import "../Styles/CheckoutSteps.css"
export const CheckoutSteps = ({activeStep}) => {

    const steps =[
       {label :<Typography>Shipping Details</Typography>,
       icon :<MdLocalShipping></MdLocalShipping>
    },
    {label :<Typography>Confirm Order</Typography>,
    icon :<MdLibraryAddCheck></MdLibraryAddCheck>
    },
    {label :<Typography>Payment</Typography>,
    icon :<MdAccountBalance></MdAccountBalance>
 },

    ];
   

    const stepStyles ={
        boxSizing:"border-box",
    }
  return (
   <Fragment>
   <Stepper alternativeLabel  activeStep={activeStep} style={stepStyles}>

      {steps.map((item,index)=>(
          <Step key ={index} active ={activeStep ===index ? true: false}
          completed={activeStep>=index ?true :false}
          >

              <StepLabel
               style={{color:activeStep>=index ? "tomato": 'rgba(0,0,0,0.649)'}}
                icon={item.icon} 
              >
                  {item.label}
               
              </StepLabel>

          </Step>
      ))} 
   </Stepper>

   </Fragment>
  )
}