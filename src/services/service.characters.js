import { defaultAxios } from "./config.js";
import { getUrls } from "./ApiUrls.js";

export const charactersService = {
    getCharacters
}

async function getCharacters(keyword) {
    let url = getUrls().characters

    if(keyword !== ''){
        url = url+'&nameStartsWith='+keyword
    }

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}