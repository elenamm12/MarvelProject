
export const urlBase = "https://gateway.marvel.com/v1/public"

export const API_KEY = "8263b51648efde90dc96094e5ec95d6d"

export const getUrls = (data) => {
    let urls = {};

    urls.characters = "/characters?apikey=" + API_KEY;
    urls.comics = "/comics?apikey=" + API_KEY;
    urls.creators = "/creators?apikey=" + API_KEY;
    urls.events = "/events?apikey=" + API_KEY;
    urls.series = "/series?apikey=" + API_KEY;
    urls.stories = "/stories?apikey=" + API_KEY;

    return urls;
}