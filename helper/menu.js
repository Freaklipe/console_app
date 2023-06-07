require('colors');
const inquirer = require('inquirer');
const moment = require('moment');




const master = async () => {

    const separator_a = '########################################################'.cyan;
    const separator_b = '#'.cyan;
    const title = '                   Menu de Datos                      '.blue; 

    const choices = [
        {
            value: '0',
            name: 'Create'
        },
        {
            value: '1',
            name: 'Delete'
        },
        {
            value: '2',
            name: 'List'
        },
        {
            value: '3',
            name: 'Exit'
        }
    ];

    const questions = [
        {
            type: 'list',
            name: 'master_menu',
            message: 'what do you want to do?',
            choices
        }
    ];

    

    console.log(separator_a);
    console.log(separator_b + title + separator_b);
    console.log(separator_a);
    console.log(moment().format('dddd Do MMMM'));

    const resp = await inquirer.prompt( questions );

    return resp;
};

const inputNote = async () => {
    const input = await inquirer.prompt({
        type: 'input',
        name: 'description',
        message: 'enter the new note',
        validate: 
        function(input){
            let done = this.async();

            input = input.trim();

            if ( input.length == 0 ) {
                done('You need to provide a description');
                return;
            };
            done( null, true );
        },
    });

    return input;
};

const pause = async( message ) => {
    const { pause } = await inquirer.prompt([{
            type: 'cuestion',
            name: 'pause',
            message,
        }]
    );

    return pause;
};

const deleteNote = async ( annotations = [] )=> { // menu de items a borrar 
    // lista las tasks en el apartado de borrar
    const choices = annotations.map( (note, id) => {
    
        //   const _id = `${i + 1}.`.green;
    
        return {
            value: note,
            name:  `${id.toString().green} ${ note._description } : : agregada el ${'DIA '.cyan} :${note._date}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancel'
    });
    
    const questions = [{
        type: 'list',
        name: 'id',
        pageSize: 20,
        message: 'Delete',
        choices
    }]
      
    const { id } = await inquirer.prompt(questions);
    return id._id;
};

const confirm = async( message ) => {// confirmacion para borrar tasks
  
    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];
    
    const { ok } = await inquirer.prompt(question);
    return ok;
} 


module.exports = {
   master,
   inputNote,
   pause,
   deleteNote,
   confirm

};