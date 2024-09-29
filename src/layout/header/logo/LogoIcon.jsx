import { Avatar, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "../../../routes/components/NavBarLink";
import ROUTES from "../../../routes/routesModel";

export default function LogoIcon() {
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <IconButton>
          <video
            width="70"
            height="70"
            autoPlay
            muted
            loop
            playsInline
            style={{ borderRadius: "50%" }}
          >
            <source src="/images/CardWeb.mp4" type="video/mp4" />
            Browser not supporting the requested video.
          </video>
        </IconButton>
      </NavBarLink>
    </>
  );
}
