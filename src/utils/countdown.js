export function getCountdown(target){const diff=new Date(target).getTime()-Date.now();if(diff<=0)return null;return {days:Math.floor(diff/86400000),hours:Math.floor(diff%86400000/3600000),minutes:Math.floor(diff%3600000/60000),seconds:Math.floor(diff%60000/1000)}}
export function pad(n){return String(n).padStart(2,'0')}
