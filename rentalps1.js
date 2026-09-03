document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       PENGATURAN
    ========================= */

    const NOMOR_OWNER = "6285782329752";

    const HARGA_PS3 = 6000;6
    const HARGA_PS4 = 9000;


    /* =========================
       DATA PESANAN
    ========================= */

    let psDipilih = "";
    let hargaPerJam = 0;
    let mejaDipilih = "";
    let durasi = 1;


    /* =========================
       AMBIL ELEMENT HTML
    ========================= */

    const btnPS3 = document.getElementById("btnPS3");
    const btnPS4 = document.getElementById("btnPS4");

    const cardPS3 = document.getElementById("cardPS3");
    const cardPS4 = document.getElementById("cardPS4");

    const psTerpilih = document.getElementById("psTerpilih");
    const mejaTerpilih = document.getElementById("mejaTerpilih");

    const btnKurang = document.getElementById("btnKurang");
    const btnTambah = document.getElementById("btnTambah");

    const durasiText = document.getElementById("durasi");

    const summaryPS = document.getElementById("summaryPS");
    const summaryMeja = document.getElementById("summaryMeja");
    const summaryDurasi = document.getElementById("summaryDurasi");
    const summaryHarga = document.getElementById("summaryHarga");

    const totalHarga = document.getElementById("totalHarga");

    const formRental = document.getElementById("formRental");

    const btnReset = document.getElementById("btnReset");

    const btnBahasa = document.getElementById("btnBahasa");

    const judul = document.getElementById("judul");
    const subjudul = document.getElementById("subjudul");


    /* =========================
       FORMAT RUPIAH
    ========================= */

    function rupiah(angka) {

        return "Rp" +
            Number(angka).toLocaleString("id-ID");

    }


    /* =========================
       UPDATE TAMPILAN
    ========================= */

    function updateTampilan() {

        const total = hargaPerJam * durasi;

        durasiText.textContent =
            durasi + " Jam";

        summaryDurasi.textContent =
            durasi + " Jam";

        summaryHarga.textContent =
            rupiah(hargaPerJam);

        totalHarga.textContent =
            rupiah(total);

    }


    /* =========================
       PILIH PS3
    ========================= */

    btnPS3.addEventListener("click", function () {

        psDipilih = "PS3";

        hargaPerJam = HARGA_PS3;

        psTerpilih.textContent = "PS3";

        summaryPS.textContent = "PS3";

        cardPS3.classList.add("selected");

        cardPS4.classList.remove("selected");

        updateTampilan();

    });


    /* =========================
       PILIH PS4
    ========================= */

    btnPS4.addEventListener("click", function () {

        psDipilih = "PS4";

        hargaPerJam = HARGA_PS4;

        psTerpilih.textContent = "PS4";

        summaryPS.textContent = "PS4";

        cardPS4.classList.add("selected");

        cardPS3.classList.remove("selected");

        updateTampilan();

    });


    /* =========================
       PILIH MEJA
    ========================= */

    const semuaMeja =
        document.querySelectorAll(".meja-btn");


    semuaMeja.forEach(function (tombol) {

        tombol.addEventListener("click", function () {

            semuaMeja.forEach(function (item) {

                item.classList.remove("selected");

            });


            tombol.classList.add("selected");


            mejaDipilih =
                tombol.getAttribute("data-meja");


            mejaTerpilih.textContent =
                "Meja " + mejaDipilih;


            summaryMeja.textContent =
                "Meja " + mejaDipilih;

        });

    });


    /* =========================
       TAMBAH DURASI
    ========================= */

    btnTambah.addEventListener("click", function () {

        if (durasi < 24) {

            durasi++;

            updateTampilan();

        }

    });


    /* =========================
       KURANG DURASI
    ========================= */

    btnKurang.addEventListener("click", function () {

        if (durasi > 1) {

            durasi--;

            updateTampilan();

        }

    });


    /* =========================
       PESAN WHATSAPP
    ========================= */

    formRental.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* CEK PS */

            if (psDipilih === "") {

                alert(
                    "Silakan pilih PS3 atau PS4 terlebih dahulu."
                );

                return;
            }


            /* CEK MEJA */

            if (mejaDipilih === "") {

                alert(
                    "Silakan pilih nomor meja terlebih dahulu."
                );

                return;
            }


            /* DATA */

            const nama =
                document
                    .getElementById("nama")
                    .value
                    .trim();


            const whatsapp =
                document
                    .getElementById("whatsapp")
                    .value
                    .trim();


            const jamMulai =
                document
                    .getElementById("jamMulai")
                    .value;


            const catatan =
                document
                    .getElementById("catatan")
                    .value
                    .trim();


            /* TOTAL */

            const total =
                hargaPerJam * durasi;


            /* PESAN */

            const pesan =
