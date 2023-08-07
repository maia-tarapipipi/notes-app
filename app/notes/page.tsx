import Link from 'next/link'
import PocketBase from 'pocketbase'
import CreateNote from './CreateNote'

async function getNotes() {
  // NEXT db calls STRUCTURE
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records',
    {
      cache: 'no-store',
    }
  )

  const data = await res.json()

  // ------- using POCKETBASE import to access DB
  // const db = new PocketBase('http://127.0.0.1:8090/')
  // const data = await db.records.getList('notes')

  return data?.items as any[]
}

export default async function NotesPage() {
  const notes = await getNotes()

  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />
        })}
      </div>
      <CreateNote />
    </div>
  )
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {}

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h2>Name: {title}</h2>
        <h5>Note: {content}</h5>
        <p>Date created: {created}</p>
      </div>
    </Link>
  )
}

// compontents are server by default so you can do data function
// pass the URL of the database youre using
// server rendered, next will automatically cache page but cache
// will refetch on every request
