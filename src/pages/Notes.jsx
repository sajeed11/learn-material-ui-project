import { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"
//import Paper from "@mui/material/Paper"
import { Container } from "@mui/material"
import NoteCard from "../components/NoteCard"

export default function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <Container maxWidth={false}>
      <Grid container>
        {notes.map(note => (
          <Grid key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
