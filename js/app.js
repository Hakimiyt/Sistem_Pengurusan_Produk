const table = document.getElementById("productTable");
const form = document.getElementById("productForm");

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});

function loadProducts() {
    fetch("https://dummyjson.com/products?limit=10")
        .then(res => res.json())
        .then(data => {
            data.products.forEach(product => {
                tambahRow(product.title, product.category, product.price);
            });
        })
        .catch(() => console.error("Gagal ambil data"));
}

function tambahRow(nama, kategori, harga) {
    const row = document.createElement("tr");

    const tdNama = document.createElement("td");
    tdNama.textContent = nama;

    const tdKategori = document.createElement("td");
    tdKategori.textContent = kategori;

    const tdHarga = document.createElement("td");
    tdHarga.textContent = `RM ${harga}`;

    const tdTindakan = document.createElement("td");
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Hapus";
    btnDelete.setAttribute("aria-label", `Hapus produk ${nama}`);

    btnDelete.classList.add("delete");

    btnDelete.addEventListener("click", () => row.remove());

    tdTindakan.appendChild(btnDelete);
    row.append(tdNama, tdKategori, tdHarga, tdTindakan);

    table.appendChild(row);
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const kategori = document.getElementById("kategori").value;
    const harga = document.getElementById("harga").value;

    tambahRow(nama, kategori, harga);

    form.reset();
});
