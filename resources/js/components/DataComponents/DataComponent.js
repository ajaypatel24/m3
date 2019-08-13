import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles/index';
import AppBar from '@material-ui/core/AppBar/index';
import Tabs from '@material-ui/core/Tabs/index';
import Tab from '@material-ui/core/Tab/index';
import Typography from '@material-ui/core/Typography/index';
import Box from '@material-ui/core/Box/index';
import EnergyTable from '../FormComponents/EnergyTable'
import ProcessTable from "../FormComponents/ProcessTable";
import IntrantEditData from "../DataComponents/IntrantEditData";
import IntrantTransportForm2 from "../FormComponents/IntrantTransportForm2";
import TransportEntry from "../FormComponents/Transport/TransportEntry";
import DechetDirect from "../FormComponents/DechetDirect";
import UtilisationFDV from "../FormComponents/UtilisationFDV";
function DataComponenet(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="DataComponenet"
            hidden={value !== index}
            id={`full-width-DataComponenet-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

DataComponenet.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-DataComponenet-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
}));

export default function DataComponent() {
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

                    aria-label="full width tabs example"
                >
                    <Tab label="Energie" {...a11yProps(0)} />
                    <Tab label="Procedes" {...a11yProps(1)} />
                    <Tab label="Intrant" {...a11yProps(2)} />
                    <Tab label="Intrant Transport" {...a11yProps(3)} />
                    <Tab label="Transport Employes" {...a11yProps(4)} />
                    <Tab label="Dechets" {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <DataComponenet value={value} index={0} dir={theme.direction}>
                    <EnergyTable />
                </DataComponenet>
                <DataComponenet value={value} index={1} dir={theme.direction}>
                    <ProcessTable />
                </DataComponenet>
                <DataComponenet value={value} index={2} dir={theme.direction}>
                    <IntrantEditData/>
                </DataComponenet>
                <DataComponenet value={value} index={3} dir={theme.direction}>
                    <IntrantTransportForm2/>
                </DataComponenet>
                <DataComponenet value={value} index={4} dir={theme.direction}>
                    <TransportEntry/>
                </DataComponenet>
                <DataComponenet value={value} index={5} dir={theme.direction}>
                    <DechetDirect />
                </DataComponenet>

            </SwipeableViews>
        </div>
    );
}