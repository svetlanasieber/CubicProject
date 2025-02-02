import connectConst from './consts.js';

const config = {
    development: {
        PORT: process.env.PORT || 5000,
        DB_CONNECTION: 'mongodb://localhost:27017/cubicle'
    },
    production: {
        PORT: process.env.PORT || 80,
        DB_CONNECTION: `mongodb+srv://${connectConst}@shtekatacluster.0dh5a.mongodb.net/cubicle?retryWrites=true&w=majority`
    }
};

console.log(`Environtment: ${process.env.NODE_ENV}`);
export default config[process.env.NODE_ENV?.trim()||'development'];