// src/services/api.services.ts
import { User } from "../types/user.types";
import { DashboardData } from "../types/dashboard.types";

let mockUsers: User[] = [
  { id: "1", name: "Anna Andersson", email: "anna@example.com", role: "user" },
  { id: "2", name: "Björn Berg", email: "bjorn@example.com", role: "user" },
];

export const api = {
  async loginUser(email: string, password: string): Promise<{ token: string; user: User }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "chas") {
          resolve({
            token: "fake-jwt-token-123",
            user: {
              id: "user-123",
              email,
              name: "Test User",
              role: "admin",
            },
          });
        } else if (email === "anna@example.com" && password === "chas") {
          resolve({
            token: "fake-jwt-token-456",
            user: {
              id: "user-456",
              email,
              name: "Anna Andersson",
              role: "user",
            },
          });
        } else {
          reject(new Error("Fel användarnamn eller lösenord"));
        }
      }, 600);
    });
  },

  async logoutUser(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 200));
  },

  async getDashboardData(): Promise<DashboardData> {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            temperature1: { temperature: 22, humidity: 55, trend: 5, chartData: [40,50,35,45,55,60,50] },
            temperature2: { temperature: 19, humidity: 63, trend: -3, chartData: [60,65,55,50,45,40,50] },
            packageStats: { total: 120, onTruck: 30, inTransit: 40, delivered: 45, warnings: 5 },
          }),
        800
      )
    );
  },

  async getUsers(): Promise<User[]> {
    return new Promise((resolve) => setTimeout(() => resolve(mockUsers), 400));
  },

  async createUser(user: Omit<User, "id">): Promise<User> {
    return new Promise((resolve) => {
      const newUser = { id: Date.now().toString(), ...user };
      mockUsers.push(newUser);
      setTimeout(() => resolve(newUser), 400);
    });
  },

  async deleteUser(id: string): Promise<void> {
    return new Promise((resolve) => {
      mockUsers = mockUsers.filter((u) => u.id !== id);
      setTimeout(() => resolve(), 300);
    });
  },
};
