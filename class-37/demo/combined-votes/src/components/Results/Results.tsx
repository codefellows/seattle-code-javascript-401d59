import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

export default function Results() {

  const totalVotes = useSelector(state => state.totalVotes);
  const candidates = useSelector(state => state.candidates);
  const roundsOfVoting = 10;

  const calculateWinner = () => {
    let mostVotes = {votes: 0};
    candidates.forEach((candidate) => {
      console.log(mostVotes);
      if (candidate.votes > mostVotes.votes) mostVotes = candidate;
    });
    return mostVotes.name;
  }

  return (
    <Box>
      {totalVotes >= roundsOfVoting 
        ? <Typography>Winner!! {calculateWinner()}</Typography>
        : <Typography>KEEP ON VOTING</Typography>
      }
    </Box>
  )
}
