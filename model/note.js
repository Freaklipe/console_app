const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

class Note {
    
    constructor( description = ''){
        this._id = uuidv4(),
        this._description = description,
        this._date = moment().format('DD-MM-YYYY')
    };

};


module.exports = {
   Note
};