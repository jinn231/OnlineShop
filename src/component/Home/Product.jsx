import { Box,CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
import { useStateValue } from "../reducer/ContextProvider";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {IconButton} from "@mui/material";
import axios from "axios";

const MuiCard = ({id,img,title,text,price}) => {
  const [{user} , dispatch ] = useStateValue();

  const add_to_basket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        img: img,
        title: title,
        text: text, 
        price: price,
      }
    })
  }

  const handleLike = () => {
    try {
      const putData = {
        id: id,
        image: img,
        title: title,
        text: text,
        price: price
      }

      const Header = {
        'content-type':'application/json'
      }

      const response = axios.get("https://e-com-9d978-default-rtdb.asia-southeast1.firebasedatabase.app/Like.json")

      response.then(({data}) => {

        const createData = [];
        for(const key in data){
          createData.push(data[key])
        }

        return createData;

      }).then((NewData) => {
        const obj = NewData.find(i => i.id === putData.id);
        
        if(!obj){
          axios.post("https://e-com-9d978-default-rtdb.asia-southeast1.firebasedatabase.app/Like.json", putData, {header:Header } )
        }else{
          alert("This item is already added to your favourite. ")
        }
      })
        
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box key={id}>
        <CardMedia 
        component="img"
        image={img}
        height="300px"
        alt="card img"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" >{title}</Typography>
            <Typography variant="body2">{text}</Typography>
            <Typography variant="h6">price : $ {price}</Typography>
            <IconButton onClick={handleLike}>
              <FavoriteBorderIcon />
            </IconButton>
        </CardContent>
        <CardActions>
            <Button variant="contained" mx="auto" sx={{textAlign: "center", zIndex: 0}} onClick={add_to_basket} >Add To Basket</Button>
        </CardActions>
    </Box>
  )
}

export default MuiCard;