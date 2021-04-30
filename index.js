import {fetchJSON, fetchText} from "./fetcher/fetcher.js";

const err = "Something went wrong. Check the wiki, and if you used this correctly, create an issue on github!";

module.exports = function fetch(ft, url) {
  if(ft === 0) {
    return fetchJSON(url);
  }else if(ft === 1) {
    return fetchText(url)
  }else{
     return err
  }
}