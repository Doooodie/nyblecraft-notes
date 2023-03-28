import { Box, Link, Container, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
  padding: theme.spacing(1),
}));

function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Item>
              <Link href='https://rs.school/js/' target='_blank' color='inherit' underline='none'>
                123
              </Link>
            </Item>
          </Grid>
          <Grid item sx={{ flexGrow: { sx: 0, sm: 1 } }} />
          <Grid item>
            <Item>
              <Typography component='span'>With love from</Typography>{' '}
              <Link
                href='https://github.com/Doooodie'
                target='_blank'
                color='inherit'
                underline='hover'
              >
                Doodie
              </Link>
              <Typography component='span'>, 2023</Typography>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
