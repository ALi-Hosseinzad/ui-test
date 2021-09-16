import * as yup from "yup";

export default function getValidationSchema(arrayOfKeys) {
  const userSchemaObject = {
    password: yup
      .string()
      .required("Password is Required")
      .min(8, "Password is too short - should be 8 chars minimum"),

    userName: yup
      .string()
      .required("Name is Required")
      .min(3, "Name is too short - should be 3 chars minimum")
      .max(32, "Name is too long - should be 32 chars maximum"),
  };
  const keys =
    arrayOfKeys.length === 0 ? Object.keys(userSchemaObject) : arrayOfKeys;

  const shape = keys.reduce((output, currentKey) => {
    output[currentKey] = userSchemaObject[currentKey];
    return output;
  }, {});
  return yup.object().shape(shape);
}
