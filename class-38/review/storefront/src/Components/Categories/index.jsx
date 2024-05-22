
import { useSelector, useDispatch } from 'react-redux';
import { updateCategory } from '../../store/categories';
import { productsFilter } from '../../store/products.js';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Categories() {

  const categories = useSelector(state => state.category.categories);
  const activeCategory = useSelector(state => state.category.activeCategory)
  const dispatch = useDispatch();

  const handleClick = (category) => {
    dispatch(updateCategory(category.name))
  }

  const clearCategory = () => {
    dispatch(updateCategory(''))
  };

  useEffect(() => {
    dispatch(productsFilter(activeCategory))
  }, [activeCategory, dispatch])

  return (
    <section>
      <h2 style={{ marginLeft: '30px'}}>Browse Our New Drip</h2>
      {activeCategory ? <h3 style={{ marginLeft: '30px'}}> Selected Category: {activeCategory}</h3> : <h3 style={{ marginLeft: '30px'}}>Please Select A Category</h3>}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 100,
            height: 150,
            backgroundColor: 'gray', 
            color: 'lightblue',
            marginLeft: '30px',
          },
        }}
      >
        <Button 
        onClick={() => clearCategory()}
        >See All</Button>
        {categories.map((category, idx) => {
          return <Card key={idx} sx={{ minWidth: 275 }} >
            <CardContent>
              <Typography variant="h5" component="div">
                {category.name}
              </Typography>
              <Typography variant="body2">
                Fresh from '{category.description}'
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleClick(category)}>Click Here</Button>
            </CardActions>
          </Card>
        })}
      </Box>
    </section>
  );
}
