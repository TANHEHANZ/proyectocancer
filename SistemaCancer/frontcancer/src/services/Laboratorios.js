const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getLaboratotio = async () => {
    try {
        const response = await fetch(`${baseUrl}laboratorio`, {
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
export const deleteLaboratorio = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}laboratorio/${id}`, {
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
export const updateLaboratorio = async (laboratorioactual,callback) => {
  console.log(JSON.stringify({
    nombre:laboratorioactual.nombre,
    ubicacion:laboratorioactual.ubicacion,
    contacto:laboratorioactual.contacto,
    email:laboratorioactual.email,
}));
    const response = await fetch(`${baseUrl}laboratorio/${laboratorioactual.id}`, {
      
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:laboratorioactual.nombre,
        ubicacion:laboratorioactual.ubicacion,
        contacto:laboratorioactual.contacto,
        email:laboratorioactual.email,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postlaboratorio = async (nombre,ubicacion,contacto,email,callback) => {
    const response = await fetch(`${baseUrl}laboratorio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:nombre,
        ubicacion:ubicacion,
        contacto:contacto,
        email:email,
    })});
    if(response.ok){
      callback();
    }
  }