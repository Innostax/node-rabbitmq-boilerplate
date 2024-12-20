const express = require('express');
const cors  = require('cors');
const { application, appEvents } = require('./api');
const { CreateChannel, SubscribeMessage } = require('./utils')

module.exports = async (app) => {

    app.use(express.json());
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    //api
    // appEvents(app);

    const channel = await CreateChannel()

    
    application(app, channel);
    // error handling
    
}
