// This file is shared across the demos.

import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SortIcon from '@material-ui/icons/Sort';
import PersonIcon from '@material-ui/icons/Person';

export const mailFolderListItems = (
  <div>
    <Link to={`/`}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home page" />
      </ListItem>
    </Link>
    <Link to={`/aboutus`}>
      <ListItem button>
        <ListItemIcon>
          <AlternateEmailIcon />
        </ListItemIcon>
        <ListItemText primary="About us" />
      </ListItem>
    </Link>
    <Link to={`/charts`}>
      <ListItem button>
        <ListItemIcon>
          <SortIcon />
        </ListItemIcon>
        <ListItemText primary="Charts" />
      </ListItem>
    </Link>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Show profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Private message" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Favorite songs" />
    </ListItem>
  </div>
);
