import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css'
 
 export const Address = ({submit,setFormValues,prevValues}) => {
   return (
     <Formik
       initialValues={prevValues}
       
       validationSchema={Yup.object({
        area: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .min(5,"Must be 5 characters or more")
           .required('Required necessary'),
         city: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
           email: Yup.string()
           .email('Invalid email address')
           .required('Required'),
       })}
       onSubmit={(values) => {
         submit(1)
         setFormValues({...values})
       }}
     >
       <Form className="form">
         {/* <label htmlFor="area" className="label">Area Name</label> */}
         <Field name="area" type="text" placeholder="Area Name" className="field" />
         <ErrorMessage name="area" className="error" />
         <br/>
         {/* <label htmlFor="city">City Name</label> */}
         <Field name="city" type="text" placeholder="City Name" className="field"/>
         <ErrorMessage name="city" />
         <br/>
         {/* <label htmlFor="email">Email Address</label> */}
         <Field name="email" type="email" placeholder="Email" className="field" />
         <ErrorMessage name="email" /> <br/>
         <button    
                        variant="contained"
                        color="primary"
                        type="submit">Next</button>
       </Form>
     </Formik>
   );
 };