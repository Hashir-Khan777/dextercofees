import * as React from "react";
import {
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
  const [data, setData] = React.useState([]);
  const getResourceLabel = useGetResourceLabel();

  const getUsers = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}/users`,
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
      {data?.map((record) => (
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
              </CardContent>
              {/* <CardActions
                sx={{
                  ".MuiCardActions-spacing": {
                    display: "flex",
                    justifyContent: "space-around",
                  },
                }}
              >
                <LinkToRelatedProducts />
                <EditButton />
              </CardActions> */}
            </Card>
          </Grid>
        </RecordContextProvider>
      ))}
    </Grid>
  );
};

export default CategoryList;
