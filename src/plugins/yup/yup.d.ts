declare module 'yup' {
    interface StringSchema {
        isEmail(): StringSchema;
        isStrongPassword(): StringSchema;
    }
}

export default {};
