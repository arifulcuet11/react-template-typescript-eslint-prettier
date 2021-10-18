export const validateField = (fieldName: string, value: string): boolean => {
    let isValid = false;
    switch (fieldName) {
        case 'email':
            const emailCheck = value.match(
                /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
            );
            isValid = emailCheck ? true : false;
            break;
        case 'password':
            isValid = value.length >= 6;
            break;
        default:
            break;
    }
    return isValid;
};
