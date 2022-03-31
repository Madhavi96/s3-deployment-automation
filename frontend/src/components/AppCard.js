import { CardContent, Card, Grid, Stack, CardActionArea } from "@mui/material";
import { useState } from "react";
import DetailsDrawer from "./DetailsDrawer";
import React from "react";

export default function AppCard({ details, app }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState({});

  return (
    <React.Fragment>
      <Grid item xs={10} sm={4} md={2}>
        <Card
          variant="outlined"
          sx={{
            bgcolor: "#030707",
            width: "15vw",
            color: "#fff",
          }}
        >
          <CardContent>{app}</CardContent>
          <Stack spacing={2} sx={{ padding: 1 }}>
            {details.map((component) => {
              return (
                <Card
                  onClick={(event) => {
                    setDrawerOpen(true);
                    setSelectedComponent(component);
                  }}
                  sx={{
                    bgcolor: "#7B7E7D",
                    padding: 1,
                  }}
                >
                  <CardActionArea> {component.componentName} </CardActionArea>
                </Card>
              );
            })}{" "}
          </Stack>
        </Card>
      </Grid>
      <DetailsDrawer
        appDetails={selectedComponent}
        isDrawerOpen={isDrawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
    </React.Fragment>
  );
}
