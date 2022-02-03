
export const fetchBanners=()=> {
    return(dispatch)=>{
        fetch("http://localhost:3333/banners")
        .then(res => res.json())
        .then(data => {
            dispatch({type:"BANNER",payload:data})
        })
    }
  }

  export const fetchCategories=()=> {
    return(dispatch)=>{
        fetch("http://localhost:3333/categories")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data && data.sort((a, b) => (a.order > b.order) ? 1 : -1);
            dispatch({type:"CATEGORIES",payload:data})
        })
    }
    
  }