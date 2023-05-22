const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getTipotratamiento = async () => {
    try {
        const response = await fetch(`${baseUrl}tipotratamientos`, {
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
export const deleteTipotratamiento= async (id, callback) => {
  
    const response = await fetch(`${baseUrl}tipotratamientos/${id}`, {
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
export const updateTipotratamiento = async (tipotratamientosactual,callback) => {
  
    const response = await fetch(`${baseUrl}tipotratamientos/${tipotratamientosactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:tipotratamientosactual.nombre,
       
    })});
    if(response.ok){
      callback();
    }
  }
  export const postTipotratamiento = async (nombre,callback) => {
    const response = await fetch(`${baseUrl}tipotratamientos`, {
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