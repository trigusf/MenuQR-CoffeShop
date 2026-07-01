import { useState } from "react";
import { Link } from "react-router-dom";

function AlertSuccess({ message }) {
  return (
    <div className="rounded-3xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-emerald-900 shadow-sm mb-5 flex items-start gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 text-lg font-semibold">
        ✓
      </div>
      <div>
        <p className="font-semibold">Pendaftaran Berhasil</p>
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
        <p className="font-semibold">Pendaftaran Gagal</p>
        <p className="text-sm text-rose-800/90">{message}</p>
      </div>
    </div>
  );
}

function Register() {
  const [fullName, setFullName] = useState("");
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !fullName.trim() ||
      !usernameOrEmail.trim() ||
      !password ||
      !confirmPassword
    ) {
      setStatus("error");
      setMessage("Semua kolom harus diisi terlebih dahulu.");
      return;
    }

    if (password !== confirmPassword) {
      setStatus("error");
      setMessage("Password dan Konfirmasi Password harus sama.");
      return;
    }

    setStatus("success");
    setMessage("Akun berhasil dibuat! Selamat bergabung di Cuan Coffee Club.");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(120,53,15,0.12),transparent_30%),#f7f2ec] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-100 bg-white/95 p-8 shadow-2xl shadow-amber-200/70 backdrop-blur-xl sm:p-10">
          <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-amber-100/80 blur-3xl"></div>
          <div className="absolute right-6 top-6 flex flex-col gap-2">
            <span className="rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-800 shadow-sm">
              Special Beans
            </span>
            <span className="rounded-full bg-stone-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-stone-700 shadow-sm">
              Freshly Brewed
            </span>
          </div>
          <div className="absolute -right-10 bottom-10 h-28 w-28 rounded-full border border-amber-200 bg-amber-50/70 blur-2xl"></div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.28em] text-amber-700">☕ Join Cuan Coffee Club</p>
                <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Buat akun untuk mulai menikmati kemudahan pesan menu via QR dan kumpulkan poin reward!
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
                  Daftar sekarang dan nikmati ragam kopi hangat, menu croissant istimewa, serta pengalaman kafe digital yang nyaman.
                </p>
              </div>

              <div className="grid gap-3">
                <div className="rounded-3xl border border-amber-100 bg-amber-50/90 px-4 py-3 text-sm text-amber-900 shadow-sm">
                  <span className="font-semibold">Freshly Brewed</span> • Kopi diseduh segar setiap hari.
                </div>
                <div className="rounded-3xl border border-stone-200 bg-stone-50/90 px-4 py-3 text-sm text-stone-800 shadow-sm">
                  <span className="font-semibold">Special Beans</span> • Pilihan biji kopi premium dengan aroma hangat.
                </div>
                <div className="rounded-3xl border border-stone-200 bg-stone-50/90 px-4 py-3 text-sm text-stone-800 shadow-sm">
                  <span className="font-semibold">Cafe Vibes</span> • Suasana cozy, modern, dan mobile-friendly.
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-amber-100 bg-slate-50/95 p-6 shadow-sm shadow-slate-200">
              {status === "success" && <AlertSuccess message={message} />}
              {status === "error" && <AlertError message={message} />}

              <form onSubmit={handleSubmit} className="space-y-5">
                <label className="block text-sm font-medium text-slate-700">
                  Nama Lengkap
                  <input
                    type="text"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder="Masukkan nama lengkap"
                    className="mt-3 w-full rounded-3xl border border-stone-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Username / Email
                  <input
                    type="text"
                    value={usernameOrEmail}
                    onChange={(event) => setUsernameOrEmail(event.target.value)}
                    placeholder="admin@example.com"
                    className="mt-3 w-full rounded-3xl border border-stone-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Password
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="••••••••"
                    className="mt-3 w-full rounded-3xl border border-stone-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Konfirmasi Password
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    placeholder="Ulangi password"
                    className="mt-3 w-full rounded-3xl border border-stone-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-3xl bg-amber-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200/50 transition hover:bg-amber-800"
                >
                  Daftar & Pesan Kopi ☕
                </button>
              </form>

              <div className="mt-6 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <p>
                  Sudah jadi member?{' '}
                  <Link to="/" className="font-semibold text-amber-800 hover:text-amber-900">
                    Masuk di sini
                  </Link>
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-2 text-amber-900">
                    <span>☕</span>
                    Kopi Hangat
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-2 text-stone-700">
                    <span>🥐</span>
                    Croissant Fresh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
