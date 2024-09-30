import { Box, Typography, textField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import Header from "../../components/Header";
import * as yup from "yup"

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const phoneRegEx = /^(0[89]{1}[0-9]{8})$|^(\\+66[89]{1}[0-9]{8})$/ ;

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid Emai;").required("required"),
    contact: yup
        .string()
        .matches(phoneRegEx,"Invalid Phone Number")
        .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
})

export default function Form(){
    const isNonMobile = useMediaQuery("(min-width:600px)")
    
    const handleSubmit = (values) => {console.log(values)}
    return (
        <Box m="20px">
            <Header title="Create user" subtitle="Create New User Profile"/>

        </Box>
    )
}