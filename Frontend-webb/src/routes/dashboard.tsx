// src/routes/Dashboard.tsx
import { useEffect, useState } from "react";
import { api } from "../services/api.services";
import { DashboardData } from "../types/dashboard.types";
import TemperatureCard from "../components/dashboard/temperatureCard";
import PackageStatsCard from "../components/dashboard/packageStatsCard";
import MainLayout from "../layouts/MainLayout";

const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getDashboardData();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data)
    return (
      <MainLayout>
        <div className="loading-container">
          <p className="loading-text">Laddar...</p>
        </div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <div className="menu-item active">All Packages</div>
          <div className="menu-item">On Specific Truck</div>
          <div className="menu-item">Packages in Transit</div>
          <div className="menu-item">Delivered Packages</div>
          <div className="menu-item">Packages with Warnings</div>
        </aside>

        <section className="dashboard-main">
          <div className="cards-row">
            <TemperatureCard title="Sensor 1" data={data.temperature1} />
            <TemperatureCard title="Sensor 2" data={data.temperature2} />
          </div>
          <PackageStatsCard stats={data.packageStats} />
        </section>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
