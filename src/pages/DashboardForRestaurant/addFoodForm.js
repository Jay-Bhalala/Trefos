import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { v4 } from "uuid";
import Button from "@mui/material/Button";
import { API, graphqlOperation } from "aws-amplify";
import {
  createFood,
  updateRestaurant,
} from "../../../src/graphql/mutations.js";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#F4ccac",
      contrastText: "#fff",
    },
  },
});

const initialValues = {
  id: "",
  name: "",
  daysOld: "",
  pounds: 0.0,
  pickUp: "",
};

function AddFoodForm(props) {
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
    temp.daysOld = values.daysOld ? "" : "This Field is Required.";
    temp.pounds = values.pounds ? 0.0 : "This Field is Required.";
    temp.pickUp = values.pickUp ? "" : "This Field is Required.";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await API.graphql({
        query: createFood,
        variables: {
          input: {
            id: v4(),
            name: values.name,
            pounds: values.pounds,
            daysOld: values.daysOld,
            pickUp: values.pickUp,
            restaurantID: props.id,
          },
        },
      });
      await API.graphql({
        query: updateRestaurant,
        variables: {
          input: {
            id: props.id,
            pounds: Number(values.pounds) + Number(props.pounds),
            totalpounds: Number(values.pounds) + Number(props.totalpounds),
          },
        },
      });
      props.onAddFood();
      setValues(initialValues);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          variant="outlined"
          label="Food Name"
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
          label="Days Old"
          type="number"
          name="daysOld"
          style={{ margin: "1rem" }}
          value={values.daysOld}
          onChange={handleInputChange}
          {...(errors.daysOld && {
            error: true,
            helperText: errors.daysOld,
          })}
          InputProps={{
            inputProps: { min: 0 }
          }}
        />
        <TextField
          variant="outlined"
          label="Pounds"
          type="number"
          name="pounds"
          style={{ margin: "1rem" }}
          value={values.pounds}
          onChange={handleInputChange}
          {...(errors.pounds && {
            error: true,
            helperText: errors.pounds,
          })}
          InputProps={{
            inputProps: { min: 0 }
          }}
        />
        <TextField
          variant="outlined"
          label="Days Available For Pickup"
          type="number"
          name="pickUp"
          style={{ margin: "1rem" }}
          value={values.pickUp}
          onChange={handleInputChange}
          {...(errors.pickUp && {
            error: true,
            helperText: errors.pickUp,
          })}
          InputProps={{
            inputProps: { min: 0 }
          }}
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

export default AddFoodForm;
