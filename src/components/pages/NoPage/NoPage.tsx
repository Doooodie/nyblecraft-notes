import { Container, Typography } from '@mui/material';

function NoPage() {
  return (
    <Container
      component='main'
      maxWidth='xl'
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 'auto' }}
    >
      <Typography component='h1' variant='h5' gutterBottom>
        404 😔
      </Typography>
    </Container>
  );
}

export default NoPage;
