import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, TextField, Divider } from '@material-ui/core';
import data from '../data';
import emptyData from '../emptyData';
import consts from '../consts';
import showDialog from '../Dialog/show';
import { BorderAllTwoTone } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {

    },
});

export default function Settings() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" onClick={() => showDialog({
                title: 'Backing up data:',
                description: 'Copy this backup code and save it somewhere, or click \"save\" to download it as a .txt file',
                buttonText: 'Save',
                buttonAction: () => {
                    var element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(btoa(JSON.stringify(data))));
                    element.setAttribute('download', `LCsave${new Date().toISOString()}.txt`);
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                }
            }, <textarea>{btoa(JSON.stringify(data))}</textarea>)}>Back up data</Button>

            
            <Button variant="contained" onClick={() => {
                let backup = '';

                showDialog({
                    title: 'Importing backup:',
                    description: 'Paste a backup code here and click \"Import\" to replace your current save with the one in the backup.',
                    buttonText: 'Import',
                    buttonAction: () => {
                        localStorage.savedLCdata = JSON.stringify(atob(backup));
                        window.location.reload();
                    }
                }, <TextField label="Backup code" variant="outlined" value={backup} onChange={event => backup = event.target.value} />);
            }}>Import backup</Button>

            <Button variant="contained" onClick={() => showDialog({
                title: 'Really delete all data?',
                description: 'Unless you\'ve backed up your data, you won\'t be able to come back to your current progress. Are you sure?',
                buttonText: 'Delete',
                buttonAction: () => {
                    delete localStorage.savedLCdata;
                    window.location.reload();
                }
            })}>Reset all data</Button>

            <Divider />

            <Button variant="contained" href="https://github.com/OceanUwU/letter-clicker">GitHub</Button>
            <Button variant="contained" href="https://www.guilded.gg/i/XENaA7op">Guilded</Button>
        </div>
    )
};