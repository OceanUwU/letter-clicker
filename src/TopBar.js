import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, Tooltip } from '@material-ui/core';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30,
        padding: 4,
        background: 'lightgrey',
    },

    button: {
        height: '100%',
    },
});

const sectionButtons = [
    {
        name: "Letters",
        icon: FontDownloadIcon,
    },
    {
        name: "Settings",
        icon: SettingsIcon,
    }
];

export default function TopBar(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {sectionButtons.map((sectionButton, index) => (
                <Tooltip title={sectionButton.name} key={index}>
                    <span> {/* lets the tooltip work on disabled buttons */}
                        <IconButton size="small" className={classes.button} disabled={props.section == index} onClick={() => props.setSection(index)}>
                            <sectionButton.icon />
                        </IconButton>
                    </span>
                </Tooltip>
            ))}
        </div>
    );
}