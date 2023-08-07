async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  )
  const data = await res.json()
  return data
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id)

  return (
    <div>
      <div>
        <h1>notes/{note.id}</h1>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  )
}

// new chaching behaviour, incrimental static reginrateion will reload after a period of time
// pre-render pages using static params --> generate static params --> get static paths
