import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem.js'
import AddButton from '../components/AddButton.js'
import FolderList from '../components/FolderList.js' // Import the new FolderList component

const NotesListPage = () => {
    let [notes, setNotes] = useState([])
    let [folders, setFolders] = useState([]) // Add state for folders

    useEffect(() => {
        getNotes()
        getFolders() // Fetch folders when the component mounts
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        console.log(data)
        setNotes(data)
    }

    let getFolders = async () => { // New function to fetch folders
        let response = await fetch('/api/folders/')
        let data = await response.json()
        console.log(data)
        setFolders(data)
    }

    return (
        <div className='notes-page'>
            <div className='folders-section'>
                <FolderList folders={folders} />
            </div>
            <div className='notes-section'>
                <div className="notes-header">
                    <h2 className="notes-title">
                        &#9782; Notes
                    </h2>
                    <p className="notes-count">{notes.length}</p>
                </div>
                <div className='notes-list'>
                    {notes.map((note, index) => {
                        return (
                            <div className='note-preview' key={index}>
                                <ListItem note={note} />
                            </div>
                        )
                    })}
                </div>
                <AddButton />
            </div>
        </div>
    )
}

export default NotesListPage
