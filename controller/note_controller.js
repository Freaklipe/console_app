const fs = require('fs');

const archive = './db/data.json';
let _data = [];


// save data to json file
const saveData = ( data ) => {
    if (listData()) {
        _data = listData();
    };

    _data.push( data );

    fs.writeFileSync( archive, JSON.stringify( _data ));
    _data = [];
};

// get data from json file
const listData = () => {
    if (fs.existsSync(archive)) {
        const data = fs.readFileSync(archive, {encoding: 'utf-8'});
        return (data.trim().length !== 0) 
            ? ( JSON.parse(fs.readFileSync(archive, {encoding: 'utf-8'})) ) 
            : false;
    };

    return false;
};

// delete data from json file
const deleteData = ( id ) => {
    if (listData()) {
        _data = listData();
    };

    const new_data = _data.filter((obj) => { 
        return obj._id != id;
    });

    fs.writeFileSync(archive,JSON.stringify(new_data));
    _data = [];
};

module.exports = {
   saveData,
   listData,
   deleteData,
};