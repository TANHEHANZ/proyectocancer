import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import styled from "styled-components";

const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/resultas');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    return [];
  }
};

const processDataForChart = (data) => {
  const stateData = {};

  data.forEach((item) => {
    const { resultados, nombre_laboratorio } = item;

    if (!stateData[resultados]) {
      stateData[resultados] = {};
    }

    if (!stateData[resultados][nombre_laboratorio]) {
      stateData[resultados][nombre_laboratorio] = 0;
    }

    stateData[resultados][nombre_laboratorio]++;
  });

  const processedData = Object.keys(stateData).map((resultados) => {
    const laboratories = stateData[resultados];
    return {
      resultados,
      ...Object.keys(laboratories).reduce(
        (acc, laboratory) => ({
          ...acc,
          [laboratory]: laboratories[laboratory],
        }),
        {}
      ),
    };
  });

  return processedData;
};

const CantidadTipoR = () => {
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
    <ChartContainer>
      <ResponsiveContainer width="50%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="resultados" />
          <YAxis />
          <Tooltip />
          <Legend />
          {Object.keys(chartData[0] || {}).map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill="rgb(58, 189, 232)" barSize={20}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default CantidadTipoR;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 1em;
  color: #fff8;
`;

const getRandomColor = () => {
  return Math.floor(Math.random() * 256);
};

