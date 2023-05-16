import React, { useState } from 'react';

const ReporteForm = () => {
  const [campos, setCampos] = useState([]);

  const handleCheckboxChange = (event) => {
    const campo = event.target.value;
    if (event.target.checked) {
      setCampos([...campos, campo]);
    } else {
      setCampos(campos.filter((c) => c !== campo));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Enviar los campos seleccionados al backend
    fetch('http://127.0.0.1:8000/api/generar-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ campos }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Descargar el reporte generado
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'reporte.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="checkbox" value="nombre" onChange={handleCheckboxChange} />
        Nombre
      </label>
      <label>
        <input type="checkbox" value="ap_materno" onChange={handleCheckboxChange} />
        Apellido Materno
      </label>
      <label>
        <input type="checkbox" value="sexo" onChange={handleCheckboxChange} />
        Sexo
      </label>
      <label>
        <input type="checkbox" value="fecha_nacimiento" onChange={handleCheckboxChange} />
        Fecha de Nacimiento
      </label>
      <label>
        <input type="checkbox" value="telefono" onChange={handleCheckboxChange} />
        Teléfono
      </label>
      <label>
        <input type="checkbox" value="ci" onChange={handleCheckboxChange} />
        CI
      </label>
      <button type="submit">Generar Reporte</button>
    </form>
  );
};

export default ReporteForm;
