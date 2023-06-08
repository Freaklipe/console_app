const { master, inputNote, pause, confirm, deleteNote } = require("./helper/menu");
const { NoteBook } = require("./model/noteBook");


const principal = async() => {
    let choices = '';

    do {
        console.clear();
        const { master_menu } = await master();
        const _newNote = new NoteBook;
        choices = master_menu;


        switch ( master_menu ) {
            case '0': // Create task
                let { description } = await inputNote();
                _newNote.newNote( description );
                await pause('Press Enter to Continue');
                break;
            
            case '1': // List Tasks
                _newNote.getNotes();
                await pause('Press Enter to Continue');
                break;

            case '2': // Delete task
                const annotations = _newNote.getNoteToDelete();
                const deleteID = await deleteNote(annotations);
                const ok = await confirm(`'you want to ${ 'delete '.red } the ${'note'.green }? '`);
                (ok) ? _newNote.delteNote(deleteID) : false
                await pause(`Press ${'Enter'.green} to Continue `);
                break;

            case '3': //Exit app
                console.clear();
                break;
        };
        
    } while (choices != '3');
    
};

principal();