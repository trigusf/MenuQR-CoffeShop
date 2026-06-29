import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Ringkas */}
      <aside className="w-64 bg-slate-900 text-slate-100 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold border-b border-slate-700 pb-4 mb-6">☕ Cafe Admin</h2>
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-2 bg-amber-700 text-white px-4 py-2.5 rounded-lg font-medium">
              <span>📋</span> <span>Kelola Menu</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100 px-4 py-2.5 rounded-lg font-medium transition-colors">
              <span>🛒</span> <span>Pesanan Masuk</span>
            </a>
          </nav>
        </div>
        <div className="text-xs text-slate-500 border-t border-slate-700 pt-4">
          Logged in as Admin
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Daftar Menu Kafe</h1>
            <p className="text-sm text-slate-500">Tambah, edit, atau hapus menu QR-code toko Anda.</p>
          </div>
          <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-4 py-2 rounded-lg text-sm shadow transition-all flex items-center gap-1">
            <span>+</span> Tambah Menu Baru
          </button>
        </div>

        {/* Info Cards Ringkas */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500 font-medium">Total Menu</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">42 Produk</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500 font-medium">Menu Aktif</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">38 Produk</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500 font-medium">Kosong/Habis</p>
            <p className="text-2xl font-bold text-rose-600 mt-1">4 Produk</p>
          </div>
        </div>

        {/* Table Menu (Simulasi) */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                <th className="p-4">Nama Menu</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Harga</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
              <tr>
                <td className="p-4 font-medium text-slate-900">Espresso Single</td>
                <td className="p-4">Coffee</td>
                <td className="p-4">Rp 18.000</td>
                <td className="p-4"><span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-medium">Tersedia</span></td>
                <td className="p-4 text-center space-x-2">
                  <button className="text-amber-600 hover:underline font-medium">Edit</button>
                  <button className="text-rose-600 hover:underline font-medium">Hapus</button>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-900">Croissant Butter</td>
                <td className="p-4">Pastry</td>
                <td className="p-4">Rp 22.000</td>
                <td className="p-4"><span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full font-medium">Habis</span></td>
                <td className="p-4 text-center space-x-2">
                  <button className="text-amber-600 hover:underline font-medium">Edit</button>
                  <button className="text-rose-600 hover:underline font-medium">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
