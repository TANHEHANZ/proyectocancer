const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getPacientes = async () => {
    try {
        const response = await fetch(`${baseUrl}pacientes`, {
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
export const deletePacientes = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}pacientes/${id}`, {
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
export const updatePacientes = async (pacienteactual,callback) => {
  
    const response = await fetch(`${baseUrl}pacientes/${pacienteactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:pacienteactual.nombre,
        ap_paterno:pacienteactual.ap_paterno,
        ap_materno:pacienteactual.ap_materno,
        sexo:pacienteactual.sexo,
        fecha_nacimiento:pacienteactual.fecha_nacimiento,
        telefono:pacienteactual.telefono,
        ci:pacienteactual.ci,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postPacientes = async (nombre,ap_paterno,ap_materno,sexo,fecha_nacimiento,telefono,ci,callback) => {
    const response = await fetch(`${baseUrl}pacientes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:nombre,
        ap_paterno:ap_paterno,
        ap_materno:ap_materno,
        sexo:sexo,
        fecha_nacimiento:fecha_nacimiento,
        telefono:telefono,
        ci:ci,
    })});
    if(response.ok){
      callback();
    }
  }