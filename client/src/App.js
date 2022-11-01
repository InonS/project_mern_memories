import {React, useEffect} from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import {useDispatch} from 'react-redux'; // for dispatching an action

import {getPosts} from './actions/posts';

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './style';

const memories_img_src = "https://bit.ly/memories_image";

const App = () => {
    const classes = useStyles();
    
    const dispatch = useDispatch(); // using hook
    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch])


    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={ memories_img_src } alt="memories" height="300" />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
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