import React from "react";
import "./Registration.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";

const RegisterationValidationSchema = yup.object({
  name: yup
    .string()
    .min(3, "too small")
    .max(15, "too large")
    .required("Fill the name field "),

  email: yup
    .string()
    .min(5, "too small")
    .required("fill the email ")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Patter not match"
    ),

  mobile: yup.number().required("must be number"),

  country: yup.string().required("fill country"),

  state: yup.string().required("fill state"),

  city: yup.string().required("fill city"),

  message: yup.string().required("Enter message"),
});

const Registration = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        mobile: "",
        country: "",
        state: "",
        city: "",
        message: "",
      },
      validationSchema: RegisterationValidationSchema,
      onSubmit: (value) => {
        console.log("submit", value);
      },
    });

  return (
    <div className="Registration_contaier">
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          variant="standard"
          label="Name"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          error={errors.name && touched.name}
          helperText={errors.name && touched.name && errors.name}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="standard"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errors.email && touched.email}
          helperText={errors.email && touched.email && errors.email}
        />
        <TextField
          id="mobile"
          label="Mobile"
          variant="standard"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.mobile}
          error={errors.mobile && touched.mobile}
          helperText={errors.mobile && touched.mobile && errors.mobile}
        />
        <TextField
          id="country"
          label="Country"
          variant="standard"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.country}
          error={errors.country && touched.country}
          helperText={errors.country && touched.country && errors.country}
        />
        <TextField
          id="state"
          label="State"
          variant="standard"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.state}
          error={errors.state && touched.state}
          helperText={errors.state && touched.state && errors.state}
        />
        <TextField
          id="city"
          label="City"
          variant="standard"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.city}
          error={errors.city && touched.city}
          helperText={errors.city && touched.city && errors.city}
        />
        <TextField
          id="message"
          label="Message"
          variant="standard"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          error={errors.message && touched.message}
          helperText={errors.message && touched.message && errors.message}
        />
        <Button type="submit" className="submit_btn" variant="contained">
          submit
        </Button>
      </form>
    </div>
  );
};

export default Registration;
