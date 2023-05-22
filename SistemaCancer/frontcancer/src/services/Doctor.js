const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getDoctores = async () => {
    try {
        const response = await fetch(`${baseUrl}doctores`, {
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
export const deletedoctores = async (id, callback) => {
  
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
export const updatedoctores = async (dooctoresactual,callback) => {
  
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
        correo:dooctoresactual.correo,
        Direccion:dooctoresactual.Direccion,
        Credenciales:dooctoresactual.Credenciales,
        descripcion:dooctoresactual.descripcion,
        id_especialidades:dooctoresactual.id_especialidades,
        id_centros:dooctoresactual.id_centros,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postDoctor = async (nombre,ap_paterno,ap_materno,ci,correo,Direccion,Credenciales,descripcion,id_especialidades,id_centros,callback) => {
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
        correo:correo,
        Direccion:Direccion,
        Credenciales:Credenciales,
        descripcion:descripcion,
        id_especialidades:id_especialidades,
        id_centros:id_centros,
    })});
    if(response.ok){
      callback();
    }
  }