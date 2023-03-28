import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';

function Home() {
  const theme = useTheme();
  const screenUpMedium = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container component='main' maxWidth='xl' sx={{ mt: 10, mb: 10 }}>
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        rowSpacing={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} md={5}>
          <Stack alignItems='center' spacing={4}>
            <Typography
              variant='h2'
              component='h1'
              sx={{ textAlign: { xs: 'center', md: 'left' }, fontWeight: 400 }}
            >
              1
            </Typography>
            <Typography
              variant='h5'
              component='h2'
              color='text.secondary'
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              2
            </Typography>
            <Button
              component={RouterLink}
              to='/drive'
              variant='contained'
              size='large'
              fullWidth={screenUpMedium}
              sx={{ minWidth: 300 }}
            >
              3
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7} />

        <Grid item xs={12}>
          <Stack alignItems='stretch' spacing={4}>
            <Divider />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
