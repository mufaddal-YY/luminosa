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
const ContactHero = () => {
  return (
    <section className="section-sp4">
      <section className="container">
        <div className="d-flex flex-wrap justify-content-between m-b20">
          <div className="m-b0">
            <h3 className="fw4 m-b20">Get in touch with us!</h3>
          </div>
        </div>
        <hr className="borderSmall" />
        <div className="feature-bx1 p-30">
          <h4 className="fw4 m-b10">Do You Have Any Questions?</h4>
          <p>Feel free to connect with us!</p>

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
                    label="Message"
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
      </section>
    </section>
  );
};

export default ContactHero;
