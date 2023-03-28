import { Box, Link, Container, Typography, Paper, Stack } from '@mui/material';
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
        <Stack alignItems='center'>
          <Item>
            <Typography component='span'>With ❤️ from </Typography>
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
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
