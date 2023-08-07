import Image from 'next/image'
import NotesPage from './notes/page'
import Link from 'next/link'
import CreateNote from './notes/CreateNote'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <NotesPage />
    </div>
  )
}
