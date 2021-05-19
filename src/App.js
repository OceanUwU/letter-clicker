import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from './TopBar';
import Letters from './sections/Letters';
import Settings from './sections/Settings';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },

    topBar: {
        flex: '0 1 auto',
    },

    section: {
        flex: '1 1 auto',
        overflowY: 'auto',
    },
});

const sections = [
    Letters,
    Settings
];

export default function App() {
    const classes = useStyles();
    const [section, setSection] = React.useState(0);

    return (
        <div className={classes.root}>
            <span className={classes.topBar}>
                <TopBar section={section} setSection={setSection} />
            </span>

            <div className={classes.section}>
                {(S => <S />)(sections[section])}
            </div>
        </div>
    );
}