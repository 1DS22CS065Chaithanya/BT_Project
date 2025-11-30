
import React, { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


import { Input, Button } from "ui-library";

type FormState = {
  username: string;
  email: string;
  password: string;
};

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    username: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);



  const usernameError = useMemo(() => {
    if (!submitted) return "";
    if (!form.username.trim()) return "Username is required";
    if (form.username.trim().length < 3) return "Username must be at least 3 characters";
    return "";
  }, [form.username, submitted]);

  // const emailError = useMemo(() => {
  //   if (!submitted) return "";
  //   if (!form.email.trim()) return "Email is required";
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(form.email.trim())) return "Enter a valid email address";
  //   return "";
  // }, [form.email, submitted]);
  const emailError = useMemo(() => {
  if (!submitted) return "";
  if (!form.email.trim()) return "Email is required";

  // Reject capital letters
  if (/[A-Z]/.test(form.email)) {
    return "Email must not contain capital letters";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email.trim())) {
    return "Enter a valid email address";
  }

  return "";
}, [form.email, submitted]);


  const passwordError = useMemo(() => {
  if (!submitted) return "";
  if (!form.password) return "Password is required";
  if (form.password.length < 8) return "Password must be at least 8 characters";
  if (!/[A-Z]/.test(form.password)) return "Password must contain at least one uppercase letter";
  if (!/[a-z]/.test(form.password)) return "Password must contain at least one lowercase letter";
  if (!/\d/.test(form.password)) return "Password must contain at least one digit";
  if (!/@/.test(form.password)) return "Password must contain '@'";
  return "";
}, [form.password, submitted]);


  const isFormValid =
    !usernameError &&
    !emailError &&
    !passwordError &&
    form.username.trim() &&
    form.email.trim() &&
    form.password;



  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setServerError(null);

    if (!isFormValid) return;

    setLoading(true);
    try {
      await axios.post("http://127.0.0.1:3001/signup", {
        username: form.username.trim(),
        email: form.email.trim(),
        password: form.password,
      });

      navigate("/login");
    } catch (err: any) {
      const msg = err?.response?.data?.error || "Signup failed — try again";
      setServerError(msg);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="max-w-md mx-auto p-8 bg-background dark:bg-textPrimary rounded shadow">
      <h1 className="text-xl font-bold mb-4 text-black dark:text-background">
        Create Account
      </h1>

      {serverError && <div className="text-error mb-3">{serverError}</div>}

      <form onSubmit={handleSignup} className="space-y-4">

        {/* USERNAME */}
        <div>
          <Input
            label="Username"
            placeholder="Enter username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          {usernameError && (
            <p className="text-sm text-error mt-1">{usernameError}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <Input
            label="Email"
            placeholder="you@example.com"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          {emailError && (
            <p className="text-sm text-error mt-1">{emailError}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <Input
            label="Password"
            placeholder="Choose a strong password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          {passwordError && (
            <p className="text-sm text-error mt-1">{passwordError}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <Button
          type="submit"
          disabled={!isFormValid || loading}
          label={loading ? "Signing up..." : "Signup"}
          className="w-full"
        />
      </form>

      <div className="mt-4 text-sm">
        <Link to="/login" className="text-primary underline">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}
