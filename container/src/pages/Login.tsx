import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

interface LoginResponse {
  token: string;
  username: string;
  email: string;
}

export default function Login() {
  const nav = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await axios.post<LoginResponse>(
        "http://127.0.0.1:3001/login",
        form
      );

      login(res.data.token, {
        username: res.data.username,
        email: res.data.email,
      });

      nav("/");
    } catch (err: any) {
      setError(err.response?.data?.error || "Login failed");
    }
  }

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-xl font-bold mb-4">Login</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-primary text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>

      <Link to="/signup" className="block mt-4 text-blue-500 underline">
        Create an account
      </Link>
    </div>
  );
}
