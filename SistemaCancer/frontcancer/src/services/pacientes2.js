const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getPacientedos = async () => {
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
export const deletePacientedos = async (id, callback) => {
  
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
export const updatePacientedos = async (pacienteactualdos,callback) => {
  
    const response = await fetch(`${baseUrl}pacientes/${pacienteactualdos.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:pacienteactualdos.nombre,
        ap_paterno:pacienteactualdos.ap_paterno,
        ap_materno:pacienteactualdos.ap_materno,
        sexo:pacienteactualdos.sexo,
        fecha_nacimiento:pacienteactualdos.fecha_nacimiento,
        telefono:pacienteactualdos.telefono,
        ci:pacienteactualdos.ci,
        direccion:pacienteactualdos.direccion,
        correo:pacienteactualdos.correo,
        edad:pacienteactualdos.edad,
        id_doctores:pacienteactualdos.id_doctores,
        id_enfermeras:pacienteactualdos.id_enfermeras,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postPacientedos = async (nombre,ap_paterno,ap_materno,sexo,fecha_nacimiento,telefono,ci,direccion,correo,edad,id_doctores,id_enfermeras,callback) => {
    const response = await fetch(`http://127.0.0.1:8000/api/pacientes`, {
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
        direccion:direccion,
        correo:correo,
        edad:edad,
        id_doctores:id_doctores,
        id_enfermeras:id_enfermeras,
    })});
    if(response.ok){
      callback();
    }
  }