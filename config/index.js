var configValue = require("./config.json");

module.exports = {
    getDbConnectionString: function () {
        return `mongodb://${ configValue.username }:${ configValue.password }@ds119598.mlab.com:19598/node-todos123`;
    }
}
