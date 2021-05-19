export default function engineeringNotation(n) {
    if (n >= 1000000) {
        let nStr = n.toLocaleString('fullwide', {useGrouping: false}); //get number as string (avoiding scientific notation)
        let exponent = Math.floor((nStr.length - 1) / 3) * 3;
        let b = String(n / (10 ** exponent)).slice(0, 5);
        return `${b}e${exponent}`;
    } else
        return n.toLocaleString();
}