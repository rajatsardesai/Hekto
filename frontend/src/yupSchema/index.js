import * as Yup from "yup";

// User schemas
export const loginSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Please enter your email"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Please enter your password")
});

export const forgotPassSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Please enter your email")
});

export const resetPassSchema = Yup.object({
    password: Yup.string().min(6, 'Password must be at least 6 characters').required("Please enter your new password"),
    confirmPassword: Yup.string().min(6, 'Password must be at least 6 characters').oneOf([Yup.ref('password'), null], 'Password does not match').required("Please confirm your new password"),
});

export const signupSchema = Yup.object({
    name: Yup.string().min(2, "Name must be at least 2 characters").max(25, "Name should not be more than 25 characters").required("Please enter your name"),
    email: Yup.string().email("Invalid Email").required("Please enter your email"),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required("Please enter your password"),
    avatar: Yup.mixed().required("Please enter your image")
});

export const profileSchema = Yup.object({
    name: Yup.string().min(2, "Name must be at least 2 characters").max(25, "Name should not be more than 25 characters").required("Please enter your name"),
    email: Yup.string().email("Invalid Email").required("Please enter your email"),
});

export const profilePasswordSchema = Yup.object({
    oldPassword: Yup.string().min(6, 'Old password must be at least 6 characters').required("Please enter your old password"),
    newPassword: Yup.string().min(6, 'New password must be at least 6 characters').required("Please enter your new password"),
    confirmNewPassword: Yup.string().min(6, 'New password must be at least 6 characters').oneOf([Yup.ref('newPassword'), null], 'Password does not match').required("Please confirm your new password"),
});

// Cart schemas
export const shippingSchema = Yup.object({
    address: Yup.string().min(6, 'Address must be at least 6 characters').required("Please enter your address"),
    city: Yup.string().min(3, 'City must be at least 3 characters').required("Please enter your city"),
    state: Yup.string().required("Please select your state"),
    landmark: Yup.string().min(3, 'Landmark must be at least 3 characters'),
    pinCode: Yup.number().typeError("Pin code must be a number").min(3, 'Pin code must be at least 3 characters').required("Please enter your pin code"),
    phoneNo: Yup.number().typeError("Phone number must be a number").required("Please enter your phone number"),
});

// Admin schemas
export const productSchema = Yup.object({
    name: Yup.string().min(3, "Name must be at least 3 characters").required("Please enter product name"),
    price: Yup.number().typeError("Price must be a number").required("Please enter product price"),
    description: Yup.string().min(25, "Description must be at least 25 characters").max(2000, "Description should not be more than 2000 characters").required("Please enter product description"),
    category: Yup.string().required("Please select product category"),
    stock: Yup.number().min(1, "Please add atleast 1 product").positive("Stock must be a positive number").typeError("Stock must be a number").required("Please enter product stock"),
    images: Yup.mixed().required("Please choose product image"),
    imagesPreview: Yup.mixed(),
});

export const updateUserSchema = Yup.object({
    name: Yup.string().min(2, "Name must be at least 2 characters").max(25, "Name should not be more than 25 characters").required("Please enter name"),
    email: Yup.string().email("Invalid Email").required("Please enter email"),
    role: Yup.string().required("Please select role"),
});