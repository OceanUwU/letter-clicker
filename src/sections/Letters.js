import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import engineeringNotation from '../engineeringNotation';
import getName from '../getName';
import letterCycle from '../cycles/letters';
import data from '../data';
import consts from '../consts';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },

    letters: {
        overflowY: 'scroll',
        height: '100%',
    },

    letter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& h5': {
            width: '15%',
        },
        '& button': {
            width: '20%',
        },
    },

    bottomBar: {
        height: 40,
        background: '#fcdcdc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    clock: {
        height: '100%',
    }
});

export default function Letters(props) {
    const classes = useStyles();
    const [letters, setLetters] = React.useState(data.l);
    const updateLetters = () => {
        setLetters(JSON.parse(JSON.stringify(data.l)));
    }

    React.useEffect(() => letterCycle(updateLetters), []);

    const buyLetter = n => {
        if (n == 0)
            void(0);
        else if (data.l[n-1] >= consts.letters.cost)
            data.l[n-1] -= consts.letters.cost;
        else
            return;
        data.l[n]++;
        updateLetters();
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.letters}>
                {letters.map((letter, index) => (
                    <div key={index} className={classes.letter}>
                        <Typography variant="h5">{getName(index)}</Typography>
                        <Typography>{engineeringNotation(letter)}</Typography>
                        <Button variant="contained" onClick={() => buyLetter(index)} disabled={index == 0 ? false : data.l[index-1] < consts.letters.cost}>{index == 0 ? 'Free' : `${consts.letters.cost}${getName(index-1)}`}</Button>
                    </div>
                ))}
            </div>

            <div className={classes.bottomBar}>
                <span>hi1</span>
                <svg className={classes.clock} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <ellipse strokeWidth="10" ry="45" rx="45" cy="50" cx="50" stroke="#000" fill="#ffffff"/>
                        <ellipse id="flash" ry="5" rx="5" cy="50" cx="50" strokeWidth="0" stroke="#000" fill="#000000"/>
                        <rect strokeWidth="10" height="1" width="1" y="13" x="49.5" stroke="#000" fill="#fff"/>
                        <rect transform="rotate(30, 70.5, 14.5)" strokeWidth="3" height="5" width="1" y="12" x="70" stroke="#000" fill="#426373"/>
                        <rect transform="rotate(60, 85.5, 29.5)" strokeWidth="3" height="5" width="1" y="27" x="85" stroke="#000" fill="#426373"/>
                        <rect strokeWidth="10" height="1" width="1" y="50" x="87" stroke="#000" fill="#fff"/>
                        <rect transform="rotate(120, 85.5, 70.5)" strokeWidth="3" height="5" width="1" y="68" x="85" stroke="#000" fill="#426373"/>
                        <rect transform="rotate(150, 70.5, 85.5)" strokeWidth="3" height="5" width="1" y="83" x="70" stroke="#000" fill="#426373"/>
                        <rect strokeWidth="10" height="1" width="1" y="87" x="49.5" stroke="#000" fill="#fff"/>
                        <rect transform="rotate(-150, 29.5, 85.5)" strokeWidth="3" height="5" width="1" y="83" x="30" stroke="#000" fill="#426373"/>
                        <rect transform="rotate(-120, 15.5, 70.5)" strokeWidth="3" height="5" width="1" y="68" x="15" stroke="#000" fill="#426373"/>
                        <rect strokeWidth="10" height="1" width="1" y="50" x="13" stroke="#000" fill="#fff"/>
                        <rect transform="rotate(-60, 15.5, 29.5)" strokeWidth="3" height="5" width="1" y="27" x="15" stroke="#000" fill="#426373"/>
                        <rect transform="rotate(-30, 30.5, 14.5)" strokeWidth="3" height="5" width="1" y="12" x="30" stroke="#000" fill="#426373"/>
                        <ellipse ry="5" rx="5" cy="50" cx="50" fill="#000000"/>
                        <rect id="clockhand" height="30" width="5" y="20" x="47.5" fill="#000000"/>
                    </g>
                </svg>
                <Button variant="contained" disableElevation>Buy: 1</Button>
            </div>
        </div>
    );
}