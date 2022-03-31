import {
  Button,
  Stack,
  Drawer,
  TextField,
  MenuItem,
  FormControl,
  Divider,
  AppBar,
  Alert,
  AlertTitle,
} from "@mui/material";
import { AccountTree } from "@mui/icons-material";
import React, { useState } from "react";

export default function DetailsDrawer({
  appDetails,
  isDrawerOpen,
  setDrawerOpen,
}) {
  const [activeBranch, setActiveBranch] = useState(appDetails.activeBranch);
  const [alertVisible, setAlertVisible] = useState(false);
  const showSuccessAlert = () => {
    setAlertVisible(true);
  };

  return (
    <Drawer
      anchor="right"
      PaperProps={{
        sx: {
          bgcolor: "#d8d8d8",
          width: "500px",
          height: "93vh",
          marginTop: "7vh",
        },
      }}
      open={isDrawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <div>
        <FormControl>
          <Stack spacing={10} sx={{ margin: "50px" }}>
            {appDetails.componentName}
            <Divider />

            <Stack direction="row">
              <AccountTree sx={{ paddingRight: "20px" }} />
              <TextField
                select
                label="Current Release Branch"
                size="small"
                sx={{ width: "300px" }}
                defaultValue={activeBranch}
                onChange={(e) => setActiveBranch(e.target.value)}
              >
                {appDetails.branches
                  ? appDetails.branches.map((branch) => {
                      return (
                        <MenuItem key={branch} value={branch}>
                          {branch}
                        </MenuItem>
                      );
                    })
                  : null}
              </TextField>
            </Stack>

            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                sx={{ width: "100px", bgcolor: "#324F46" }}
                onClick={() => showSuccessAlert()}
              >
                Save
              </Button>
              <Button
                variant="contained"
                sx={{ width: "100px", bgcolor: "#626464" }}
                onClick={() => setDrawerOpen(false)}
              >
                Close
              </Button>
            </Stack>

            {alertVisible && (
              <Alert
                severity="success"
                onClose={() => {
                  setAlertVisible(false);
                }}
              >
                <AlertTitle>Success</AlertTitle>
                <strong>{`${appDetails.componentName} updated successfully!`}</strong>
              </Alert>
            )}
          </Stack>
        </FormControl>
      </div>
    </Drawer>
  );
}
