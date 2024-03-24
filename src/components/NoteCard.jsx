import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

const NoteCard = ({ note }) => {
  return (
    <div>
      {note.title}
    </div>
  )
}

NoteCard.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired
}

export default NoteCard;