import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const [guestName, setGuestName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!guestName.trim()) {
      setError("Mohon masukkan nama Anda terlebih dahulu");
      return;
    }

    setError("");
    localStorage.setItem("cuanCoffeeGuestName", guestName.trim());
    navigate("/menu", { state: { guestName: guestName.trim() } });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(120,53,15,0.12),transparent_30%),#f8f2ea] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-[2rem] border border-amber-100 bg-white/95 p-8 shadow-2xl shadow-amber-200/60 backdrop-blur-xl sm:p-10">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="flex flex-col gap-4 rounded-[1.75rem] border border-stone-200 bg-amber-50/80 p-6 text-center shadow-sm shadow-amber-100">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-4xl text-amber-900 shadow-inner">
              ☕
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-700">Cuan Coffee & Eatery ☕</p>
              <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Selamat datang!</h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Silakan isi nama Anda untuk mulai memesan.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50/90 p-6 shadow-sm">
            <div className="mb-6 rounded-3xl bg-white/90 p-4 text-sm text-stone-700 shadow-sm">
              <p className="font-semibold text-amber-900">Cafe Vibes</p>
              <p className="mt-2 text-sm text-slate-600">Menu QR spesial dan pesanan cepat untuk tamu kafe.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-amber-100 bg-amber-50/90 px-4 py-3 text-sm text-amber-900 shadow-sm">
                <p className="font-semibold">Fresh Brew</p>
                <p className="mt-1 text-xs text-amber-800/90">Aroma kopi hangat setiap tegukan.</p>
              </div>
              <div className="rounded-3xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 shadow-sm">
                <p className="font-semibold">Quick Order</p>
                <p className="mt-1 text-xs text-stone-600/90">Pesan lewat QR dan nikmati lebih cepat.</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-stone-200 bg-white p-8 shadow-sm shadow-slate-200">
          <div className="mb-6 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-700">Welcome</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Nama Anda / Nomor Meja</h2>
            <p className="mt-2 text-sm text-slate-500">Isi data singkat ini supaya kami tahu siapa yang sedang memesan.</p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Nama Anda / Nomor Meja
              <input
                type="text"
                value={guestName}
                onChange={(event) => setGuestName(event.target.value)}
                placeholder="Contoh: Rina / Meja 5"
                className="mt-3 w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </label>
            {error && (
              <div className="rounded-3xl bg-rose-50 border border-rose-200 px-4 py-3 text-rose-900 text-sm shadow-sm">
                {error}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-3xl bg-amber-900 px-5 py-4 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            Lihat Menu & Pesan ☕
          </button>
        </form>
      </div>
    </div>
  );
}

export default WelcomePage;
