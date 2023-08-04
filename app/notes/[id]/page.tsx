async function getNote(noteId: string) {
  const res = await fetch(
    `'
  http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  )
  const data = res.json
  return data
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id)
  console.log('note', note)
  return (
    <div>
      <div>
        {/* <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p> */}
      </div>
    </div>
  )
}

// new chacheing behaviour, incrimental static reginrateion will reload after a period of time
// pre-render pages using static params --> generate static params --> get static paths
// git@github.com:maia-tarapipipi/notes-app.git
