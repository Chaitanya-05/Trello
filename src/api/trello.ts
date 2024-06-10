import axios from "axios";

const API_KEY = process.env.REACT_APP_TRELLO_API_KEY;
const API_TOKEN = process.env.REACT_APP_TRELLO_API_TOKEN;

export function Authentication(){
axios
  .get("https://trello.com/1/authorize?expiration=1day&name=Task_manager&scope=read&response_type=token&key=24bd2a65732398c85484845a4cdf8af2")
  .then(function (response) {
    console.log(response);
  })
}