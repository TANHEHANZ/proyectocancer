const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getCentros= async () => {
    try {
        const response = await fetch(`${baseUrl}centros`, {
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
export const deleteCentros= async (id, callback) => {
  
    const response = await fetch(`${baseUrl}centros/${id}`, {
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
export const updateCentros= async (centrosactual,callback) => {
  
    const response = await fetch(`${baseUrl}centros/${centrosactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:centrosactual.nombre,
        ubicacion:centrosactual.ubicacion,
      
    })});
    if(response.ok){
      callback();
    }
  }
  export const postCentros = async (nombre,ubicacion,callback) => {
    const response = await fetch(`${baseUrl}centros`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:nombre,
        ubicacion:ubicacion,     
    })});
    if(response.ok){
      callback();
    }
  }