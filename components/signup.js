import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";

// const handleSubmit = async (event, values, actions) => {
//   event.preventDefault();

//   axios.post(url, payload(values.name))
//       .then(res => {
//         // do stuff
//       }).catch(err => {
//         // do other stuff
//   })
// }


// i can't find api

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      //       onSubmit ={async(values)=>{
      //         const data = {
      //           records:[
      //             {
      //               fields:{
      //                 firstName : values.firstName,
      //                 lastName : values.lastName,
      //                 email : values.email,
      //                 password : values.password
      //               }
      //             }
      //           ]
      //         }
      //         const axiosConfig = {
      //   headers :{

      //   }
      // }

      // await Axios.post("https://api.buydomains.com/locale/detect?timestamp=1655014892896",data,axiosConfig).then(response)=>{
      //   console.log("Successful").catch(e=>{
      //     console.log("error")
      //   })
      // }
      //       }}
    >
      {(formik) => (
        <div className="box_signup">
          <h1 className="text_sign">Sign Up</h1>
          <Form method="POST">
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default Signup;
