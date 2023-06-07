import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import styled from "styled-components";

const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/derivaciones');
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
    const { estadotratamiento } = item;

    if (!stateData[estadotratamiento]) {
      stateData[estadotratamiento] = {
        name: estadotratamiento,
        patients: 0,
      };
    }

    stateData[estadotratamiento].patients++;
  });

  const processedData = Object.values(stateData);

  return processedData;
};

const EstadoTratamiento = () => {
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
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} style={{ borderRadius: "0px" }}>
            <XAxis dataKey="name" />
            <YAxis fill="#1b158e" />
            <Tooltip />
            <Legend />
            <CartesianGrid vertical={false} horizontal={true} stroke="rgb(202, 0, 225)" strokeDasharray="2 2" />
            <Bar dataKey="patients" fill="rgb(58, 189, 232)" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default EstadoTratamiento;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 1em;
  color: #fff8;
`;
