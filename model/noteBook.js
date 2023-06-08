const { saveData, 
        listData, 
        deleteData } = require('../controller/note_controller.js');
const { Note } = require('./note.js');



class NoteBook {

    constructor() {
        this.annotations = {}
    }

    // create new note
    newNote( description ) {
        console.clear();
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
            let _data = [];
            for (const i in data) {
                const {  _description, _date } = data[i];
                _data[i] = { Note:_description, Day:_date };
            }
            console.clear();
            console.log("### List Note".yellow);
            console.table(_data);
        } else {
            console.log('There is no saved data'.red);
        };

    };

    // delete note
    getNoteToDelete() { 
        return listData();
    };

    delteNote(id){
        deleteData(id);
    };
    
};

module.exports = {
   NoteBook
};