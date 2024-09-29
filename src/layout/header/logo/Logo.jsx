import React from "react";
import { Box, Typography } from "@mui/material";
import NavBarLink from "../../../routes/components/NavBarLink";
import ROUTES from "../../../routes/routesModel";

export default function Logo() {
  return (
    <NavBarLink to={ROUTES.ROOT}>
      <Box
        sx={{
          marginLeft: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Pacifico', cursive",
            fontSize: "36px",
            fontWeight: "bold",
            color: "#673AB7", // Purple for a fun look
            textShadow: "2px 2px #FFEB3B", // Yellow shadow for a playful effect
            transform: "rotate(-5deg)", // Tilt the letter for a dynamic feel
            marginRight: "0.5rem",
          }}
        >
          C
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Pacifico', cursive",
            fontSize: "36px",
            fontWeight: "bold",
            color: "#FF5722", // Bright orange
            transform: "rotate(5deg)", // Tilt the word "ards" for contrast
            textShadow: "2px 2px #03A9F4", // Blue shadow for depth
            letterSpacing: "3px",
          }}
        >
          ards
        </Typography>
      </Box>
    </NavBarLink>
  );
}
