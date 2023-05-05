export const validateEmail = (email: string) => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  if (email.length === 0 || !regex.test(email)) {
    return 'Please enter a valid email address'
  }
}

export const validatePassword = (password: string) => {
  if (password.length < 6) {
    return 'Password must be longer than 6 characters'
  }
}

export const validateName = (name: string) => {
  if (!name.length) {
    return 'Please enter a value'
  }
}
