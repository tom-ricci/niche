// import {fetchJSON, fetchText} from "./modules/fetcher/fetcher.js";
let fetcher = require("./modules/fetcher/fetcher.js");
let fetchJSON = fetcher.fetchJSON();
let fetchText = fetcher.fetchText();

const err =
  "Something went wrong. Check the wiki, and if you used this correctly, create an issue on github!";

module.exports = function (niche) {
  if(niche.type === Object) {
    if(niche.module === "fetcher" && niche.args[0] != null && niche.args[1] != null) {
      const ft = niche.args[0];
      const url = niche.args[1];
      if(ft === 0) {
        return fetchJSON(url);
      }else if(ft === 1) {
        return fetchText(url);
      }else{
        return err;
      }
    }else{
      return err;
    }
  }else{
    return err;
  }
};
