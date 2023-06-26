const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getDoctor = async () => {
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
export const deleteDoctor = async (id, callback) => {
  
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
export const updateDoctor = async (doctoresactual,callback) => {
  console.log(JSON.stringify({
    nombre:doctoresactual.nombre,
    ap_paterno:doctoresactual.ap_paterno,
    ap_materno:doctoresactual.ap_materno,
    ci:doctoresactual.ci,
    correo:doctoresactual.correo,
    Direccion:doctoresactual.Direccion,
    Credenciales:doctoresactual.Credenciales,
    descripcion:doctoresactual.descripcion,
    id_especialidades:doctoresactual.id_especialidades,
    id_centros:doctoresactual.id_centros,
}))
    const response = await fetch(`${baseUrl}doctores/${doctoresactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:doctoresactual.nombre,
        ap_paterno:doctoresactual.ap_paterno,
        ap_materno:doctoresactual.ap_materno,
        ci:doctoresactual.ci,
        correo:doctoresactual.correo,
        direccion:doctoresactual.direccion,
        credenciales:doctoresactual.credenciales,
        descripcion:doctoresactual.descripcion,
        id_especialidades:doctoresactual.id_especialidades,
        id_centros:doctoresactual.id_centros,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postDoctor = async (nombre,ap_paterno,ap_materno,ci,correo,direccion,credenciales,descripcion,id_especialidades,id_centros,callback) => {
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
        direccion:direccion,
        credenciales:credenciales,
        descripcion:descripcion,
        id_especialidades:id_especialidades,
        id_centros:id_centros,
    })});
    if(response.ok){
      callback();
    }
  }