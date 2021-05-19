import emptyData from './emptyData';

let data;

if (localStorage.hasOwnProperty('savedLCdata'))
    data = {...emptyData, ...JSON.parse(localStorage.savedLCdata)};
else
    data = emptyData;

export default data;