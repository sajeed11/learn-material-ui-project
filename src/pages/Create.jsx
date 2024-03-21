import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
//import { makeStyles } from "@mui/material";

// Does not work with MUI v5, instead we could use sx prop
// const useStyles = makeStyles({
//   btn: {
//     fontSize: 60,
//     backgroundColor: "violet",
//     '&:hover': {
//       backgroundColor: "green"
//     }
//   }
// })

export default function Create() {
  // const classes = useStyles();

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsEroor, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos")

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === "") {
      setTitleError(true)
    }

    if (details === "") {
      setDetailsError(true)
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category })
      }).then(() => navigate("/"))
    }
  }

  return (
    <Container maxWidth={false}>
      <Typography
        variant="h6"
        color={"textSecondary"}
        component={"h2"}
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            marginTop: 2,
            marginBottom: 2,
            display: "block"
          }}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          sx={{
            marginTop: 2,
            marginBottom: 2,
            display: "block"
          }}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsEroor}
        />

        <FormControl sx={{ marginTop: 2, marginBottom: 2, display: "block" }}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value={"money"} control={<Radio />} label="Money" />
            <FormControlLabel value={"todos"} control={<Radio />} label="Todos" />
            <FormControlLabel value={"reminders"} control={<Radio />} label="Reminders" />
            <FormControlLabel value={"work"} control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}