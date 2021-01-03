import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './payment.css'
 
 export const Payment = ({submit,setFormValues,prevValues}) => {
   return (
     <Formik
       initialValues={prevValues}
       
       validationSchema={Yup.object({
         cardName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         cardNumber: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         
       })}
       onSubmit={(values) => {
        submit(2)
        setFormValues({...values,...prevValues})
       }}
     >
       <Form className="form">
         {/* <label htmlFor="cardName">Card Name</label>   */}
         <Field name="cardName" type="text" placeholder="Enter Card Name"  className="field"/>   
         <ErrorMessage name="cardName" />
         {/* <label htmlFor="cardNumber">Card Number</label> */}
         <Field name="cardNumber" type="text" placeholder="Enter Card Number" className="field" />
         <ErrorMessage name="cardNumber" /> <br/>
         <button onClick={()=>submit(0)}>Back</button>
         <button type="submit">Next</button>
       </Form>
     </Formik>
   );
 };