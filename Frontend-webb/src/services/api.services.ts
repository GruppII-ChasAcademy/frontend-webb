// src/services/api.service.ts
import { DashboardData } from "../types/dashboard.types";

export const api= {
  async getDashboardData(): Promise<DashboardData> {


    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          temperature1: {
            temperature: 22,
            humidity: 55,
            trend: 5,
            chartData: [40, 50, 35, 45, 55, 60, 50],
          },
          temperature2: {
            temperature: 19,
            humidity: 63,
            trend: -3,
            chartData: [60, 65, 55, 50, 45, 40, 50],
          },
          packageStats: {
            total: 120,
            onTruck: 30,
            inTransit: 40,
            delivered: 45,
            warnings: 5,
          },
        });
      }, 800); 
    });
  },

  
  // Exempel: login (för senare)

  async loginUser(email: string, password: string): Promise<{ token: string }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "1234") {
          resolve({ token: "fake-jwt-token-123" });
        } else {
          reject(new Error("Fel användarnamn eller lösenord"));
        }
      }, 600);
    });
  },
};
