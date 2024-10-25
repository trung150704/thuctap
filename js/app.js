import { TourNB, TourVN } from './data.js';
const hien1TVN = (coso) => {
    return `<div>
     <img src="${coso.hinh}">
     <h4>${coso.ten} </h4>
     <p>${coso.duration}</p>
     <p>${coso.start}</p>
     <p>${coso.price}</p>
    </div>`;
};
export const showlistVN = () => {
    const html_arr = TourVN.map(hien1TVN);
    return html_arr.join("");
};
const hien1TNB = (coso) => {
    return `<div>
     <img src="${coso.hinh}">
     <h4>${coso.ten} </h4>
     <p>${coso.duration}</p>
     <p>${coso.start}</p>
     <p>${coso.price}</p>
    </div>`;
};
export const showlistNB = () => {
    const html_arr = TourNB.map(hien1TNB);
    return html_arr.join("");
};
