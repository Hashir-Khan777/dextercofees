import * as React from "react";
import {
  Create,
  FileInput,
  TabbedForm,
  TextInput,
  required,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

import { ProductEditDetails } from "./ProductEditDetails";
import axios from "axios";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";

const cookies = new Cookies();

const ProductCreate = () => {
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const navigate = useNavigate();

  const uploadImage = async (e: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", e);
    const { data } = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}/products/post/image`,
      formData,
      { headers: { Authorization: `Bearer ${cookies.get("_user")}` } }
    );
    setLoading(false);
    setImage(data.image);
  };

  const uploadProduct = async (e) => {
    await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}/products/create`,
      { ...e, image },
      { headers: { Authorization: `Bearer ${cookies.get("_user")}` } }
    );
    setOpenSnackbar(true);
    navigate("/products");
  };

  return (
    <Create>
      <TabbedForm onSubmit={uploadProduct}>
        <TabbedForm.Tab
          label="resources.products.tabs.image"
          sx={{ maxWidth: "40em" }}
        >
          {loading ? (
            <CircularProgress />
          ) : image ? (
            <img
              src={image}
              width="150px"
              height="150px"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <FileInput
              source="image"
              onChange={uploadImage}
              fullWidth
              validate={required()}
            />
          )}
        </TabbedForm.Tab>
        <TabbedForm.Tab
          label="resources.products.tabs.details"
          path="details"
          sx={{ maxWidth: "40em" }}
        >
          <ProductEditDetails />
        </TabbedForm.Tab>
        <TabbedForm.Tab
          label="resources.products.tabs.description"
          path="description"
        >
          <RichTextInput
            source="description"
            label=""
            validate={[required()]}
          />
        </TabbedForm.Tab>
      </TabbedForm>
      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        autoHideDuration={6000}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Product has been created!
        </Alert>
      </Snackbar>
    </Create>
  );
};

export default ProductCreate;
