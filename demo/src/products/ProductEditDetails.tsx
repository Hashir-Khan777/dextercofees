import * as React from "react";
import {
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
} from "react-admin";
import { InputAdornment, Grid } from "@mui/material";

export const ProductEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={24}>
      <TextInput source="name" fullWidth validate={req} />
    </Grid>
    {/* <Grid item xs={12} sm={4}>
      <NumberInput
        source="width"
        InputProps={{
          endAdornment: <InputAdornment position="start">cm</InputAdornment>,
        }}
        validate={req}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={4}>
      <NumberInput
        source="height"
        InputProps={{
          endAdornment: <InputAdornment position="start">cm</InputAdornment>,
        }}
        validate={req}
        fullWidth
      />
    </Grid> */}
    <Grid item xs={12} sm={4}>
      <NumberInput
        source="price"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        validate={req}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={4}>
      <NumberInput source="quantity" validate={req} fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextInput source="roastType" validate={req} fullWidth />
    </Grid>
  </Grid>
);

const req = [required()];
