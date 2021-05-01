module.exports = function fetchJSON(url) {
  fetch(url).then((response) =>
    response.json().then((data) => {
      return data;
    })
  );
};

module.exports = function fetchText(url) {
  fetch(url).then((response) =>
    response.text().then((data) => {
      return data;
    })
  );
};