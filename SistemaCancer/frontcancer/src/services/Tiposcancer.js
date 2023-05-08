const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getTiposcancer = async () => {
    try {
        const response = await fetch(`${baseUrl}tiposcancers`, {
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
export const deleteTiposcancer= async (id, callback) => {
  
    const response = await fetch(`${baseUrl}tiposcancers/${id}`, {
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
export const updateTiposcancer = async (tiposcancersactual,callback) => {
  
    const response = await fetch(`${baseUrl}tiposcancers/${tiposcancersactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:tiposcancersactual.nombre,
       
    })});
    if(response.ok){
      callback();
    }
  }
  export const postTiposcancer = async (nombre,callback) => {
    const response = await fetch(`${baseUrl}tiposcancers`, {
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