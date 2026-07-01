import { useState } from "react";

const dummyMenu = [
  {
    id: 1,
    name: "Espresso Single",
    category: "Coffee",
    price: 18000,
    photo: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=120&q=80",
    status: "Tersedia",
  },
  {
    id: 2,
    name: "Croissant Butter",
    category: "Pastry",
    price: 22000,
    photo: "https://images.unsplash.com/photo-1505253213295-8d6518ccf8da?auto=format&fit=crop&w=120&q=80",
    status: "Habis",
  },
  {
    id: 3,
    name: "Cappuccino Caramel",
    category: "Coffee",
    price: 32000,
    photo: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=120&q=80",
    status: "Tersedia",
  },
];

function formatPrice(price) {
  return `Rp ${price.toLocaleString("id-ID")}`;
}

const AdminDashboard = () => {
  const [menuItems, setMenuItems] = useState(dummyMenu);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setOpenDelete(true);
  };

  const confirmDelete = () => {
    setMenuItems((items) => items.filter((menu) => menu.id !== selectedItem?.id));
    setOpenDelete(false);
    setSelectedItem(null);
  };

  const cancelDelete = () => {
    setOpenDelete(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Manajemen Menu ☕</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Manajemen Menu</h1>
            <p className="mt-2 text-sm text-slate-600">Kelola item menu kafe Anda dengan cepat dan profesional.</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-amber-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200/50 transition hover:bg-amber-800">
            + Tambah Menu Baru
          </button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
          <table className="min-w-full border-separate border-spacing-0">
            <thead className="bg-stone-100">
              <tr>
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-stone-600">Foto</th>
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-stone-600">Nama Menu</th>
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-stone-600">Kategori</th>
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-stone-600">Harga</th>
                <th className="p-4 text-center text-xs font-semibold uppercase tracking-wider text-stone-600">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white text-sm text-slate-700">
              {menuItems.map((item) => (
                <tr key={item.id} className="hover:bg-stone-50">
                  <td className="p-4 align-middle">
                    <img src={item.photo} alt={item.name} className="h-16 w-16 rounded-2xl object-cover" />
                  </td>
                  <td className="p-4 align-middle font-medium text-slate-900">{item.name}</td>
                  <td className="p-4 align-middle text-slate-600">{item.category}</td>
                  <td className="p-4 align-middle text-slate-800">{formatPrice(item.price)}</td>
                  <td className="p-4 align-middle text-center">
                    <div className="inline-flex items-center gap-2">
                      <button className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 transition hover:bg-amber-100">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(item)}
                        className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 transition hover:bg-rose-100"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {openDelete && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 py-6">
          <div className="w-full max-w-md rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-400/20">
            <div className="mb-5 text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Konfirmasi Hapus</p>
              <h2 className="mt-4 text-xl font-semibold text-slate-900">Apakah Anda yakin ingin menghapus menu ini?</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Tindakan ini tidak dapat dibatalkan.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl border border-stone-200 bg-stone-50 px-4 py-4 text-sm text-slate-700">
                <p className="font-medium">Menu:</p>
                <p className="mt-1 text-slate-900">{selectedItem.name} - {selectedItem.category}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  onClick={cancelDelete}
                  className="rounded-full border border-stone-300 bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-200"
                >
                  Batal
                </button>
                <button
                  onClick={confirmDelete}
                  className="rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
                >
                  Ya, Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
