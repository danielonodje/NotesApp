
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
        for(var i=0;i<)
    }

    /*
    * gets a particular note
    * param : note_id
    */
    get(note_id){
        if(isNaN(note_id))
        return notes.note_id;
    }

    /*
    * deletes a particular note
    * param : note_id
    */
    delete_(note_id){
        if(isNaN(note_id))
        this.notes.splice(note_id,i);
    }
}