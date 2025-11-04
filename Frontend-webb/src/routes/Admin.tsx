import React, { useEffect, useState } from "react";
import { api } from "../services/api.services";
import { User } from "../types/user.types";
import "../styles/global.css";

const Admin: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [newUser, setNewUser] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    role: "user",
  });

  // Hämta alla användare
  const fetchUsers = async () => {
    setLoading(true);
    const data = await api.getUsers();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Skapa ny användare
  const handleCreateUser = async () => {
    await api.createUser(newUser); // Skapar i API
    await fetchUsers(); // Hämtar uppdaterad lista från API
    setNewUser({ name: "", email: "", role: "user" });
  };

  // Ta bort användare
  const handleDeleteUser = async (id: string) => {
    await api.deleteUser(id);
    await fetchUsers();
  };

  if (loading) return <p className="admin-loading">Laddar användare...</p>;

  return (
    <div className="admin-container">
      <h1 className="admin-title">Adminpanel</h1>

      {/* Ny användare */}
      <div className="admin-form">
        <input
          className="admin-input"
          placeholder="Namn"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          className="admin-input"
          placeholder="E-post"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <select
          className="admin-select"
          value={newUser.role}
          onChange={(e) =>
            setNewUser({ ...newUser, role: e.target.value as "user" | "admin" })
          }
        >
          <option value="user">Användare</option>
          <option value="admin">Admin</option>
        </select>
        <button className="admin-create-btn" onClick={handleCreateUser}>
          Skapa
        </button>
      </div>

      {/* Lista användare */}
      {users.length === 0 ? (
        <p className="admin-empty">Inga användare hittades</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Namn</th>
              <th>E-post</th>
              <th>Roll</th>
              <th>Ta bort</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td className="text-center">
                  <button className="delete-btn" onClick={() => handleDeleteUser(u.id)}>
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
