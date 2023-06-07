import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { Container, Divinput, Divboton, Botonagregar, Select } from "../styles/CrudStyle"
import { getDoctor } from "../services/Doctor";
import { getEnfermera } from "../services/Enfermera";
import { postPacientedos ,updatePacientedos } from "../services/pacientes2";

const PacientesForm = ({
  getApi,
  pacienteactualdos,
  setPacienteactualdos,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  const [ap_paterno, setAp_paterno] = useState("");
  const [ap_materno, setAp_materno] = useState("");
  const [sexo, setSexo] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ci, setCi] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [id_doctores, setId_doctores] = useState("");
  const { data: doc } = UseFech(getDoctor);
  const [id_enfermeras, setId_enfermeras] = useState("");
  const { data: enfe } = UseFech(getEnfermera);

  useEffect(() => {
    if (Object.keys(pacienteactualdos).length > 0) {
      setNombre(pacienteactualdos.nombre);
      setAp_paterno(pacienteactualdos.ap_paterno);
      setAp_materno(pacienteactualdos.ap_materno);
      setSexo(pacienteactualdos.sexo);
      setFecha_nacimiento(pacienteactualdos.fecha_nacimiento);
      setTelefono(pacienteactualdos.telefono);
      setCi(pacienteactualdos.ci);
      setDireccion(pacienteactualdos.direccion);
      setCorreo(pacienteactualdos.correo);
      setEdad(pacienteactualdos.edad);
    }
    return () => {
      setPacienteactualdos({});
    };
  }, [pacienteactualdos]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(pacienteactualdos).length > 0) {
      updatePacientedos(
        {
          id: pacienteactualdos.id,
          nombre: nombre,
          ap_paterno: ap_paterno,
          ap_materno: ap_materno,
          sexo: sexo,
          fecha_nacimiento: fecha_nacimiento,
          telefono: telefono,
          ci: ci,
          direccion: direccion,
          correo: correo,
          edad: edad,
          id_doctores: id_doctores,
          id_enfermeras: id_enfermeras,
        },
        () => {
          setNombre("");
          setAp_paterno("");
          setAp_materno("");
          setSexo("");
          setFecha_nacimiento("");
          setTelefono("");
          setCi("");
          setDireccion("");
          setCorreo("");
          setEdad("");
          closeModal();
          setPacienteactualdos({});
          getApi();
        }
      );
    } else {
      postPacientedos(
        nombre,
        ap_paterno,
        ap_materno,
        sexo,
        fecha_nacimiento,
        telefono,
        ci,
        direccion,
        correo,
        edad,
        id_doctores,
        id_enfermeras,
        () => {
          setNombre("");
          setAp_paterno("");
          setAp_materno("");
          setSexo("");
          setFecha_nacimiento("");
          setTelefono("");
          setCi("");
          setDireccion("");
          setCorreo("");
          setEdad("");
          getApi();
          closeModal();
        }
      );
    }

    console.log("Nombre:", nombre);
    console.log("Apellido paterno:", ap_paterno);
    console.log("Apellido materno:", ap_materno);
    console.log("Sexo:", sexo);
    console.log("Fecha de nacimiento:", fecha_nacimiento);
    console.log("Teléfono:", telefono);
    console.log("CI:", ci);
    console.log("Dirección:", direccion);
    console.log("Correo:", correo);
    console.log("Edad:", edad);
    console.log("ID de doctores:", id_doctores);
    console.log("ID de enfermeras:", id_enfermeras);
  };

  return (
    <Container>
      <form>
        <Divinput>
          <label>Nombre:</label>
          <input
            name="Nombre"
            placeholder="Ingrese un Nombre"
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <label>Apellido paterno:</label>
          <input
            name="app"
            placeholder="Ingrese apellido paterno"
            type="text"
            required
            value={ap_paterno}
            onChange={(e) => setAp_paterno(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <label>Apellido materno:</label>
          <input
            name="ap_materno"
            placeholder="Ingrese apellido materno"
            type="text"
            required
            value={ap_materno}
            onChange={(e) => setAp_materno(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <label>Sexo:</label>
          <input
            name="sexo"
            placeholder="Seleccione un sexo"
            type="text"
            required
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <label>Fecha:</label>
          <input
            type="date"
            placeholder="Ingrese Fecha"
            value={fecha_nacimiento}
            onChange={(e) => setFecha_nacimiento(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <label>Teléfono:</label>
          <input
            name="Telefono"
            placeholder="Seguimiento de teléfono"
            type="number"
            value={telefono}
            required
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <label>CI:</label>
          <input
            name="ci"
            placeholder="Ingrese un CI"
            type="number"
            required
            value={ci}
            onChange={(e) => setCi(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <label>Dirección:</label>
          <input
            name="direccion"
            placeholder="Ingrese una dirección"
            type="text"
            required
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <label>Correo:</label>
          <input
            name="correo"
            placeholder="Ingrese un correo"
            type="text"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <label>Edad:</label>
          <input
            name="edad"
            placeholder="Ingrese una edad"
            type="number"
            required
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <label>Doctor</label>
          <Select onChange={(e) => setId_doctores(e.target.value)}>
            <option>Seleccione</option>
            {doc.map((v, i) => (
              <option key={i} value={v.id}>
                {v.nombre}
              </option>
            ))}
          </Select>
        </Divinput>
        <Divinput>
          <label>Enfermera</label>
          <Select onChange={(e) => setId_enfermeras(e.target.value)}>
            <option>Seleccione</option>
            {enfe.map((v, i) => (
              <option key={i} value={v.id}>
                {v.nombre}
              </option>
            ))}
          </Select>
        </Divinput>
        <Divboton>
          <Botonagregar onClick={(e) => updatepost(e)}>
            {Object.keys(pacienteactualdos).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </Container>
  );
};

export default PacientesForm;
