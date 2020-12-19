import cors from 'cors'

const run = (appPipeline) => {
    appPipeline.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE")
        res.header('Access-Control-Request-Headers', 'authorization, content-type ')
        res.header('Access-Control-Request-Method', 'GET')
        next()
    });

    appPipeline.use(cors({ optionsSuccessStatus: 200 }));
}

export default {
    run
}