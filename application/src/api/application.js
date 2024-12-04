const CustomerService = require('../services/application-service');
const  UserAuth = require('./middlewares/auth');
const { SubscribeMessage } = require('../utils');


module.exports = (app, channel) => {
    
    const service = new CustomerService();

    // To listen
    SubscribeMessage(channel, service);

    app.get('/whoami', (req,res,next) => {
        const msg = service.HealthCheck()
        return res.status(200).json({msg})
    })
}
