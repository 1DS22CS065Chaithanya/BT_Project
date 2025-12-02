import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

import { Button, Input } from "ui-library";

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
        form,
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
    <div className="max-w-md mx-auto p-8 bg-background dark:bg-black rounded shadow">
      <h1 className="text-xl font-bold mb-4">Login</h1>

      {error && <p className="text-error">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        {/* Username Input */}
        <Input
          label="Username"
          placeholder="Enter your username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />

        {/* Password Input */}
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        {/* Login Button from UI Library */}
        <Button label="Login" type="submit" className="w-full" />
      </form>

      <Link to="/signup" className="block mt-4 text-primary underline">
        Create an account
      </Link>
    </div>
  );
}
