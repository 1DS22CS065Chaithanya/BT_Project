// src/pages/Signup.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const nav = useNavigate();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:3001/signup", form);
      nav("/login");
    } catch (err: any) {
      setError(err.response?.data?.error || "Signup failed");
    }
  }

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-xl font-bold mb-4">Create Account</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSignup} className="space-y-4">
        <input
          className="border p-2 w-full text-black"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          className="border p-2 w-full text-black"
          placeholder="Email"
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="border p-2 w-full text-black"
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-primary text-white px-4 py-2 rounded w-full">
          Signup
        </button>
      </form>

      <Link to="/login" className="block mt-4 text-blue-500 underline">
        Already have an account?
      </Link>
    </div>
  );
}
