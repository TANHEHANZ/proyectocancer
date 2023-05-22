const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getTipoexamen = async () => {
    try {
        const response = await fetch(`${baseUrl}tipoexamens`, {
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
export const deleteTipoexamen= async (id, callback) => {
  
    const response = await fetch(`${baseUrl}tipoexamens/${id}`, {
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
export const updateTipoexamen = async (tipoexamensactual,callback) => {
  
    const response = await fetch(`${baseUrl}tipoexamens/${tipoexamensactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:tipoexamensactual.nombre,
       
    })});
    if(response.ok){
      callback();
    }
  }
  export const postTipoexamen = async (nombre,callback) => {
    const response = await fetch(`${baseUrl}tipoexamens`, {
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