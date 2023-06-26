import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import styled from "styled-components";

const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/pacientes');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    return [];
  }
};

const processDataForChart = (data) => {
  const ageData = {};

  data.forEach((item) => {
    const { edad } = item;

    if (!ageData[edad]) {
      ageData[edad] = {
        name: `${edad} años`,
        count: 0,
      };
    }

    ageData[edad].count++;
  });

  const processedData = Object.values(ageData);

  return processedData;
};

const ReportesPacienteEdad = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromAPI();
      const processedData = processDataForChart(data);
      setChartData(processedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ChartContainer>
        <h1>Reporte gráfico por rango de edades</h1>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} style={{ borderRadius: "0px" }}>
            <XAxis dataKey="name" />
            <YAxis fill="#1b158e" />
            <Tooltip />
            <Legend />
            <CartesianGrid vertical={false} horizontal={true} stroke="#ffffffef" strokeDasharray="2 2" />
            <Bar dataKey="count" fill="rgb(58, 189, 232)" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default ReportesPacienteEdad;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  margin-top: 1em;
  padding: 1em;
  & h1 {
    color: #fff8;
    font-size: 1em;
    font-weight: 100;
    margin: 1em 0;
  }
`;
