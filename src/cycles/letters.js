import data from '../data';
import consts from '../consts';
import clockCycle from './clock';
import save from '../save';

var cycling = false;
var updateLetters;

function letterTick() {
    for (let i in data.l) {
        if (i > 0)
            data.l[i-1] += data.l[i];
    }

    if (data.l[data.l.length-1] > 0)
        data.l.push(0);
    
    updateLetters();
    save();

    clockCycle(Date.now(), consts.letters.updateTime);
    setTimeout(letterTick, consts.letters.updateTime);
}

export default function letterCycle(setUpdateLetters) {
    updateLetters = setUpdateLetters;

    if (!cycling) {
        cycling = true;
        letterTick();
    }
}