import NavBar from '../../components/navbar/navbar'
import {
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  ButtonGroup,
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import MyInput from '../../components/global/input'
import MyButton from '../../components/global/button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(4, 0),
    },
    border: {
      borderRadius: '25px',
    },
  })
)

const SignUp: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <NavBar />
      <Container maxWidth="sm" className={classes.root}>
        <Paper elevation={4} className={classes.paper}>
          <Grid container alignItems="center" direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5">Sign Up</Typography>
            </Grid>
            <Grid item>
              <ButtonGroup variant="outlined">
                <Button size="large">Teacher</Button>
                <Button size="large">School</Button>
                <Button size="large">Parent</Button>
              </ButtonGroup>
            </Grid>
            <Grid item>
              <form>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <MyInput pname="fullname" plabel="Full Name" ptype="text" />
                  </Grid>
                  <Grid item>
                    <MyInput
                      pname="emailaddress"
                      plabel="Email Address"
                      ptype="email"
                    />
                    <MyInput
                      pname="phonenumber"
                      plabel="Phone Number"
                      ptype="text"
                    />
                  </Grid>
                  <Grid item>
                    <MyInput
                      pname="password"
                      plabel="Password"
                      ptype="password"
                    />
                  </Grid>
                  <Grid item>
                    <MyInput
                      pname="confirm"
                      plabel="Confiirm Password"
                      ptype="password"
                    />
                  </Grid>
                  <Grid item>
                    <MyButton pto="/register" ptext="SignUp" />
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item>
              <Typography>Already Have an account? Login</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}

export default SignUp
