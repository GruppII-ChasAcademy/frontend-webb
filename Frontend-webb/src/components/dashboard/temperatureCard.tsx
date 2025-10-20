// src/components/TemperatureCard.tsx
import { TemperatureData } from "../../types/dashboard.types";
import Chart from "../chart";

interface Props {
  title: string;
  data: TemperatureData;
}

const TemperatureCard = ({ title, data }: Props) => {
  return (
    <div className="card temperature-card">
      <h3>{title}</h3>
      <p>🌡️ Temp: {data.temperature}°C</p>
      <p>💧 Fuktighet: {data.humidity}%</p>
      <p>
        📈 Trend:{" "}
        <span className={data.trend >= 0 ? "trend-up" : "trend-down"}>
          {data.trend >= 0 ? `+${data.trend}%` : `${data.trend}%`}
        </span>
      </p>
      <Chart chartData={data.chartData} />
    </div>
  );
};

export default TemperatureCard;
