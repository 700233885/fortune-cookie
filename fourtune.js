const fortunes = require("./fourtune.json")

const getFortune = () =>{
    const rand = Math.floor(Math.random() * fortunes.length) + 1;
    return fortunes[rand];
}

module.exports = {getFortune}