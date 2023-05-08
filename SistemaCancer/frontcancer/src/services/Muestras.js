const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getMuestras = async () => {
    try {
        const response = await fetch(`${baseUrl}muestras`, {
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
export const deleteMuestras = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}muestras/${id}`, {
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
export const updateMuestras = async (muestrasactual,callback) => {
  
    const response = await fetch(`${baseUrl}muestras/${muestrasactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
      
        id_pacientes:muestrasactual.id_pacientes,
        id_centros:muestrasactual.id_centros,
        id_tiposcancers:muestrasactual.id_tiposcancers,
        id_enfermeras:muestrasactual.id_enfermeras,
        fecha:muestrasactual.fecha,
      
    })});
    if(response.ok){
      callback();
    }
  }
  export const postmuestras = async (id_pacientes,id_centros,id_tiposcancers,id_enfermeras,fecha,callback) => {
    const response = await fetch(`${baseUrl}muestras`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        id_pacientes:id_pacientes,
        id_centros:id_centros,
        id_tiposcancers:id_tiposcancers,
        id_enfermeras:id_enfermeras,
        fecha:fecha,
      
    })});
    if(response.ok){
      callback();
    }
  }