
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
    *edit a note
    *param : note_id,note_content
    */
    create(note_id,note_content){
        if(!isNaN(note_id) && this.notes.note_id !== undefined)
        this.notes.id = note_content;
    }

    /*
    *  lists all notes
    *  param : none
    */
    listNotes(){
        rnotes = [];    
        for(let i=0;i<this.notes.length;i++){
            rnotes.push("NOTE ID: "+i+"\n"+this.notes.i);
        }
        return rnotes;
    }

    /*
    * gets a particular note
    * param : note_id
    */
    get(note_id){
        if(!isNaN(note_id) && this.notes.note_id !== undefined)
        return notes.note_id;
    }

    /*
    * deletes a particular note
    * param : note_id
    */
    delete_(note_id){
        if(!isNaN(note_id) && this.notes.note_id !== undefined)
        this.notes.splice(note_id,1);
    }


}