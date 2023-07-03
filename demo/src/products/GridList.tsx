import * as React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const GridList = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(false);

  const getProducts = async () => {
    setIsloading(true);
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}/products`
    );
    setProducts(data);
    setIsloading(false);
  };

  React.useEffect(() => {
    getProducts();
  }, []);
  return isLoading ? (
    <LoadingGridList />
  ) : (
    <LoadedGridList products={products} />
  );
};

const useColsForWidth = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  // there are all dividers of 24, to have full rows on each page
  if (xl) return 8;
  if (lg) return 6;
  if (md) return 4;
  if (sm) return 3;
  return 2;
};

const times = (nbChildren: number, fn: (key: number) => any) =>
  Array.from({ length: nbChildren }, (_, key) => fn(key));

const LoadingGridList = () => {
  return (
    <ImageList rowHeight={180} sx={{ m: 0 }}>
      {times(20, (key) => (
        <ImageListItem key={key}>
          <Box bgcolor="grey.300" height="100%" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const LoadedGridList = ({ products }) => {
  const cols = useColsForWidth();

  return (
    <ImageList rowHeight={180} cols={cols} sx={{ m: 0 }}>
      {products?.map((record) => (
        <ImageListItem
          component={Link}
          key={record._id}
          to={`/products/${record._id}`}
        >
          <img src={record.image} alt="" />
          <ImageListItemBar
            title={record.name}
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GridList;
