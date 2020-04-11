import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import CommentIcon from '@material-ui/icons/Comment';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './Dashboard.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function Dashboard(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['Dashboard', 'Appointments'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <DashboardIcon /> : <ScheduleIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                {['Patients', 'Prescription'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <LocalHospitalIcon /> : <CommentIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            
            <List>
                {['Settings', 'Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <SettingsIcon /> : <ExitToAppIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Doctor's Dashboard
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div class="row">
                    <div class="col-md-3">
                        <div class="pending appointments">
                            <div class="row">
                                <div class="col-md-3">
                                    <h2 id="pending_appointments">5</h2>
                                </div>
                                <div class="col-md-9">
                                    <h4>Pending Appointments</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="today appointments">
                            <div class="row">
                                <div class="col-md-3">
                                    <h2 id="today_appointments">5</h2>
                                </div>
                                <div class="col-md-9">
                                    <h4>Today Appointments</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="total appointments">
                            <div class="row">
                                <div class="col-md-3">
                                    <h2 id="total_appointments">5</h2>
                                </div>
                                <div class="col-md-9">
                                    <h4>Total Appointments</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="cumulative appointments">
                            <div class="row">
                                <div class="col-md-3">
                                    <h2 id="cumulative_appointments">5</h2>
                                </div>
                                <div class="col-md-9">
                                    <h4>Total Patients</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='recent_appointments'>Recent Appointments</h3>
                    <div>
                        <table className='table_style'>
                            <tr>
                                <th>Sr. No</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Prescription</th>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>14-04-2020</td>
                                <td>7:00 AM</td>
                                <td>Michael Jordan</td>
                                <td>0123456789</td>
                                <th><button className='btn btn-info' >View</button></th>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>15-04-2020</td>
                                <td>8:00 AM</td>
                                <td>Michael Jackson</td>
                                <td>0123456789</td>
                                <th><button className='btn btn-info'>View</button></th>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>16-04-2020</td>
                                <td>9:00 AM</td>
                                <td>Michael Feleps</td>
                                <td>0123456789</td>
                                <th><button className='btn btn-info'>View</button></th>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>17-04-2020</td>
                                <td>10:00 AM</td>
                                <td>Michael Atherton</td>
                                <td>0123456789</td>
                                <th><button className='btn btn-info'>View</button></th>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>17-04-2020</td>
                                <td>11:00 AM</td>
                                <td>Michael Washington</td>
                                <td>0123456789</td>
                                <th><button className='btn btn-info'>View</button></th>
                            </tr>
                        </table>
                        <br/>
                        <a className='back_to_home' href="/home">Back to home</a>
                    </div>
                </div>
            </main>
        </div >
    );
}

Dashboard.propTypes = {
                /**
                 * Injected by the documentation to work in an iframe.
                 * You won't need it on your project.
                 */
                container: PropTypes.any,
};

export default Dashboard;
