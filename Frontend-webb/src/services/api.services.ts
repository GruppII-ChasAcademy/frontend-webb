import { DashboardData } from "../types/dashboard.types";

export const api = {
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

  async loginUser(
    email: string,
    password: string
  ): Promise<{ token: string; user: { id: string; email: string; name: string } }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "chas") {
          resolve({
            token: "fake-jwt-token-123",
            user: {
              id: "user-123",
              email: email,
              name: "Test User",
            },
          });
        } else {
          reject(new Error("Fel användarnamn eller lösenord"));
        }
      }, 600);
    });
  },

  async logoutUser(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 200);
    });
  },
};