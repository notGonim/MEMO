import { AppBar, Grid, Grow, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Form } from './components/form/Form';
import { Posts } from './components/posts/Posts';


function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" >
        <Typography variant="h2" align="center"  >Memories</Typography>
      </AppBar>
      <Grow in>
        <Container >
          <Grid container alignItems="stretch" spacing={4} justify="space-between" >
            <Grid item xs={12} sm={7} >
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4} >
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>


  );
}

export default App;
