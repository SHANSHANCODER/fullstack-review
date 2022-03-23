const axios = require('axios');
const config = require('../config.js');
const database = require('../database/index.js')

let getReposByUsername = (username,callback) => {
  var url = `https://api.github.com/users/${username}/repos`
  axios.get(url)
  .then(response =>{
   // console.log(response);
   database.save(response.data);
  //write the response to db
  })
  .catch(err=>console.log(err))

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'FILL ME IN',

    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

}


module.exports.getReposByUsername = getReposByUsername;