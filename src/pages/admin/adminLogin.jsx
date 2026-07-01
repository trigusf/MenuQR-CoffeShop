import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

function AlertSuccess({ message }) {
  return (
    <div className="rounded-3xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-emerald-900 shadow-sm mb-5 flex items-start gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 text-lg font-semibold">
        ✓
      </div>
      <div>
        <p className="font-semibold">Login Berhasil</p>
        <p className="text-sm text-emerald-800/90">{message}</p>
      </div>
    </div>
  );
}

function AlertError({ message }) {
  return (
    <div className="rounded-3xl bg-rose-50 border border-rose-200 px-4 py-3 text-rose-900 shadow-sm mb-5 flex items-start gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-100 text-rose-700 text-lg font-semibold">
        ✕
      </div>
      <div>
        <p className="font-semibold">Login Gagal</p>
        <p className="text-sm text-rose-800/90">{message}</p>
      </div>
    </div>
  );
}

function AdminLogin() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!usernameOrEmail.trim() || !password) {
      setStatus("error");
      setMessage("Username atau password tidak boleh kosong.");
      return;
    }

    if (!supabase) {
      setStatus("error");
      setMessage("Supabase client belum terinisialisasi.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: usernameOrEmail.trim(),
        password,
      });

      if (error || !data?.user) {
        setStatus("error");
        setMessage(error?.message || "Login gagal. Silakan coba lagi.");
        return;
      }

      setStatus("success");
      setMessage("Selamat datang, staf Cuan Coffee! Mengarahkan ke dashboard...");

      setTimeout(() => {
        navigate("/admin-dashboard");
      }, 800);
    } catch (exception) {
      setStatus("error");
      setMessage(exception?.message || "Terjadi kesalahan saat login.");
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(120,53,15,0.14),transparent_28%),#f8f2ec] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-[2rem] border border-amber-100 bg-white/95 p-8 shadow-2xl shadow-amber-200/70 backdrop-blur-xl sm:p-10">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Staff Login ☕</p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900">Masuk untuk mengakses dashboard manajemen menu & orderan</h1>
          </div>

          {status === "success" && <AlertSuccess message={message} />}
          {status === "error" && <AlertError message={message} />}

          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block text-sm font-medium text-slate-700">
              Username / Email
              <input
                type="text"
                value={usernameOrEmail}
                onChange={(event) => setUsernameOrEmail(event.target.value)}
                placeholder="admin atau admin@cuancoffee.com"
                className="mt-3 w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="mt-3 w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-3xl bg-amber-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
            >
              Masuk Sistem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
