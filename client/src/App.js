import { AppBar, Grid, Grow, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Form } from './components/form/Form';
import { Posts } from './components/posts/Posts';
import memo from "./utils/img/memories.jpg"
import useStyle from './Styles'

function App() {

  const classes = useStyle()

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar} >
        <Typography variant="h2" align="center" className={classes.heading} >Memories</Typography>
        <img src={memo} alt="memmo icon" height="60" className={classes.image} />
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
