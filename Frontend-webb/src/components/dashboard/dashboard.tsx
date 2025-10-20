// src/components/Dashboard.tsx
import { useEffect, useState } from "react";
import { api } from "../../services/api.services";
import { DashboardData } from "../../types/dashboard.types";
import TemperatureCard from "./temperatureCard";
import PackageStatsCard from "./packageStatsCard";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getDashboardData();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) return <p>Laddar...</p>;

  return (
    <div className="dashboard-container">
      <div className="cards-row">
        <TemperatureCard title="Sensor 1" data={data.temperature1} />
        <TemperatureCard title="Sensor 2" data={data.temperature2} />
      </div>
      <PackageStatsCard stats={data.packageStats} />
    </div>
  );
};

export default Dashboard;