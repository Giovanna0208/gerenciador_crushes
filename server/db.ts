import * as mongoose from 'mongoose';

export default class DataBase{
    private dburl = 'mongodb://127.0.0.1/projnode';
    private dbconnection;

    constructor(){}

    createConnection(){
        mongoose.connect(this.dburl);
        this.logger(this.dburl);
    }

    logger(uri){
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log('MONGOOSE CONNECTED'));
        this.dbconnection.on('error', error => console.error.bind(console, 'CONNECTION ERROR: ' + error));
    }
}