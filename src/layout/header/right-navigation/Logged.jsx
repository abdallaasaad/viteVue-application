import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import { ManageAccounts } from "@mui/icons-material";


export default function Logged() {
  const navigaete = useNavigate();
  const { setUser, user } = useCurrentUser();
  function logOut() {
    localStorage.setItem("my token", undefined);
    setUser(null)
    navigaete(ROUTES.ROOT)


  }

  return (
    <Tooltip title="Open settings">
      <>
        <IconButton
          title="Logout"
          onClick={logOut}
          sx={{
            marginRight: "1em",
            marginLeft: "1em",
          }} >
          <LogoutIcon />
        </IconButton>
        <IconButton sx={{
          p: 0, display: "inline-flex", marginLeft: 2, marginRight: 2, marginTop: "-0.5em",
        }}>
          <Avatar alt="avatar" src="/images/avatar.png"
            sx={{
              marginTop: "0.5em",
            }} />
        </IconButton>
      </>
    </Tooltip>
  );
}
