const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getTipomuestras = async () => {
    try {
        const response = await fetch(`${baseUrl}tipomuestras`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response;
    } catch (error) {
        console.log(error);
    }
};
export const deleteTipomuestras= async (id, callback) => {
  
    const response = await fetch(`${baseUrl}tipomuestras/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },

    })
    if (response.ok) {
        callback();
    }
};
export const updateTipomuestras = async (tipomuestrasactual,callback) => {
  
    const response = await fetch(`${baseUrl}tipomuestras/${tipomuestrasactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:tipomuestrasactual.nombre,
       
    })});
    if(response.ok){
      callback();
    }
  }
  export const postTipomuestras = async (nombre,callback) => {
    const response = await fetch(`${baseUrl}tipomuestras`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:nombre,
      
    })});
    if(response.ok){
      callback();
    }
  }