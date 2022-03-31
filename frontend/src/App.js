import {
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SearchOutlined, EngineeringOutlined } from "@mui/icons-material";
import AppCardGrid from "./components/AppCardGrid";
import React from "react";

export default class App extends React.Component {
  render() {
    //TODO: SETUP LOGIN AUTHENTICATION
    return (
      <div className="App">
        <Container
          sx={{
            bgcolor: "#030707",
            height: "10vh",
            margin: 0,
            padding: "10px",
          }}
          maxWidth={false}
        >
          <Stack direction="row">
            <EngineeringOutlined
              fontSize="large"
              sx={{ color: "#545555", paddingRight: "10px" }}
            />

            <Typography
              variant="h6"
              component="h2"
              sx={{ color: "#fff", paddingRight: "100px" }}
            >
              Supplier Suite Deployments
            </Typography>

            <TextField
              variant="outlined"
              id="filled-search"
              type="search"
              size="small"
              placeholder="filter by application"
              sx={{ color: "#fff" }}
              InputProps={{
                style: { color: "#fff", borderColor: "#fff" },
                endAdornment: (
                  <IconButton sx={{ color: "#545555" }}>
                    <SearchOutlined />
                  </IconButton>
                ),
              }}
            />
          </Stack>
        </Container>
        <Container
          sx={{
            bgcolor: "#545555",
            height: "93vh",
            margin: 0,
          }}
          maxWidth={false}
        >
          <AppCardGrid />
        </Container>
      </div>
    );
  }
}
