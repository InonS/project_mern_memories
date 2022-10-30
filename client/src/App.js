import React from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './style';

const memories_img_src = "https://bit.ly/memories_image";

const App = () => {
    const classes = useStyles();

    return (
        <Container maxwidth="lg">
            <AppBar classname={classes.appBar} position="static" color="inherit">
                <Typography classname={classes.heading} variant="h2" align="center">Memories</Typography>
                <img classname={classes.image} src={ memories_img_src } alt="memories" height="300" />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;