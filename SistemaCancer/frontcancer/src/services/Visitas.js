

const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getVisitas = async () => {
    try {
        const response = await fetch(`${baseUrl}visitas`, {
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
export const deletevisitas = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}visitas/${id}`, {
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
export const updatevisitas = async (visitasactual,callback) => {
  
    const response = await fetch(`${baseUrl}visitas/${visitasactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        id_pacientes:visitasactual.id_pacientes, 
        fecha:visitasactual.fecha,
        detalle:visitasactual.detalle,
       
       
    })});
    if(response.ok){
      callback();
    }
  }
  export const postvisitas = async (id_pacientes,fecha,detalle,callback) => {
    const response = await fetch(`${baseUrl}visitas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        id_pacientes:id_pacientes, 
        fecha:fecha,
        detalle:detalle,
    })});
    if(response.ok){
      callback();
    }
  }