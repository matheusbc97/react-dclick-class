export default function getValidationErrors(yupError) {
  const validationErrors = {};

  yupError.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
