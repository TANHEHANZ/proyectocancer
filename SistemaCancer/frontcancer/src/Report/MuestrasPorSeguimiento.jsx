import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
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
    const { descripcion_muestra } = item;

    if (!stateData[descripcion_muestra]) {
      stateData[descripcion_muestra] = {
        name: descripcion_muestra,
        count: 0,
      };
    }

    stateData[descripcion_muestra].count++;
  });

  const processedData = Object.values(stateData);

  return processedData;
};

const CantidadSeguimiento = () => {
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
            <CartesianGrid
              vertical={false}
              horizontal={true}
              stroke="rgb(202, 0, 225)"
              strokeDasharray="2 2"
            />
            <Bar dataKey="count" fill="rgb(58, 189, 232)" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default CantidadSeguimiento;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 1em;
  color: #fff8;
`;
