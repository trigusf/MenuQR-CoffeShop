import { useState } from "react";
import { Link } from "react-router-dom";

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

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!usernameOrEmail.trim() || !password) {
      setStatus("error");
      setMessage("Harap isi username/email dan password terlebih dahulu.");
      return;
    }

    const isValidUser =
      usernameOrEmail.trim().toLowerCase() === "admin" ||
      usernameOrEmail.trim().toLowerCase() === "admin@example.com";

    if (isValidUser && password === "password123") {
      setStatus("success");
      setMessage("Selamat datang kembali! Anda berhasil masuk.");
    } else {
      setStatus("error");
      setMessage("Username atau password tidak valid. Coba lagi.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-2xl shadow-slate-200/80 backdrop-blur-xl">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Selamat Datang</p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900">Masuk ke Akun Anda</h1>
            <p className="mt-2 text-sm text-slate-500">Gunakan halaman ini untuk mengakses dashboard dan pesanan.</p>
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
                placeholder="admin atau admin@example.com"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-3xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Masuk
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-500 space-y-3">
            <p>
              Demo login: <span className="font-medium text-slate-900">admin / password123</span>
            </p>
            <p>
              Belum punya akun?{' '}
              <Link to="/register" className="font-medium text-slate-900 hover:text-slate-700">
                Daftar di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
