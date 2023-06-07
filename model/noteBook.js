const { saveData, 
        listData, 
        deleteData } = require('../controller/note_controller.js');
const { Note } = require('./note.js');


class NoteBook {

    constructor() {
        this.annotations = {}
        this.separator = '-------------------------------------------------------'.cyan;
        this.changeDate = '';
        this.count = 1;
    }

    // create new note
    newNote( description ) {
        const _note = new Note( description );
        const { id } = _note;
        this.annotations[id] = _note;
        saveData( this.annotations[id] );
        console.log('task created successfully'.blue);
    };

    // format the note list display
    getNotes() {
        const data = listData();
        if ( data ) {
            // let count = 1;
            // let changeDate = '';
            // const separator = '-------------------------------------------------------'.cyan;
    
            for (const key in data) {
                const {_description, _date } = data[key];
                ( this.changeDate != _date ) ? console.log(this.separator) : false;
                
                console.log(`${this.count.toString().green} . ${_description.blue} el : ${_date.yellow}`);
                this.changeDate = _date;
                this.count++;
            }
        } else {
            console.log('There is no saved data'.red);
        }

    };

    // delete note
    getTaskDelete() { 

        const data = listData(); 
        let _data = []; 
    
        for (const property in data) {
            _data[property] = data[property];  
        };

        return _data;
    
    };

    delteNote(id){
        deleteData(id);
    }
    
};

module.exports = {
   NoteBook
};