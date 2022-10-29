import React from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

const memories_img_src = "https://bit.ly/memories_image";

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={ memories_img_src } alt="memories" height="300" />
            </AppBar>

        </Container>
    );
}

export default App;