const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getSeguimiento = async () => {
    try {
        const response = await fetch(`${baseUrl}seguimiento`, {
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
export const deleteSeguimiento = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}seguimiento/${id}`, {
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
export const updateSeguimiento = async (seguimientoactual,callback) => {
  
    const response = await fetch(`${baseUrl}seguimiento/${seguimientoactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        id_pacientes:seguimientoactual.id_pacientes,
        id_muestras:seguimientoactual.id_muestras,
        id_resultados:seguimientoactual.id_resultados,
        id_doctores:seguimientoactual.id_doctores,
        id_centros:seguimientoactual.id_centros,
        fecha:seguimientoactual.fecha,
       
    })});
    if(response.ok){
      callback();
    }
  }
  export const postseguimiento = async (id_muestras,id_resultados,id_doctores,id_centros,fecha,id_pacientes,callback) => {
    const response = await fetch(`${baseUrl}seguimiento`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        id_pacientes:id_pacientes,
        id_muestras:id_muestras,
        id_resultados:id_resultados,
        id_doctores:id_doctores,
        id_centros:id_centros,
        fecha:fecha,
      
    })});
    if(response.ok){
      callback();
    }
  }