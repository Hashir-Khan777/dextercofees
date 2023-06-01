import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Reviews from "./components/reviews";
import Faq from "./components/faq";
import ReviewForm from "./components/reviewForm";
import Description from "./components/description";

import './style.scss';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

const ProductTabMenu = ({item}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid className="productTabMenu product-tab-area">
            <Tabs value={value}
                  classes={{
                      root: 'prdTab',
                      indicator: 'prdTabIndicator'
                  }}
                  onChange={handleChange}
                  aria-label="simple tabs example">
                <Tab label="Description"/>
                <Tab label="FAQ"/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <Grid>
                    <Description/>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Faq/>
            </TabPanel>
        </Grid>
    )
};

export default ProductTabMenu;