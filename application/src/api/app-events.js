const CustomerService = require("../services/application-service");

module.exports = (app) => {
    
    const service = new CustomerService();
    app.use('/app-events',async (req,res,next) => {

        const { payload } = req.body;

        //handle subscribe events
        service.SubscribeEvents(payload);

        console.log("============= application ================");
        console.log(payload);
        res.json(payload);

    });

}
