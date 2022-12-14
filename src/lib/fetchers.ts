const baseURL = 'https://pokeapi.co/api/v2';

export const fetcher = (url: string) =>
  fetch(`${baseURL}${url}`).then((r) => r.json());

export const multiFetcher = (urls: string[]) => {
  const promises = urls.map((url) => fetcher(`/pokemon/${url}`));
  return Promise.all(promises);
};
