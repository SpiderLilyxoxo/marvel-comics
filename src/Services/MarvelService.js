import { useHttp } from "../components/hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = "https://gateway.marvel.com:443/v1/public/";
    const _apiKey = "apikey=2dbf6b0d41c6b0778a89102291f3348c";
    const _baseOffset = 260;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(
                `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
            );
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = 0) => {
        const res = await request(
                `${_apiBase}comics?offset=${offset}&${_apiKey}`
            );
        return res.data.results.map(_transformComics);
    }

    const _transformCharacter = (char) => {

        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
    
    const _transformComics = (comic) => {

        return {
            id: comic.id,
            title: comic.title,
            thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension,
            price: comic.prices[0].price ? `${comic.prices[0].price}$` : "not available",
        }
    }

    return {loading, error, clearError, getAllCharacters, getCharacter, getAllComics}
}

export default useMarvelService