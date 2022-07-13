import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { v4 } from "uuid";
import { API } from "aws-amplify";
import { createRestaurant } from "../../../src/graphql/mutations.js";

const initialValues = {
  id: "",
  name: "",
  address: "",
  phone: "",
  email: "",
};

const theme = createTheme({
  palette: {
    neutral: {
      main: "#F4ccac",
      contrastText: "#fff",
    },
  },
});

function CreateRestForm(props) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    let temp = {};
    temp.name = values.name ? "" : "This Field is Required.";
    temp.address = values.address ? "" : "This Field is Required.";
    temp.phone = values.phone ? "" : "this field is Required";
    temp.email = values.email ? "" : "This Field is Required.";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await API.graphql({
        query: createRestaurant,
        variables: {
          input: {
            id: v4(),
            name: values.name,
            address: values.address,
            phone: values.phone,
            email: values.email,
          },
        },
      });
      setValues(initialValues);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          variant="outlined"
          label="Restaraunt Name"
          value={values.name}
          style={{ margin: "1rem" }}
          name="name"
          onChange={handleInputChange}
          {...(errors.name && {
            error: true,
            helperText: errors.name,
          })}
        />
        <TextField
          variant="outlined"
          label="Address"
          type="text"
          name="address"
          style={{ margin: "1rem" }}
          value={values.address}
          onChange={handleInputChange}
          {...(errors.address && {
            error: true,
            helperText: errors.address,
          })}
        />
        <TextField
          variant="outlined"
          label="Phone Number"
          type="text"
          name="phone"
          style={{ margin: "1rem" }}
          value={values.phone}
          onChange={handleInputChange}
          {...(errors.phone && {
            error: true,
            helperText: errors.phone,
          })}
        />
        <TextField
          variant="outlined"
          label="email"
          type="text"
          name="email"
          style={{ margin: "1rem" }}
          value={values.email}
          onChange={handleInputChange}
          {...(errors.email && {
            error: true,
            helperText: errors.email,
          })}
        />
        <ThemeProvider theme={theme}>
          <Button color="neutral" variant="contained" type="submit">
            Save
          </Button>
        </ThemeProvider>
      </div>
    </form>
  );
}

export default CreateRestForm;
