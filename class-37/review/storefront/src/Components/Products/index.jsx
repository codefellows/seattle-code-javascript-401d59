
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = useState(false);

  const filteredProducts = useSelector(state => state.product.filteredProducts)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {

  }, [filteredProducts])

  return (
    <>
      <h2>Our Products</h2>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 420,
            height: 420,
          },
        }}
      >
        {filteredProducts.map((product, idx) => {
          return <Card key={idx} sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: green[500] }} aria-label="weed">
                  W
                </Avatar>
              }
              title={product.name}
              subheader={product.category}
            />
            <CardMedia
              component="img"
              height="194"
              sx={{ objectFit: 'contain' }}
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </Card>

        })}
      </Box>
    </>
  );
}
