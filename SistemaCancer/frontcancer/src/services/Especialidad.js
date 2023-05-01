const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getEspecialidades = async () => {
    try {
        const response = await fetch(`${baseUrl}especialidades`, {
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
export const deleteEspecialidades = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}especialidades/${id}`, {
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
export const updateEspecialidades = async (especialidadactual,callback) => {
  
    const response = await fetch(`${baseUrl}especialidades/${especialidadactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:especialidadactual.nombre,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postEspecialidades = async (nombre,callback) => {
    const response = await fetch(`${baseUrl}especialidades`, {
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