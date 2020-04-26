import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps =  (index) => {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const  Menu =() => {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab value="one" label="addresss of  all  the clients here "   wrapped  {...a11yProps('one')}  />
          <Tab value="two" label="Item Two" {...a11yProps('two')} />
          <Tab value="three" label="Item Three" {...a11yProps('three')} />
          <Tab value="four" label="Item four" {...a11yProps('four')} />
          <Tab value="five" label="Item five" {...a11yProps('five')} />
          <Tab value="six" label="Item six" {...a11yProps('six')} />
          <Tab value="seven" label="Item seven" {...a11yProps('seven')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
       
      </TabPanel>
      <TabPanel value={value} index="two">
       
      </TabPanel>
      <TabPanel value={value} index="three">
       
      </TabPanel>
      <TabPanel value={value} index="four">
       
      </TabPanel>
      <TabPanel value={value} index="five">
       
      </TabPanel>
      <TabPanel value={value} index="six">
        
      </TabPanel>
      <TabPanel value={value} index="seven">
        Item Seven
      </TabPanel>
    </div>
  );
}
export  default Menu;