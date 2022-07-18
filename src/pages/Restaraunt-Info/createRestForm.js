import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { v4 } from "uuid";
import { API } from "aws-amplify";
import { createRestaurant } from "../../../src/graphql/mutations.js";
import Geocode from "react-geocode";
import AWS from 'aws-sdk'

const S3_BUCKET ='trefos4fe2ddf357554017968f953b6f1e7bed170357-dev';
const REGION ='us-east-1';


AWS.config.update({
    accessKeyId: 'AKIAQN6XYQQF3U4VKBL2',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

const initialValues = {
  id: "",
  name: "",
  address: "",
  phone: "",
  email: "",
  image: ""
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

  Geocode.setApiKey("AIzaSyDACU97eVz7BeST6TBxUUJh1GaH36O1kTA");
  Geocode.setLanguage("en");

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
    temp.image = values.image ? "" : "This Field is Required.";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const handleSubmit = async (e) => {
    let url = stringUrl3(stringUrl2("https://trefos4fe2ddf357554017968f953b6f1e7bed170357-dev.s3.amazonaws.com/" + values.image));
    e.preventDefault();
    if (validate()) {
      let latitude = 0;
      let longitude = 0;
      await Geocode.fromAddress(values.address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          latitude = lat;
          longitude = lng;
        },
        (error) => {
          console.error(error);
        }
      );
      await API.graphql({
        query: createRestaurant,
        variables: {
          input: {
            id: v4(),
            name: stringUrl(values.name),
            address: values.address,
            phone: values.phone,
            email: values.email,
            latitude: latitude,
            longitude: longitude,
            type: "restaraunt",
            pounds: 0.0,
            image: url,
          },
        },
      });
      props.onAddRest();
      setValues(initialValues);
      setErrors({});
    }
  };

  function stringUrl(string) {
    if (string.includes(" ")) {
      return string.replaceAll(" ", "%20");
    } else {
      return string;
    }
  }
  function stringUrl2(string) {
    if (string.includes(" ")) {
      return string.replaceAll(" ", "");
    } else {
      return string;
    }
  }
  function stringUrl3(string) {
    if (string.includes("C:\\fakepath\\")) {
      return string.replaceAll("C:\\fakepath\\", "");
    } else {
      return string;
    }
  }

  const [progress , setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange1 = (e) => {
    setSelectedFile(e.target.files[0]);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const uploadFile = (file) => {

      const params = {
          ACL: 'public-read',
          Body: file,
          Bucket: S3_BUCKET,
          Key: file.name
      };

      myBucket.putObject(params)
          .on('httpUploadProgress', (evt) => {
              setProgress(Math.round((evt.loaded / evt.total) * 100))
          })
          .send((err) => {
              if (err) console.log(err)
          })
  }


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
        {/* <Upload /> */}
        <input 
          name="image" 
          type="file" 
          value={values.image}
          onChange={handleInputChange1}
          {...(errors.email && {
            error: true,
            helperText: errors.email,
          })}
        />
        <br />
        <ThemeProvider theme={theme}>
          <Button color="neutral" variant="contained" type="submit" onClick={() => uploadFile(selectedFile)}>
            Save
          </Button>
        </ThemeProvider>
      </div>
    </form>
  );
}

export default CreateRestForm;
