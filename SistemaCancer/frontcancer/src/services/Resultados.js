const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getResultados = async () => {
    try {
        const response = await fetch(`${baseUrl}resultados`, {
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
export const deleteResultados = async (id, callback) => {
   
    const response = await fetch(`${baseUrl}resultados/${id}`, {
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
export const updateResultados = async (resultadoactual,callback) => {
  
    const response = await fetch(`${baseUrl}resultados/${resultadoactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        resultados:resultadoactual.resultados,
        id_pacientes:resultadoactual.id_pacientes,
        id_tiposcancers:resultadoactual.id_tiposcancers,
        id_muestras:resultadoactual.id_muestras,
        id_laboratorios:resultadoactual.id_laboratorios,
        fecha:resultadoactual.fecha,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postResultados = async (resultados,id_pacientes,id_tiposcancers,id_muestras,id_laboratorios,fecha,callback) => {
    const response = await fetch(`${baseUrl}resultados`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        resultados:resultados,
        id_pacientes:id_pacientes,
        id_tiposcancers:id_tiposcancers,
        id_muestras:id_muestras,
        id_laboratorios:id_laboratorios,
        fecha:fecha,
    
    })});
    if(response.ok){
      callback();
    }
  }