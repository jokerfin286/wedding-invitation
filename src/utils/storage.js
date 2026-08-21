const KEY='wedding-invitation-rsvp-v1';
export async function submitRSVP(data){const current=JSON.parse(localStorage.getItem(KEY)||'[]');current.push({...data,submittedAt:new Date().toISOString()});localStorage.setItem(KEY,JSON.stringify(current));return {ok:true}}
