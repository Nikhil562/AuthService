const express = require('express');
const {PORT} = require('./config/serverConfig')
const bodyParser = require("body-parser");
const apiRoutes = require('./routes/index');
const UserRepository = require('./repository/user-repository');
// const UserService = require('./services/user-service')
const app= express();

const setupAndStartServer = async()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);
        // const repo = new UserRepository();
        // const response = await repo.getById(1);
        // console.log(response);
        // const incomingpassword = '123456';
        // const user = await User.findByPk(3);
        // const response = bcrypt.compareSync(incomingpassword, user.password);

        // const service = new UserService();
        // const newToken = service.createToken({email: 'sanket@admin.com', id: 1});
        // console.log("new token is", newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjcxNjM1MTgxLCJleHAiOjE2NzE2MzUyMTF9.vuo6QmYm6TmL2P2rBXoNDbPi1st5ZVrK4Yf2Jz-Dpzs';
        // const response = service.verifyToken(token);
        // console.log(response);
    })

}

setupAndStartServer();