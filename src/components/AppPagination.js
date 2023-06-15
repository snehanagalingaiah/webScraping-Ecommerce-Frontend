
import React, {useState,useEffect} from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';


export default function AppPagination({productList, setProductsToDisplay}) {
	 console.log("pagination compoent", productList,productList.length )
	 const pageSize = 6;
	 const totalProducts = productList.length;


     const [pagination, setPagination] = useState({
     	from:0,
     	to:pageSize,
     })

    
    
    useEffect(()=>{
    	console.log("from and to", pagination.from, pagination.to);
    	const productsToDisplay = productList.slice(pagination.from, pagination.to);
    	console.log("products to display from apppagination", productsToDisplay);
        setProductsToDisplay(productsToDisplay);
       
    },[pagination.from, pagination.to])

	 const handlePageChange = (event, page) =>
	 {
            const from = (page-1)*pageSize;
            const to = (page-1)*pageSize + pageSize;
            setPagination({from,to})
	 }

	return(
		<Box justifyContent= {"center"} alignitems ="center" display={"flex"} sx = {{margin:'20px 0px'}} >
          <Pagination count={Math.ceil(totalProducts/pageSize)} onChange = {handlePageChange}/>
         </Box>
		);
}