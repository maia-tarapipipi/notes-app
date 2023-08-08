'use client'

import { useState } from 'react'

export default function CreateNote() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const create = async () => {
    await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })

    setContent('')
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={create} className="flex flex-col justify-center w-1/4">
        <h3>Create a new Note</h3>
        <input
          className="mb-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="mt-2"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create note</button>
      </form>
    </div>
  )
}

// make sure when making API calls that when you create the columns for the tables the naming convention is consistent
// event handlers can only be passed in a client component
