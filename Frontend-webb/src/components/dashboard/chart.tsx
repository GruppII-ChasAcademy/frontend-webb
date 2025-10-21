// src/components/dashboard/Chart.tsx
interface ChartProps {
  chartData: number[];
}

const Chart = ({ chartData }: ChartProps) => {
  return (
    <div className="chart-wrapper">
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

      <div className="chart-labels">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
};

export default Chart;
