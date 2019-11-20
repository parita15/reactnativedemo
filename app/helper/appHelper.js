export function isValidUserName(email) {
    const format = /^[0-9a-zA-Z_]{5,}$/;
    return format.test(email);
}

export function isValidPhoneNumber(email) {
    const format = /^[0-9]{10}$/;
    return format.test(email);
}

export function isValidFullName(email) {
    const format = /^[a-zA-Z ]{10,}$/;
    return format.test(email);
}

export function isValidPassword(email){
    const format = /^[0-9a-zA-Z_@#]{8,}$/;
    return format.test(email);
}