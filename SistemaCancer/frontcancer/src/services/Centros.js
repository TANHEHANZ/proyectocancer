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
  
    const response = await fetch(`${baseUrl}doctores/${id}`, {
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
export const updateCentros= async (dooctoresactual,callback) => {
  
    const response = await fetch(`${baseUrl}doctores/${dooctoresactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:dooctoresactual.nombre,
        ap_paterno:dooctoresactual.ap_paterno,
        ap_materno:dooctoresactual.ap_materno,
        ci:dooctoresactual.ci,
        id_especialidades:dooctoresactual.id_especialidades,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postDoctor = async (nombre,ap_paterno,ap_materno,ci,id_especialidades,callback) => {
    const response = await fetch(`${baseUrl}doctores`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:nombre,
        ap_paterno:ap_paterno,
        ap_materno:ap_materno,
        ci:ci,
        id_especialidades
    })});
    if(response.ok){
      callback();
    }
  }