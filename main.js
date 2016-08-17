class NotesApp {
    /*
    * Creates an instance of NotesApp, optionally sets the author
    * @param {string} author
    */
    constructor(author) {
        this.author = author;
        this.notes = [];
    }


    /*
    *Create a new note
    * @param {string} note_content
    */
    create(note_content) {
        this.notes.push(note_content);
    }

    /*
    * Edit a note
    * @param {Integer} note_id
    * @param {string} note_content
    */
    edit(note_id,note_content) {
        if(isValidId(note_id))
        this.notes[note_id] = note_content;
    }

    /*
    *  Lists all notes
    *  @return {Array} rnotes [an array of strings, each represents one of the available notes]
    */
    listNotes() {
        let rnotes = [];    
        for(let i=0;i<this.notes.length;i++) {
            rnotes.push(this.formatNote(i,this.notes[i]));
        }
        return(rnotes);
    }

    /*
    * Formats a note for display
    * @params {Integer} note id
    * @params {String} note_content,
    * @params {String} author(optional)
    * @return : a display ready string representing a single note
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
    * Gets a particular note
    * @param {Integer} note_id
    * @return {String} [a single note]
    */
    get(note_id) {
        if(isValidId(note_id))
        return notes.note_id;
    }

    /*
    * Deletes a particular note
    * @param {Integer} note_id
    */
    delete(note_id) {
        if(isValidId(note_id))
        this.notes.splice(note_id,1);
    }
    
    /*
    * Search for notes containing a particular string
    * @param {String} searchtext
    * @return {Array} rnotes [an array of strings, each represents a single note]
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
    /*
    * check the passed id if it is valid and exists in the notes array
    * @param {Integer} note_id
    * @return {Boolean} result of several checks on id
    */
    isValidId(note_id){
        if(!isNaN(note_id) && note_id >= 0 && note_id < this.notes.length && this.notes[note_id] !== undefined){
            return true;
        }
        return false;
    } 

}