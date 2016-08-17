
class NotesApp {
    const author;
    const notes = [];
    constructor(author){
        this.author = author;
    }
    /*
    *create a new note
    (param : note content
    */
    create(note_content){
        this.notes.push(note_content);
    }

    /*
    *  lists all notes
    *  param : none
    */
    listNotes(){    
        return this.notes.map(function(current){
            return { "NOTE ID : " : note_id,"NOTE CONTENT" : note_content };
        })
    }

    /*
    * gets a particular note
    * param : note_id
    */
    get(note_id){
        return notes.note_id;
    }

    /*
    * deletes a particular note
    * param : note_id
    */
    delete_(note_id){
        this.notes.splice(note_id,i);
    }
}