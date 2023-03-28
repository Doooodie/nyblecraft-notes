import { useState } from 'react';
import {
  SwipeableDrawer,
  Box,
  IconButton,
  List,
  ListItem,
  Tooltip,
  Typography,
  ListItemText,
} from '@mui/material';
import { Settings, Close } from '@mui/icons-material';
import ThemeButtons from './ThemeButtons';

function TemporaryDrawer() {
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Tooltip title='Settings'>
        <IconButton color='inherit' size='large' onClick={() => setIsDrawerOpen(true)}>
          <Settings />
        </IconButton>
      </Tooltip>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor='right'
        open={isDrawerOpen}
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box width={300} role='presentation' textAlign='center' component='nav'>
          <List>
            <ListItem divider>
              <Box sx={{ flexGrow: 1 }}>
                <Typography>Settings</Typography>
              </Box>
              <IconButton onClick={() => setIsDrawerOpen(false)}>
                <Close />
              </IconButton>
            </ListItem>
            <ListItem dense>
              <ListItemText>Theme</ListItemText>
            </ListItem>
            <ListItem dense>
              <ThemeButtons />
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default TemporaryDrawer;
