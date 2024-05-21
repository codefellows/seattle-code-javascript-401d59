import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../../store/votes';

export default function Poll({ userId }) {

  const candidates = useSelector(state => state.candidates);  
  const transactions = useSelector(state => state.transactions);  
  const dispatch = useDispatch();

  const hasUserVoted = () => {
    let result = false;
    
    transactions.forEach(transaction => {
      if (!userId) {
        return true;
      }
      if (transaction.userId === userId) {
        result = true;
      }
    });

    return result;
  }

  console.log(transactions, hasUserVoted());
  return (
    <Box display="flex" justifyContent="space-around" sx={{ maxWidth: '900px'}}>
      {candidates.map((candidate, idx) => {
        return (
          <Card key={idx} sx={{ margin: '50px' }}>
            <CardContent>
              <Typography>
                {candidate.name}
              </Typography>
              <Typography>
                votes: {candidate.votes}
              </Typography>
            </CardContent>
            <CardActions>
              {!hasUserVoted()
                ? <Button onClick={() => dispatch(vote(candidate.name, userId))}>Vote</Button>
                : null
              }
            </CardActions>
          </Card>
        )
      })}
    </Box>
  )

}