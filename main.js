
class NotesApp {
    author;
    const notes = [];
    lastId;
    constructor(){
        lastId = -1;
    }
    /*
    *create a new note
    (param : note content
    */
    create(note_content){
        this.lastId++;
        this.notes.push({lastId : note_content});
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
        this.notes.
    }
}

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};