`🎮 PESANAN RENTAL PS

━━━━━━━━━━━━━━━━━━

🎮 PLAYSTATION
${psDipilih}

🪑 NOMOR MEJA
Meja ${mejaDipilih}

⏱️ DURASI
${durasi} Jam

🕐 JAM MULAI
${jamMulai}

💵 HARGA / JAM
${rupiah(hargaPerJam)}

💰 TOTAL
${rupiah(total)}

━━━━━━━━━━━━━━━━━━

👤 DATA PELANGGAN

Nama:
${nama}

📱 WhatsApp:
${whatsapp}

📝 Catatan:
${catatan || "-"}

━━━━━━━━━━━━━━━━━━

Mohon konfirmasi pesanan saya.
Terima kasih.`;


            /* BUKA WHATSAPP */

            const url =
                "https://wa.me/" +
                NOMOR_OWNER +
                "?text=" +
                encodeURIComponent(pesan);


            window.open(
                url,
                "_blank"
            );

        }
    );


    /* =========================
       RESET
    ========================= */

    btnReset.addEventListener(
        "click",
        function () {

            const yakin =
                confirm(
                    "Yakin ingin mereset pesanan?"
                );


            if (!yakin) {

                return;

            }


            psDipilih = "";

            hargaPerJam = 0;

            mejaDipilih = "";

            durasi = 1;


            formRental.reset();


            psTerpilih.textContent =
                "Belum dipilih";

            mejaTerpilih.textContent =
                "Belum dipilih";

            summaryPS.textContent =
                "Belum dipilih";

            summaryMeja.textContent =
                "Belum dipilih";


            cardPS3.classList.remove(
                "selected"
            );

            cardPS4.classList.remove(
                "selected"
            );


            semuaMeja.forEach(
                function (item) {

                    item.classList.remove(
                        "selected"
                    );

                }
            );


            updateTampilan();

        }
    );


    /* =========================
       BAHASA ID / EN
    ========================= */

    let bahasaIndonesia = true;


    btnBahasa.addEventListener(
        "click",
        function () {

            bahasaIndonesia =
                !bahasaIndonesia;


            if (bahasaIndonesia) {

                btnBahasa.textContent =
                    "🇮🇩 ID";

                judul.textContent =
                    "🎮 Rental PS3 & PS4";

                subjudul.textContent =
                    "Main lebih seru, pilih PS dan meja favoritmu!";

            } else {

                btnBahasa.textContent =
                    "🇬🇧 EN";

                judul.textContent =
                    "🎮 PS3 & PS4 Rental";

                subjudul.textContent =
                    "Have more fun! Choose your PlayStation and favorite table.";

            }

        }
    );


    /* =========================
       WAKTU MULAI OTOMATIS
    ========================= */

    const jamMulai =
        document.getElementById("jamMulai");


    if (jamMulai) {

        const sekarang = new Date();

        const jam =
            String(
                sekarang.getHours()
            ).padStart(2, "0");

        const menit =
            String(
                sekarang.getMinutes()
            ).padStart(2, "0");


        jamMulai.value =
            jam + ":" + menit;

    }


    /* =========================
       TAMPILAN AWAL
    ========================= */

    updateTampilan();

});