const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getDerivaciones= async () => {
    try {
        const response = await fetch(`${baseUrl}derivaciones`, {
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
export const deleteDerivaciones= async (id, callback) => {
  
    const response = await fetch(`${baseUrl}derivaciones/${id}`, {
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
export const updateDerivaciones= async (derivacionesactual,callback) => {
  
    const response = await fetch(`${baseUrl}derivaciones/${derivacionesactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({

        id_pacientes:derivacionesactual.id_pacientes,
        id_doctores:derivacionesactual.id_doctores,
        id_tratamientos:derivacionesactual.id_tratamientos,
        id_centros:derivacionesactual.id_centros,
        id_resultados:derivacionesactual.id_resultados,
        fecha_inicio:derivacionesactual.fecha_inicio,
        fecha_fin:derivacionesactual.fecha_fin,
      
    })});
    if(response.ok){
      callback();
    }
  }

  export const postDerivaciones = async (id_pacientes,id_doctores,id_tratamientos,id_centros,id_resultados,fecha_inicio,fecha_fin,callback) => {
    const response = await fetch(`${baseUrl}derivaciones`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        id_pacientes:id_pacientes,
        id_doctores:id_doctores,
        id_tratamientos:id_tratamientos,
        id_centros:id_centros,
        id_resultados:id_resultados,
        fecha_inicio:fecha_inicio,
        fecha_fin:fecha_fin,
        
    })});
    if(response.ok){
      callback();
    }
  }