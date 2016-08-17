
class NotesApp {
    /*
    * creates an instance of NotesApp, optionally sets the author
    * param : author
    */
    constructor(author) {
        this.author = author;
        this.notes = [];
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
    edit(note_id,note_content) {
        if(!isNaN(note_id) && this.notes[note_id] !== undefined)
        this.notes[note_id] = note_content;
    }

    /*
    *  lists all notes
    *  param : none
    */
    listNotes() {
        let rnotes = [];    
        for(let i=0;i<this.notes.length;i++) {
            rnotes.push(this.formatNote(i,this.notes[i]));
        }
        console.log(rnotes);
    }

    /*
    * formats a note for display
    * params : note id, note_content, author(optional)
    */
    formatNote(note_id,note_content, author) {
    	if(this.notes[note_id] !== undefined){
    		if(author !== undefined){
            return "NOTE ID: "+note_id+"    "+this.notes[note_id]+"   By Author"+author;
        }
        return "NOTE ID: "+note_id+"    "+this.notes[note_id];	
    	}
    }

    /*
    * gets a particular note
    * param : note_id
    */
    get(note_id) {
        if(!isNaN(note_id) && this.notes[note_id] !== undefined)
        return notes.note_id;
    }

    /*
    * deletes a particular note
    * param : note_id
    */
    delete(note_id) {
        if(!isNaN(note_id) && this.notes[note_id] !== undefined)
        this.notes.splice(note_id,1);
    }
    
    /*
    * search for notes containing a particular string
    *param : searchtext
    */
    search(searchtext){
        //change to string if not already a string
        searchtext += "";
        rnotes = ["Showing results for search '[<"+searchtext+">]'"];
        for(let i=0;i<this.notes.length;i++) {
            if(notes.i.indexOf(searchtext))
            rnotes.push(formatNote(i,this.notes.i,this.author));
        }
    } 

}