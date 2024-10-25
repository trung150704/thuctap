import { TVN,TNB} from './data.js'
import { TourNB,TourVN} from './data.js'


const hien1TVN = (coso:TVN) =>{
    return `<div>
     <img src="${coso.hinh}">
     <h4>${coso.ten} </h4>
     <p>${coso.duration}</p>
     <p>${coso.start}</p>
     <p>${coso.price}</p>
    </div>`;
}
export const showlist = ()=>{
    const html_arr =TourVN.map(hien1TVN);
    return html_arr.join("");
}
const hien1TNB = (coso:TNB) =>{
    return `<div>
     <img src="${coso.hinh}">
     <h4>${coso.ten} </h4>
     <p>${coso.duration}</p>
     <p>${coso.start}</p>
     <p>${coso.price}</p>
    </div>`;
}
export const showlistcoso = ()=>{
    const html_arr =TourNB.map(hien1TNB);
    return html_arr.join("");
}


