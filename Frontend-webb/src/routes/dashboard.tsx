// src/routes/Dashboard.tsx
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { api } from "../services/api.services";
import { DashboardData } from "../types/dashboard.types";
import TemperatureCard from "../components/dashboard/temperatureCard";
import PackageStatsCard from "../components/dashboard/packageStatsCard";
import MainLayout from "../layouts/MainLayout";

const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

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

            {/* Admin-kort, endast synligt för admin */}
            {user?.role === "admin" && (
              <div
                className="card admin-card cursor-pointer"
                onClick={() => navigate("/admin")}
              >
                <h3>Adminpanel</h3>
                <p>Hantera användare och systeminställningar</p>
              </div>
            )}
          </div>
          <PackageStatsCard stats={data.packageStats} />
        </section>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
