import React  from "react";
import Note from "./note";
import notes from "./notes"

function renderNote(noteitem){
    return (<Note key={noteitem.key} title={noteitem.title} content={noteitem.content} />);

}

function NoteList(props) {
    return (
        <div>
            {notes.map(renderNote)}
        </div>
    );
}

export default NoteList;