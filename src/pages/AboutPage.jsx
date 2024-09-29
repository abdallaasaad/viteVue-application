import { Container, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";
import { List, ListItem, ListItemText, Box } from "@mui/material";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Container
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Container
          maxWidth="md"
          sx={{ bgcolor: "#fff", p: 4, mt: 5, borderRadius: 2, boxShadow: 3 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "#ff7b54", mb: 2 }}
          >
            About My Card Website
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to <strong>My Card Website</strong> – your ultimate platform
            for creating, managing, and sharing digital business cards. Whether
            you're a business owner, freelancer, or someone who simply wants to
            present their professional profile in style, our website is designed
            to make your experience seamless and efficient.
          </Typography>

          <Typography variant="h4" sx={{ color: "#ff7b54", mt: 4 }}>
            Features
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Browse a World of Cards"
                secondary="Explore an extensive collection of business cards crafted by users from diverse industries. Browse as a guest, or sign up for more tailored options that fit your preferences."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Show Your Appreciation"
                secondary="See a card you like? Click the heart icon to save it to your favorites. Discover and connect with cards that catch your eye, all while building your personalized collection."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Create & Customize Your Cards"
                secondary="Registered users can create stunning cards with ease. Add custom images, contact details, and business information to reflect your brand. Editing is just a click away to keep your card fresh."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Detailed Card View"
                secondary="Click on any card for an expanded view that includes all the essential details – from images and contact information to business numbers."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Effortless Navigation"
                secondary="Our user-friendly interface lets you switch between sections effortlessly, whether you want to check out your favorites, learn more about us, or manage your profile."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Register & Personalize Your Experience"
                secondary="Sign up for an account to unlock the full potential of our platform. Create and edit cards, save your favorite designs, and more. Already have an account? Simply log in to continue building your network."
              />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ color: "#ff7b54", mt: 4 }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to make professional networking effortless by
            offering a digital space to create, share, and manage your business
            cards online. With a focus on simplicity and ease of use, we aim to
            empower you to make strong connections, whether you're networking in
            person or digitally.
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for choosing <strong>My Card Website</strong> as your
            trusted solution for digital business cards!
          </Typography>
        </Container>
        <IconButton
          sx={{
            width: "600px",
            height: "300px",
            borderRadius: "0px",
          }}
        >
          <video
            width="600"
            height="300"
            autoPlay
            muted
            loop
            playsInline
            style={{ borderRadius: "10%" }}
          >
            <source src="/images/CardWeb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </IconButton>
      </Container>
    </Container>
  );
}
