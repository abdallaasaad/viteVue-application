import React from "react";
import { Box } from "@mui/material";
import ROUTES from "../../../routes/routesModel";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavBarItem from "../../../routes/components/NavBarItem";
import { useCurrentUser } from "../../../users/providers/UserProvider";
export default function LeftNavBar() {
  const { user } = useCurrentUser();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <LogoIcon />
      <Logo />
      <Box sx={{ marginLeft: '0rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {user && <NavBarItem to={ROUTES.CARDS} label={"Cards"} />}
        <NavBarItem to={ROUTES.ABOUT} label={"About"} />
        {user && <NavBarItem to={ROUTES.FAV_CARDS} label={"Favorites"} />}
        {user && user.isBusiness && (
          <NavBarItem to={ROUTES.MY_CARDS} label={"My Cards"} />
        )}
        {user && user.isAdmin && (
          <NavBarItem to={ROUTES.CRM_ADMIN} label={"CRM"} />
        )}
      </Box>
    </Box>
  );
}
