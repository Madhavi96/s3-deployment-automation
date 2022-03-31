import { Grid } from "@mui/material";
import AppCard from "./AppCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDeployments } from "../actions";

function AppCardGrid() {
  const dispatch = useDispatch();
  const { data: deployments } = useSelector((state) => state.deployments);

  const deploymentData = deployments.reduce((appGroup, component) => {
    const { appName } = component;
    appGroup[appName] = appGroup[appName] ?? [];
    appGroup[appName].push(component);
    return appGroup;
  }, {});

  useEffect(() => {
    dispatch(loadDeployments());
  }, [dispatch]);

  return (
    <div id="card-grid">
      <Grid container spacing={4} justify="center">
        {Object.entries(deploymentData).map(([app, components]) => {
          return <AppCard details={components} app={app} />;
        })}
      </Grid>
    </div>
  );
}

export default AppCardGrid;
