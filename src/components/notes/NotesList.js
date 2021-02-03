import React from 'react'
import Note from './Note'

export default function NotesList({notes}) {
    return (
        <div className="noteslist">
            {notes && notes.map(note => <Note note={note} key={note.id}/>)}
        </div>
    )
}
