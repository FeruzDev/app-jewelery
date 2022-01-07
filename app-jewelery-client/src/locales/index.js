import {RU} from './RU';
import {UZ} from './UZ';
import {SITE_LANG} from "../tools/constants";
import {EN} from "./EN";




export function getText(word){
    if (localStorage.getItem(SITE_LANG) === "uz"){
        return UZ[word];
    } else  if(localStorage.getItem(SITE_LANG) === "ru") {
       return RU[word];
    } else return EN[word]


}

export function getLang(){
    return localStorage.getItem(SITE_LANG);
}