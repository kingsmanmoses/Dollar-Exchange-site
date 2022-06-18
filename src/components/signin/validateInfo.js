export default function validateInfo(values) {
  let errors = {};
  // For username
  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  // for the email
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is required';
  }

  //   For the password
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 character or more';
  }

  //   For password 2
  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Password does not match';
  }

  return errors;
}
