
const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const setUsuarios = async () => {
    try {
        const response = await fetch(`${baseUrl}usuarios`, {
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
export const deleteusuarios = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}usuarios/${id}`, {
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
export const updateusuarios = async (usersactual,callback) => {
  
    const response = await fetch(`${baseUrl}usuarios/${usersactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:usersactual.nombre,
        email:usersactual.email,
        telefono:usersactual.telefono,
        rol:usersactual.rol,
        password:usersactual.password,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postusuarios = async (nombre,email,telefono,rol,password,password_confirmation,callback) => {
    const response = await fetch(`${baseUrl}usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:nombre,
        email:email,
        telefono:telefono,
        rol:rol,
        password:password,
        password_confirmation:password_confirmation,
    })});
    if(response.ok){
      callback();
    }
  }