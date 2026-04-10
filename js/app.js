const table = document.getElementById("productTable");
const form = document.getElementById("productForm");

fetch("https://dummyjson.com/products?limit=10")
    .then(res => res.json())
    .then(data => {
        data.products.forEach(product => {
            tambahRow(product.title, product.category, product.price);
        });
    });

function tambahRow(nama, kategori, harga) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${nama}</td>
        <td>${kategori}</td>
        <td>${harga}</td>
        <td><button class="delete">Hapus</button></td>
    `;

    row.querySelector(".delete").addEventListener("click", () => {
        row.remove();
    });

    table.appendChild(row);
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const kategori = document.getElementById("kategori").value;
    const harga = document.getElementById("harga").value;

    tambahRow(nama, kategori, harga);

    console.log("Produk ditambah:", nama, kategori, harga);

    form.reset();
});