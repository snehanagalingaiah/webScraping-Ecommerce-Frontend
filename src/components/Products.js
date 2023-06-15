import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Appbar from './Appbar';
import {BACKEND_URL} from "../staticData.js" 
import {Typography, Button, IconButton, Grid, Card, CardContent, CardMedia } from '@mui/material';
import AppPagination from './AppPagination';
import Autofill from './Autofill';

export default function Products(){
    const [productList, setProductList] = useState([]);
    const navigate = useNavigate();
    const [productsToDisplay, setProductsToDisplay] =useState([])

    useEffect(() => {
      async function fetchData(){
        console.log("front end going to fetch data from backend")
      try
      {
            var response = await axios.get('http://localhost:8000/products/get');
            console.log("response data",response.data);
            setProductList(response.data)
        }
        catch(err)
        {
          console.log(err)
        }
      }
      fetchData();
      },[])

    useEffect(() =>{
        console.log("state variable",productList);
        const productsArr= productList.slice(0,6);
        setProductsToDisplay (productsArr);
    },[productList]);

	   return(
      <>
        <Appbar />

         <Autofill productList={productList} setProductsToDisplay={(p)=>setProductsToDisplay(p)}/>
         <Grid container spacing={5} style={{ margin: 'auto 6%' }} alignItems="stretch">
                {productsToDisplay.map(product => (
                    <Grid item key={product._id} style={{display: 'flex'}}>
                       <Card sx={{ width: 400 }} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                         <CardMedia
                            sx={{ height: 400 }}
                            image={product.img}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                             {product.title}
                            </Typography>
                            <Typography variant="subtitle1" color="black" >
                             {product.finalPrice}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" >
                             <span style={{textDecoration: 'line-through'}}>
                                 {product.originalPrice}
                              </span>
                            </Typography>
                            <Typography variant="subtitle2" color="black" >
                             Rating :{product.rating}⭐
                            </Typography>
                           </CardContent>
                      </Card>
                    </Grid>
                  ))}
            </Grid>
            <AppPagination productList={productList} setProductsToDisplay={(p)=>setProductsToDisplay(p)}/>
            </>
	   );
}
