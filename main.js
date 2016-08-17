
class NotesApp {
    const author;
    const notes = [];
    constructor(author) {
        this.author = author;
    }

    /*
    *create a new note
    (param : note content
    */
    create(note_content) {
        this.notes.push(note_content);
    }

    /*
    *edit a note
    *param : note_id,note_content
    */
    create(note_id,note_content) {
        if(!isNaN(note_id) && this.notes.note_id !== undefined)
        this.notes.id = note_content;
    }

    /*
    *  lists all notes
    *  param : none
    */
    listNotes() {
        rnotes = [];    
        for(let i=0;i<this.notes.length;i++) {
            rnotes.push(formatNote(i,this.notes.i));
        }
        return rnotes;
    }

    /*
    * formats a note for display
    * params : note id, note_content, author(optional)
    */
    formatNote(note_id,note_content, author) {
        if(author !== undefined){
            return "NOTE ID: "+i+"\n"+this.notes.i+"\n\nBy Author"+author;
        }
        return "NOTE ID: "+i+"\n"+this.notes.i;
    }

    /*
    * gets a particular note
    * param : note_id
    */
    get(note_id) {
        if(!isNaN(note_id) && this.notes.note_id !== undefined)
        return notes.note_id;
    }

    /*
    * deletes a particular note
    * param : note_id
    */
    delete(note_id) {
        if(!isNaN(note_id) && this.notes.note_id !== undefined)
        this.notes.splice(note_id,1);
    }
    
    /*
    * search for notes containing a particular string
    *param : searchtext
    */
    search(searchtext){
        //change to string if not already a string
        searchtext += "";
        let rnotes = ["Showing results for search ["+searchtext+"]"];
        for(let i=0;i<this.notes.length;i++) {
            if(this.notes[i].indexOf(searchtext)){
            	rnotes.push(this.formatNote(i,this.notes[i],this.author));	
            }
        }
        if(rnotes.length === 1){
        	rnotes.push("no results found");
        }
        return rnotes;
    }  

}