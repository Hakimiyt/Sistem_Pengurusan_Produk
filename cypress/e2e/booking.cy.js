describe("Ujian Sistem Pengurusan Produk", () => {

    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/index.html"); 
    });

    // 1. Ujian Paparan
    it("Paparan Tajuk & Jadual", () => {
        cy.contains("Sistem Pengurusan Produk");
        cy.get("table").should("exist");
    });

    // 2. Ujian Borang
    it("Tambah Produk", () => {
        cy.get("#nama").type("Produk Test");
        cy.get("#kategori").type("Elektronik");
        cy.get("#harga").type("100");

        cy.get("form").submit();

        cy.contains("Produk Test");
    });

    // 3. Ujian Hapus
    it("Hapus Produk", () => {
        cy.get(".delete").first().click();
    });

});