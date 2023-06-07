const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getTratamiento = async () => {
    try {
        const response = await fetch(`${baseUrl}tratamiento`, {
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
export const deleteTratamiento = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}tratamiento/${id}`, {
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
export const updateTratamiento = async (tratamientoactual,callback) => {
  
    const response = await fetch(`${baseUrl}tratamiento/${tratamientoactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        id_pacientes:tratamientoactual.id_pacientes, 
        id_doctores:tratamientoactual.id_doctores,
        id_tipotratamientos:tratamientoactual.id_tipotratamientos,
        fecha_inicio:tratamientoactual.fecha_inicio,
        fecha_fin:tratamientoactual.fecha_fin,
        observaciones:tratamientoactual.observaciones,
        estadotratamiento:tratamientoactual.estadotratamiento,
       
    })});
    if(response.ok){
      callback();
    }
  }
  export const postTratamiento = async (id_pacientes,id_tipotratamientos,id_doctores,fecha_inicio,fecha_fin,observaciones,estadotratamiento,callback) => {
    const response = await fetch(`${baseUrl}tratamiento`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({

        id_pacientes:id_pacientes, 
        id_doctores:id_doctores,
        id_tipotratamientos:id_tipotratamientos,
        fecha_inicio:fecha_inicio,
        fecha_fin:fecha_fin,
        observaciones:observaciones,
        estadotratamiento:estadotratamiento,
      
    })});
    if(response.ok){
      callback();
    }
  }