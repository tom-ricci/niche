const err = "Something went wrong. Check the wiki, and if you used this correctly, create an issue on github!";

module.exports = function(niche) {
  if(niche.module === "fetcher" && niche.args[0] != null && niche.args[1] != null && niche.args[2] != null) {
    const ft = niche.args[0];
    const url = niche.args[1];
    const action = niche.args[2];
    if(ft === 0) {
      return fetchJSON(url, action);
    }else if(ft === 1) {
      return fetchText(url, action);
    }else{
      return err;
    }
  }else{
    return err;
  }
};

/*
*
* +---------------------------+
* | M O D U L E S   B E L O W |
* +---------------------------+
*
* */

function fetchJSON(url, action) {
  fetch(url).then((response) =>
    response.json().then((data) => {
      action(data);
    })
  );
}

function fetchText(url, action) {
  fetch(url).then((response) =>
    response.text().then((data) => {
      action(data);
    })
  );
}