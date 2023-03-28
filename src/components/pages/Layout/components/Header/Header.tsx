import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Link, Container, Divider } from '@mui/material';

import ElevationScroll from './ElevationScroll';
import TemporaryDrawer from './TemporaryDrawer';

function Header() {
  return (
    <ElevationScroll>
      <AppBar position='sticky' color='inherit'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Link
              variant='h6'
              component={RouterLink}
              to='/'
              underline='hover'
              color='inherit'
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Nyblecraft Notes
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <TemporaryDrawer />
          </Toolbar>
        </Container>
        <Divider />
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
