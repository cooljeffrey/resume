var axios = require('axios');

var Services = {
  getUserProfile: function(username){
    return axios.get('/' + username + '.json');
  }
}

module.exports = Services;