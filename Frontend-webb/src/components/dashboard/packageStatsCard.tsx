// src/components/PackageStatsCard.tsx
import { PackageStats } from "../../types/dashboard.types";

interface Props {
  stats: PackageStats;
}

export default function PackageStatsCard({ stats }: Props) {
  return (
    <div className="card package-card">
      <h3>📦 Paketstatus</h3>
      <ul>
        <li>Totalt: {stats.total}</li>
        <li>På lastbil: {stats.onTruck}</li>
        <li>På väg: {stats.inTransit}</li>
        <li>Levererade: {stats.delivered}</li>
        <li>Varningar: {stats.warnings}</li>
      </ul>
    </div>
  );
}
