import React, { useState } from "react";
import { useTheme } from "../../../providers/CustomThemeProvider";
import { Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from "./SearchBar";
import { ManageAccounts } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

const showSearchOn = [ROUTES.CARDS, ROUTES.FAV_CARDS, ROUTES.MY_CARDS]

export default function RightNavbar() {
  const { user } = useCurrentUser();
  const { isDark, toggleDarkMode } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
    handleSearchClose();
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "inline-flex" },
        alignItems: "center",
      }}
    >

      {
        showSearchOn.some(route => location.pathname.endsWith(route)) &&
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isSearchOpen ? (
            <SearchBar onSearch={handleSearch} />
          ) : (
            <IconButton title="Search" onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          )}
        </Box>
      }

      {user && <IconButton title="Edit Profile" sx={{ ml: 1 }} onClick={() => navigate(ROUTES.EDIT_USER)} >
        <ManageAccounts />
      </IconButton>}
      <IconButton title="Accessabily" sx={{ ml: 1 }} onClick={toggleDarkMode}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      {user ? <Logged /> : <NotLogged />}

    </Box>
  );
}
