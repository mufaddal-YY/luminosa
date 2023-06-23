"use client";
import React, { useState } from "react";
import CareerCard from "@components/Cards/CareerCard";
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

const Openings = () => {
  return (
    <section className="section-sp4 bg-gray-light">
      <div className="container">
        <h4>Current Openings</h4>
        <h6>
          Want to be the part of our team? If you have following skills, feel
          free to connect with us.
        </h6>

        <div className="p-10">
          <CareerCard />
        </div>
        <div className="p-10">
          <CareerCard />
        </div>

        <div className="feature-bx1 p-30">
          <h6 className="m-t20 m-b20">
            Or fill out the following form and we will get in touch with you.
          </h6>
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
                    onChange={(e) => setFirstName(e.target.value)}
                    label="Full Name"
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
                    label="Phone Number"
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
                    label="email"
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
                    label="Age"
                    name="lastName"
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
                    label="Educational Qualification"
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
                    onChange={(e) => setFirstName(e.target.value)}
                    label="Experience"
                    name="firstName"
                  />
                </Stack>
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
                        theme.palette.mode === "light"
                          ? "common.white"
                          : "main",
                    },
                  }}>
                  Submit
                </Button>
              </Stack>
            </Stack>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Openings;
