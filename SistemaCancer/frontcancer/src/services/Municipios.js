const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getMunicipio = async () => {
    try {
        const response = await fetch(`${baseUrl}municipios`, {
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
export const deleteMunicipios = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}municipios/${id}`, {
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
export const updateMunicipios = async (municipiosactual,callback) => {
  
    const response = await fetch(`${baseUrl}municipios/${municipiosactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:municipiosactual.nombre,
        id_provincias:municipiosactual.id_provincias,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postmunicipios = async (nombre,id_provincias,callback) => {
    const response = await fetch(`${baseUrl}municipios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:nombre,
        id_provincias:id_provincias,
        
    })});
    if(response.ok){
      callback();
    }
  }