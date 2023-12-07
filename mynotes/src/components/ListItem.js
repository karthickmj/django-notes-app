import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';

let getTitle = (note) => {
    let title = note.body.split('\n')[0]
    if (title.length > 25) {
        title = title.slice(0, 25) + '...'
    }
    return title
}
let getDate = (note) => {
    return new Date(note.updated).toLocaleDateString()
}
let getContent = (note) => {
    let title = note.body.split('\n')[0]
    let content = note.body.replace(title, "")
    if (content.length > 69) {
        return content.slice(0, 69) + '...'
    }
    return content
}

const ListItem = ({note, onDelete}) => {
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this note?')) {
            try {
                await axios.delete(`/api/notes/${note.id}/delete/`);
                onDelete(note.id);
            } catch (error) {
                console.error('Failed to delete the note:', error);
            }
        }
    };

    return (
    <div className='notes-list-item'>
        <div className='notes-list-item-content'>
            <Link to={`/note/${note.id}`}> 
                <h3>{getTitle(note)}</h3>
                <p>{getContent(note)}</p>
                <p>{getDate(note)}</p>
            </Link>
        </div>
        <button className='delete-button' onClick={handleDelete}>
            <FaTrashAlt />
        </button>
    </div>
  )
}

export default ListItem
