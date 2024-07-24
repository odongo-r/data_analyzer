import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie, Doughnut, Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const VisualizationSelector = ({ data }) => {
  const [chartType, setChartType] = useState('bar');
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (data && data.length > 0) {
      generateChartData();
    }
  }, [data, chartType]);

  const generateChartData = () => {
    if (data && data.length > 0) {
      const labels = data.map(item => item[Object.keys(item)[0]]);
      const values = data.map(item => item[Object.keys(item)[1]]);

      const commonData = {
        labels,
        datasets: [{
          label: 'Dataset',
          data: values,
          backgroundColor: 'rgba(75,192,192,0.6)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        }]
      };

      setChartData(commonData);
    } else {
      console.error('Data is empty or invalid'); // Debugging line
    }
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  const renderChart = () => {
    if (!chartData || !chartData.datasets) {
      return <p>No data available to render the chart.</p>;
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: 20
      }
    };

    const chartContainerStyle = {
      width: '600px',   // Set the width of the chart container
      height: '400px',  // Set the height of the chart container
      margin: '0 auto', // Center the chart horizontally
      position: 'relative', // Position relative to control chart size
    };

    return (
      <div style={chartContainerStyle}>
        {chartType === 'bar' && <Bar data={chartData} options={chartOptions} />}
        {chartType === 'line' && <Line data={chartData} options={chartOptions} />}
        {chartType === 'pie' && <Pie data={chartData} options={chartOptions} />}
        {chartType === 'doughnut' && <Doughnut data={chartData} options={chartOptions} />}
        {chartType === 'scatter' && <Scatter data={chartData} options={chartOptions} />}
      </div>
    );
  };

  return (
    <div>
      <select onChange={handleChartTypeChange} value={chartType}>
        <option value="bar">Bar Chart</option>
        <option value="line">Line Chart</option>
        <option value="pie">Pie Chart</option>
        <option value="doughnut">Doughnut Chart</option>
        <option value="scatter">Scatter Plot</option>
      </select>
      {renderChart()}
    </div>
  );
};

export default VisualizationSelector;
