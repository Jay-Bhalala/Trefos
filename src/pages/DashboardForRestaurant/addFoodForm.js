import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#F4ccac",
      contrastText: "#fff",
    },
  },
});

const initialValues = {
  id: 0,
  foodName: "",
  daysOld: "",
  pounds: "",
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
    temp.foodName = values.foodName ? "" : "This Field is Required.";
    temp.daysOld = values.daysOld ? "" : "This Field is Required.";
    temp.pounds = values.pounds ? "" : "This Field is Required.";
    temp.pickUp = values.pickUp ? "" : "This Field is Required.";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("Hi");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          variant="outlined"
          label="Food Name"
          value={values.foodName}
          style={{ margin: "1rem" }}
          name="foodName"
          onChange={handleInputChange}
          {...(errors.foodName && {
            error: true,
            helperText: errors.foodName,
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
        />
        <TextField
          variant="outlined"
          label="Days available for Pickup"
          type="number"
          name="pickUp"
          style={{ margin: "1rem" }}
          value={values.pickUp}
          onChange={handleInputChange}
          {...(errors.pickUp && {
            error: true,
            helperText: errors.pickUp,
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

export default AddFoodForm;
