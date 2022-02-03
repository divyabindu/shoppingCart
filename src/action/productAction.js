export const fetchMenuDetails=()=> {
    return(dispatch)=>{
        fetch("http://localhost:3333/categories")
        .then(res => res.json())
        .then(data => {
            data.sort((a, b)=> {
                var keyA = new Date(a.order),
                    keyB = new Date(b.order);
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            });
            dispatch({type:"MENU",payload:data})
        })
    }
}

  export const fetchProductsDetails=()=> {
    return(dispatch)=>{
        fetch("http://localhost:3333/products")
        .then(res => res.json())
        .then(data => {
            dispatch({type:"PRODUCTS",payload:data})
        })
    }
    
  }