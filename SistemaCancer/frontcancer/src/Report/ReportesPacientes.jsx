import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import styled from "styled-components";

const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/doctores');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    return [];
  }
};

const processDataForChart = (data) => {
  const centerData = {};

  data.forEach((item) => {
    const { nombre_centro } = item;

    if (!centerData[nombre_centro]) {
      centerData[nombre_centro] = {
        name: nombre_centro,
        doctores: 0,
      };
    }

    centerData[nombre_centro].doctores++;
  });

  const processedData = Object.values(centerData);

  return processedData;
};

const Porcentro = () => {
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
            <CartesianGrid vertical={false} horizontal={true} stroke="#ffffffef" strokeDasharray="2 2" />
            <Bar dataKey="doctores" fill="rgb(58, 189, 232)" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default Porcentro;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:transparent;
  margin-top: 1em;
`;
