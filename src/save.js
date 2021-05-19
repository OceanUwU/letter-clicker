import data from './data';

export default function save() {
    localStorage.savedLCdata = JSON.stringify(data);
}