import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { userVote } from '../../store/candidates';

export default function Poll() {

  const candidates = useSelector(state => state.list);  
  const dispatch = useDispatch();

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
              <Button onClick={() => dispatch(userVote(candidate.name))}>Vote</Button>
            </CardActions>
          </Card>
        )
      })}
    </Box>
  )

}