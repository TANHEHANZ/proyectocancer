const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getEnfermera = async () => {
    try {
        const response = await fetch(`${baseUrl}enfermera`, {
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
export const deleteEnfermera = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}enfermera/${id}`, {
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
export const updateEnfermera = async (dooctoresactual,callback) => {
  
    const response = await fetch(`${baseUrl}enfermera/${dooctoresactual.id}`, {
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
        direccion:dooctoresactual.direccion,
        experiencia:dooctoresactual.experiencia,
        correo:dooctoresactual.correo,
        id_centros:dooctoresactual.id_centros,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postEnfermera = async (nombre,ap_paterno,ap_materno,ci,direccion,experiencia,correo,id_centros,callback) => {
    const response = await fetch(`${baseUrl}enfermera`, {
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
        direccion:direccion,
        experiencia:experiencia,
        correo:correo,
        id_centros:id_centros,
    })});
    if(response.ok){
      callback();
    }
  }