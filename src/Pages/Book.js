import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

function Book() {
  const { id } = useParams()
  const { name } = useOutletContext()
  return (
    <h1>{name} Book {id}</h1>
  )
}

export default Book
