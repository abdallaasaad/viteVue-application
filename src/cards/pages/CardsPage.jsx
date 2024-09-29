import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";
import axios from "axios";
import CardsFeedback from "../components/CardsFeedback";
import { useSnack } from "../../providers/SnackbarProvider";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { Box, Typography } from "@mui/material";

export default function CardsPage() {
  const { user } = useCurrentUser();

  const {
    cards,
    error,
    isLoading,
    getAllCards,
    handleDelete,
    handleLike,
    filteredCards,
  } = useCards();

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div>
      <Box
        sx={{
          padding: "1rem",
          textAlign: "center",
          backgroundColor: "#f5f5f5", // A light gray background
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "1.5rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#4A707A", // Deep blue for title
            marginBottom: "0.5rem",
          }}
        >
          Cards
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#757575", // Gray for subtitle
          }}
        >
          On this page you can find all business cards from all categories
        </Typography>
      </Box>
      <CardsFeedback
        cards={filteredCards}
        isLoading={isLoading}
        error={error}
        handleDelete={handleDelete}
        handleLike={handleLike}
      />
      {user && <AddNewCardButton />}
    </div>
  );
}
