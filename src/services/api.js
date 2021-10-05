export { NewsApi, SourceApi };

const createUrl = (endpoint, params) => {
  let url = new URL("https://newsapi.org/v2/" + endpoint + "?");
  url.search = new URLSearchParams(params).toString();
  return url;
};

const NewsApi = {
  getAll: (source) =>
    fetch(
      createUrl("everything", {
        apiKey: "13af2c629ebd41fabce18064efdb5d94",
        sources: source,
      })
    ).then((response) => response.json()),
  getFiltered: (id, source) =>
    fetch(
      createUrl("everything", {
        apiKey: "13af2c629ebd41fabce18064efdb5d94",
        sources: source,
        qInTitle: id,
      })
    ).then((response) => response.json()),
};

const SourceApi = {
  get: () =>
    fetch(
      createUrl("top-headlines/sources", {
        apiKey: "13af2c629ebd41fabce18064efdb5d94",
      })
    ).then((response) => response.json()),
};
