import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";

const faq = [
    {
        id: 1,
        title: 'General Inquiries ?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, debitis distinctio doloremque, earum explicabo fuga impedit iusto natus nulla obcaecati omnis placeat quod reiciendis repudiandae, rerum suscipit velit. Eos esse eum excepturi explicabo molestias ratione suscipit ullam voluptates.'
    },
    {
        id: 2,
        title: 'How To Use ?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, debitis distinctio doloremque, earum explicabo fuga impedit iusto natus nulla obcaecati omnis placeat quod reiciendis repudiandae, rerum suscipit velit. Eos esse eum excepturi explicabo molestias ratione suscipit ullam voluptates.'
    },
    {
        id: 3,
        title: 'Shipping & Delivery ?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, debitis distinctio doloremque, earum explicabo fuga impedit iusto natus nulla obcaecati omnis placeat quod reiciendis repudiandae, rerum suscipit velit. Eos esse eum excepturi explicabo molestias ratione suscipit ullam voluptates.'
    },
    {
        id: 4,
        title: 'Additional Information ?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, debitis distinctio doloremque, earum explicabo fuga impedit iusto natus nulla obcaecati omnis placeat quod reiciendis repudiandae, rerum suscipit velit. Eos esse eum excepturi explicabo molestias ratione suscipit ullam voluptates.'
    },
    {
        id: 5,
        title: 'Return Policy ?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, debitis distinctio doloremque, earum explicabo fuga impedit iusto natus nulla obcaecati omnis placeat quod reiciendis repudiandae, rerum suscipit velit. Eos esse eum excepturi explicabo molestias ratione suscipit ullam voluptates.'
    },
];

const Faq = () => {
    const [expanded, setExpanded] = React.useState(0);

    function faqHandler(number) {
        setExpanded(number);
    }

    return (
        <Grid className="prdTabContent faqContent">
            {faq.map(item => (
                <div key={item.id}>
                    <Button fullWidth onClick={() => faqHandler(item.id)}>{item.title}
                        <i className="ti-plus"></i>
                        </Button>
                    <Collapse className="faqBodyText" in={expanded === item.id} timeout="auto" unmountOnExit>
                        <p>{item.body}</p>
                    </Collapse>
                </div>
            ))}
        </Grid>
    )
};

export default Faq;