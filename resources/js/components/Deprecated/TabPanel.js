import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EnergyTable from '../FormComponents/EnergyTable'
import ProcessTable from "../FormComponents/ProcessTable";
import IntrantEditData from "../DataComponents/IntrantEditData";
import IntrantTransportForm from "../FormComponents/IntrantTransportForm";
import TransportEntry from "../FormComponents/Transport/TransportEntry";
import DechetDirect from "../FormComponents/DechetDirect";
import UtilisationFDV from "../FormComponents/UtilisationFDV";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChangeIndex(index) {
        setValue(index);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Energie" {...a11yProps(0)} />
                    <Tab label="Procedes" {...a11yProps(1)} />
                    <Tab label="Intrant" {...a11yProps(2)} />
                    <Tab label="Intrant Transport" {...a11yProps(3)} />
                    <Tab label="Transport Employes" {...a11yProps(4)} />
                    <Tab label="Dechets" {...a11yProps(5)} />
                    <Tab label="Utilisation/FDV" {...a11yProps(6)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <EnergyTable />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <ProcessTable />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <IntrantEditData/>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <IntrantTransportForm/>
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <TransportEntry/>
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                    <DechetDirect />
                </TabPanel>
                <TabPanel value={value} index={6} dir={theme.direction}>
                    <UtilisationFDV/>
                </TabPanel>

            </SwipeableViews>
        </div>
    );
}