import * as React from "react";
import {
  Button,
  EditButton,
  List,
  RecordContextProvider,
  Title,
  useGetResourceLabel,
  useListContext,
} from "react-admin";
import inflection from "inflection";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const CategoryList = () => <CategoryGrid />;

const CategoryGrid = () => {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const [data, setData] = React.useState([]);
  const getResourceLabel = useGetResourceLabel();

  const getUsers = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}/users`,
      { headers: { Authorization: `Bearer ${cookies.get("_user")}` } }
    );
    setData(data);
  };

  const createAdmin = async (_id) => {
    const { data } = await axios.put(
      `${import.meta.env.VITE_BASE_API_URL}/users/create/admin/${_id}`,
      {},
      { headers: { Authorization: `Bearer ${cookies.get("_user")}` } }
    );
    setData(data);
  };

  const removeAdmin = async (_id) => {
    const { data } = await axios.put(
      `${import.meta.env.VITE_BASE_API_URL}/users/remove/admin/${_id}`,
      {},
      { headers: { Authorization: `Bearer ${cookies.get("_user")}` } }
    );
    setData(data);
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <Grid container spacing={2} sx={{ marginTop: "1em" }}>
      <Title defaultTitle={getResourceLabel("users", 2)} />
      {data?.map(
        (record) =>
          user?._id !== record?._id && (
            <RecordContextProvider key={record._id} value={record}>
              <Grid key={record._id} xs={12} sm={6} md={4} lg={3} xl={2} item>
                <Card>
                  {/* <CardMedia
                image={`https://marmelab.com/posters/${record.name}-1.jpeg`}
                sx={{ height: 140 }}
              /> */}
                  <CardContent sx={{ paddingBottom: "0.5em" }}>
                    <Typography variant="h5" component="h2" align="center">
                      {inflection.humanize(record.name)}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h2"
                      align="center"
                    >
                      {inflection.humanize(record.email)}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h2"
                      align="center"
                    >
                      {record.role}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      // ".MuiCardActions-spacing": {
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      // },
                    }}
                  >
                    {record.role.includes("admin") ? (
                      <Button
                        variant="contained"
                        onClick={() => removeAdmin(record._id)}
                      >
                        Remove Admin
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => createAdmin(record._id)}
                      >
                        Create Admin
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            </RecordContextProvider>
          )
      )}
    </Grid>
  );
};

export default CategoryList;
