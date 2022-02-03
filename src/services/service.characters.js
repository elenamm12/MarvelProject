import { defaultAxios } from "./config.js";
import { getUrls } from "./ApiUrls.js";

export const charactersService = {
    getCharacters
}

async function getCharacters() {
    const url = getUrls().characters

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}