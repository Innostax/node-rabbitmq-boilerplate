const CustomerService = require('../services/application-service');
const  UserAuth = require('./middlewares/auth');
const { SubscribeMessage } = require('../utils');
const knexConfig = require('../../knexfile');
//initialize knex
const knex = require('knex')(knexConfig)


module.exports = (app, channel) => {
    
    const service = new CustomerService();

    // To listen
    SubscribeMessage(channel, service);

    app.get('/whoami', async (req,res,next) => {
        const count = await knex('users').count('* as count');
        const msg = service.HealthCheck()
        return res.status(200).json({msg,userCount: count[0].count})
    })
}
