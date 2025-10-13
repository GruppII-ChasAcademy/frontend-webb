// Data för ett temperatur/luftfuktighet-kort
export interface TemperatureData {
  temperature: number;      // T.ex. 22
  humidity: number;         // T.ex. 60
  trend: number;            // T.ex. 5 (betyder +5%)
  chartData: number[];      // Array med siffror för grafen, t.ex. [30, 45, 35...]
}

// Statistik om paket
export interface PackageStats {
  total: number;            // Totalt antal paket
  onTruck: number;          // Paket på lastbil
  inTransit: number;        // Paket på väg
  delivered: number;        // Levererade paket
  warnings: number;         // Paket med varningar
}

// All data som dashboarden behöver
export interface DashboardData {
  temperature1: TemperatureData;  // Första temperaturkortet
  temperature2: TemperatureData;  // Andra temperaturkortet
  packageStats: PackageStats;     // Paketstatistik
}