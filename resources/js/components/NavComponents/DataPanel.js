import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles/index';
import { Spinner } from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar/index';
import Tabs from '@material-ui/core/Tabs/index';
import Tab from '@material-ui/core/Tab/index';
import Typography from '@material-ui/core/Typography/index';
import Box from '@material-ui/core/Box/index';
import EnergyTableEditData from '../DataComponents/EnergyTableEditData'
import ProcessTableData from "../DataComponents/ProcessTableData";
import IntrantEditData from "../DataComponents/IntrantEditData";
import IntrantTransportForm from "../FormComponents/IntrantTransportForm";
import TransportEntry from "../FormComponents/Transport/TransportEntry";
import DechetDirect from "../FormComponents/DechetDirect";
import UtilisationFDV from "../FormComponents/UtilisationFDV";
import {CSSTransition} from "react-transition-group";
import '../../../sass/animation.css'
function DataPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="DataPanel"
            hidden={value !== index}
            id={`full-width-DataPanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

DataPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-DataPanel-${index}`,
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
                    <Tab label="Energie, Procedes, Dechets" {...a11yProps(0)} />
                    <Tab label="Intrant" {...a11yProps(1)} />
                    <Tab label="Intrant Transport" {...a11yProps(2)} />
                    <Tab label="Transport Employes" {...a11yProps(3)} />
                    <Tab label="Utilisation/FDV" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <DataPanel value={value} index={0} dir={theme.direction}>

                            <EnergyTableEditData/>


                </DataPanel>
                <DataPanel value={value} index={1} dir={theme.direction}>

                </DataPanel>
                <DataPanel value={value} index={2} dir={theme.direction}>
                    <IntrantEditData/>
                </DataPanel>
                <DataPanel value={value} index={3} dir={theme.direction}>
                    <IntrantTransportForm/>
                </DataPanel>
                <DataPanel value={value} index={4} dir={theme.direction}>
                    <TransportEntry/>
                </DataPanel>

            </SwipeableViews>
        </div>
    );
}