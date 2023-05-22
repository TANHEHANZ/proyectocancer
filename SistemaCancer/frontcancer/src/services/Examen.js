const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getExamen = async () => {
    try {
        const response = await fetch(`${baseUrl}examen`, {
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
export const deleteExamen = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}examen/${id}`, {
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
export const updateExamen = async (examenactual,callback) => {
  
    const response = await fetch(`${baseUrl}examen/${examenactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        id_pacientes:examenactual.id_pacientes,
        id_tipoexamens:examenactual.id_tipoexamens,
        descripcion:examenactual.descripcion,
        fecha:examenactual.fecha,
        resultado:examenactual.resultado,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postExamen = async (id_pacientes,id_tipoexamens,descripcion,fecha,resultado,callback) => {
    const response = await fetch(`${baseUrl}examen`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        id_pacientes:id_pacientes,
        id_tipoexamens:id_tipoexamens,
        descripcion:descripcion,
        fecha:fecha,
        resultado:resultado,
    })});
    if(response.ok){
      callback();
    }
  }