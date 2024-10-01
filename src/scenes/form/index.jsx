import { Box, Button, TextField, Typography, textField, useMediaQuery } from "@mui/material";
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

const phoneRegEx = /^(0[89]{1}[0-9]{8})$|^(\\+66[89]{1}[0-9]{8})$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid Emai;").required("required"),
    contact: yup
        .string()
        .matches(phoneRegEx, "Invalid Phone Number")
        .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
})

export default function Form() {
    const isNonMobile = useMediaQuery("(min-width:600px)")

    const handleSubmit = (values) => { console.log(values) }
    return (
        <Box m="20px">
            <Header title="Create user" subtitle="Create New User Profile" />
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, ifr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4"} }}>
                            <TextField fullWidth  variant="filled" type="text" label="FirstName" onBlur={handleBlur} onChange={handleChange} value={values.firstName} name="firstName" error={!!touched.firstName && !!errors.firstName} helperText={!!touched.firstName && !!errors.firstName} sx={{gridColumn: "span 2"}}/>
                            <TextField fullWidth  variant="filled" type="text" label="LastName" onBlur={handleBlur} onChange={handleChange} value={values.lastName} name="lastName" error={!!touched.lastName && !!errors.lastName} helperText={!!touched.lastName && !!errors.lastName} sx={{gridColumn: "span 2"}}/>
                            <TextField fullWidth  variant="filled" type="text" label="Email" onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" error={!!touched.email && !!errors.email} helperText={!!touched.email && !!errors.email} sx={{gridColumn: "span 2"}}/>
                            <TextField fullWidth  variant="filled" type="text" label="Contact" onBlur={handleBlur} onChange={handleChange} value={values.contact} name="firstNmae" error={!!touched.contact && !!errors.contact} helperText={!!touched.contact && !!errors.contact} sx={{gridColumn: "span 2"}}/>
                            <TextField fullWidth  variant="filled" type="text" label="Address1" onBlur={handleBlur} onChange={handleChange} value={values.address1} name="address1" error={!!touched.address1 && !!errors.address1} helperText={!!touched.address1 && !!errors.address1} sx={{gridColumn: "span 2"}}/>
                            <TextField fullWidth  variant="filled" type="text" label="Address2" onBlur={handleBlur} onChange={handleChange} value={values.address2} name="address2" error={!!touched.address2 && !!errors.address2} helperText={!!touched.address2 && !!errors.address2} sx={{gridColumn: "span 2"}}/>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">Create New User</Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}