import * as React from "react";
import {
  Datagrid,
  DateField,
  Edit,
  EditButton,
  Pagination,
  ReferenceManyField,
  ReferenceManyCount,
  required,
  TabbedForm,
  TextField,
  TextInput,
  useRecordContext,
  FileInput,
  Create,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

import { ProductEditDetails } from "./ProductEditDetails";
import CustomerReferenceField from "../visitors/CustomerReferenceField";
import StarRatingField from "../reviews/StarRatingField";
import Poster from "./Poster";
import { Product } from "../types";
import axios from "axios";
import { Alert, Box, CircularProgress, Snackbar } from "@mui/material";
import Cookies from "universal-cookie";
import { useNavigate, useParams } from "react-router";

const cookies = new Cookies();

const ProductTitle = () => {
  const record = useRecordContext<Product>();
  return record ? <span>Poster "{record.reference}"</span> : null;
};

const ProductEdit = () => {
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [form, setForm] = React.useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  const updateProduct = async (e) => {
    await axios.put(
      `${import.meta.env.VITE_BASE_API_URL}/products/update/${id}`,
      { ...e, image },
      { headers: { Authorization: `Bearer ${cookies.get("_user")}` } }
    );
    setOpenSnackbar(true);
    navigate("/products");
  };

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

  const getProduct = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}/products/${id}`
    );
    setForm(data);
    setImage(data.image);
  };

  React.useEffect(() => {
    getProduct();
  }, []);

  return (
    <Create title="Update Product">
      <TabbedForm onSubmit={updateProduct} defaultValues={form}>
        <TabbedForm.Tab
          label="resources.products.tabs.image"
          sx={{ maxWidth: "40em" }}
        >
          {loading ? (
            <CircularProgress />
          ) : image ? (
            <Box sx={{ position: "relative" }}>
              <FileInput
                source="image"
                sx={{
                  opacity: 0,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
                onChange={uploadImage}
                fullWidth
                validate={required()}
              />
              <img
                src={image}
                width="150px"
                height="150px"
                style={{ objectFit: "cover" }}
              />
            </Box>
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
            Product has been updated!
          </Alert>
        </Snackbar>
      </TabbedForm>
    </Create>
  );
};

const req = [required()];

export default ProductEdit;
