const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const setPosttratamientos = async () => {
    try {
        const response = await fetch(`${baseUrl}post-tratamientos`, {
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
export const deletePosttratamiento = async (id, callback) => {
    const response = await fetch(`${baseUrl}post-tratamientos/${id}`, {
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
export const updateposttratamiento = async (postactual,callback) => {
    const response = await fetch(`${baseUrl}post-tratamientos/${postactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        titulo:postactual.titulo,
        descripcion:postactual.descripcion,
        contenido:postactual.contenido,
        fecha_publicar:postactual.fecha_publicar,
    })});
    if(response.ok){
      callback();
    }
  }
  export const posttratamietopost = async (titulo,descripcion,contenido,fecha_publicar,callback) => {
    const response = await fetch(`${baseUrl}post-tratamientos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        titulo:titulo,
        descripcion:descripcion,
        contenido:contenido,
        fecha_publicar:fecha_publicar,
    })});
    if(response.ok){
      callback();
    }
  }