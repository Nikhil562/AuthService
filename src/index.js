const express = require('express');
const {PORT} = require('./config/serverConfig')
const bodyParser = require("body-parser");
const apiRoutes = require('./routes/index');
const app= express();

const setupAndStartServer = async()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);
        // const incomingpassword = '123456';
        // const user = await User.findByPk(3);
        // const response = bcrypt.compareSync(incomingpassword, user.password);
        // console.log(response);
    })
}

setupAndStartServer();