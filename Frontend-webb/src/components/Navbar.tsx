import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/">Hem</Link>{" | "}
      <Link to="/about">Om</Link>
    </nav>
  );
}
