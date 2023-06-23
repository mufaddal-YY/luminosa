"use client";
import React, { useState } from "react";

import {
  Grid,
  Stack,
  TextField,
  Typography,
  Autocomplete,
  Checkbox,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";

const commonStyles = css({
  "& label.Mui-focused": {
    color: "#3e3e3e",
    borderRadius: "8px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#3e3e3e",
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#3e3e3e",
      borderRadius: "8px",
    },
    "&:hover fieldset": {
      borderColor: "#3e3e3e",
      borderRadius: "8px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3e3e3e",
      borderRadius: "8px",
    },
  },
});
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CssTextField = styled(TextField)(commonStyles);

const CssAutocomplete = styled(Autocomplete)(commonStyles);

const Form = () => {
  const [gender, setGender] = useState(null);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="container">
      <div className="bg-white radius-md p-20">
        <p>
          Simply fill out the form and one of our Luminosa’s experts will get in
          touch with you shortly to find out how our solutions, products, and
          services can help you accelerate your digital transformation.
        </p>
        <li>Answer within 2 working days</li>
        <li>Always contact with a specialist</li>

        <form className="m-t30" action="">
          <Stack spacing={1}>
            <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
              <Stack
                spacing={1}
                mb={3}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CssTextField
                  onChange={(e) => setBio(e.target.value)}
                  label="How can we help you?"
                  name="bio"
                />
              </Stack>
            </Stack>
            <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
              <Stack
                spacing={1}
                mb={3}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CssTextField
                  onChange={(e) => setBio(e.target.value)}
                  label="Description"
                  name="bio"
                />
              </Stack>
            </Stack>
            <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
              <Stack
                spacing={1}
                mb={3}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CssTextField
                  onChange={(e) => setFirstName(e.target.value)}
                  label="First Name"
                  name="firstName"
                />
              </Stack>

              <Stack
                spacing={1}
                mb={3}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CssTextField
                  onChange={(e) => setLastName(e.target.value)}
                  label="Last Name"
                  name="lastName"
                />
              </Stack>
            </Stack>
            <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
              <Stack
                spacing={1}
                mb={3}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CssTextField
                  onChange={(e) => setFirstName(e.target.value)}
                  label="Phone Number"
                  name="firstName"
                />
              </Stack>

              <Stack
                spacing={1}
                mb={3}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CssTextField
                  onChange={(e) => setLastName(e.target.value)}
                  label="Job Title"
                  name="lastName"
                />
              </Stack>
            </Stack>
            <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
              <Stack
                spacing={1}
                mb={3}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CssTextField
                  onChange={(e) => setFirstName(e.target.value)}
                  label="Company"
                  name="firstName"
                />
              </Stack>

              <Stack
                spacing={1}
                mb={3}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Autocomplete
                  options={[
                    { name: "Option 1" },
                    { name: "Option 2" },
                    { name: "Option 3" },
                  ]}
                  getOptionLabel={(option) => option.name}
                  value={gender}
                  onChange={(event, newValue) => setGender(newValue)}
                  renderInput={(params) => (
                    <CssTextField {...params} label="Region" />
                  )}
                />
              </Stack>
            </Stack>

            <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
              <Stack
                spacing={1}
                mb={3}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row", // Set flexDirection to "row"
                  alignItems: "center", // Align items vertically at the center
                }}>
                <Checkbox {...label} color="success" />
                <Typography>
                  Yes, I would like to receive emails about our products,
                  services, and events. I can unsubscribe at any time.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <p>
            By submitting this form, you confirm that you agree to the
            processing of your personal data by Luminos Technology as described
            in our privacy policy.*
          </p>
          <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
            <Stack
              spacing={1}
              mb={3}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row", // Set flexDirection to "row"
                alignItems: "center", // Align items vertically at the center
              }}>
              <Button
                size="medium"
                variant="soft"
                type="submit"
                sx={{
                  bgcolor: "text.primary",
                  borderRadius: "8px",
                  height: "50px",
                  my: 2,
                  color: (theme) =>
                    theme.palette.mode === "light" ? "common.white" : "main",
                  "&:hover": {
                    bgcolor: "text.primary",
                    color: (theme) =>
                      theme.palette.mode === "light" ? "common.white" : "main",
                  },
                }}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default Form;
