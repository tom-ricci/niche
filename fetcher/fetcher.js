export function fetchJSON(url) {
  fetch(url).then(response => response.json().then(data => {
    return data;
  }));
}

export function fetchText(url) {
  fetch(url).then(response => response.text().then(data => {
    return data;
  }));
}