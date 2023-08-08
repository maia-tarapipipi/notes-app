'use client'
import { useParams, useRouter } from 'next/navigation'

import PocketBase from 'pocketbase'

const delNoteApi = async ({ id }: any) => {
  const db = new PocketBase('http://127.0.0.1:8090')
  await db.collection('notes').delete(`${id}`)
}

export default function DeleteNote() {
  const params = useParams()
  const id = params.id
  const router = useRouter()

  const handleDelete = async () => {
    await delNoteApi({ id })
    router.push('/')
  }

  return <button onClick={handleDelete}>delete</button>
}

// redirect cant be used within the router call, neither can router.push
// useRouter for client side components

// there are 2 different useRouter functions, one in /navigation and one in /router
// userouter for client side
// redirect if for client and server and clioent i needed
