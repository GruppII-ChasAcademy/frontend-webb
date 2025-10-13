// src/components/Chart.tsx
interface ChartProps {
  chartData: number[];
}

const Chart = ({ chartData }: ChartProps) => {
  return (
    <div className="chart-container">
      {chartData.map((height, i) => (
        <div
          key={i}
          className="chart-bar"
          style={{ height: `${height}%` }}
          title={`${height}%`}
        ></div>
      ))}
    </div>
  );
};

export default Chart;
