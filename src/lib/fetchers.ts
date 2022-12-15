const baseURL = 'https://pokeapi.co/api/v2'; // base URL for the PokeAPI

// fetches data from the given URL and returns it as JSON
export const fetcher = (url: string) =>
  fetch(`${baseURL}${url}`).then((r) => r.json());

export const multiFetcher = (urls: string[]) => {
  // map the URLs to promises that resolve to the JSON data
  const promises = urls.map((url) => fetcher(`/pokemon/${url}`));
  return Promise.all(promises);
};
