# Aplikasi Kasir (Mini Project React) 

Sebuah toko kelontong, memerlukan sistem kasir sederhana.
Buatlah sebuah Form pemesanan sederhana yang bisa membantu kasir toko mencatat pesanan pelanggan dan menghitung total item dan total harga.

Release 1
-------------------------------------------------------------------
1. Install react application.

2. Buat 1 buah page component dengan nama OrderPage.

3. Buat 1 buah form order component dengan nama FormOrder, element yang harus ada :

    ```
    ~ `input nama barang
    `~ input quantity barang
    `~ input harga barang
    `~ button submit
    ```

    

4. Masukan form kedalam page OrderPage

5. Buat fungsi untuk handle FormOrder, action yang diinginkan seperti ini:

6. ketika button submit di klik, maka akan menyimpan data dalam bentuk object dengan format sebagai berikut :

    ```
    {
        nama: "Minyak Nonoli 2L",
        harga: 25000,
        quantity: 3
    } 
    ```

    tampilkan data kedalam console dengan console.log, dan bersihkan semua field inputan pada FormOrder sehingga user bisa menginput orderan baru tanpa perlu menghapus data didalam field inputan secara manual.

    tampilkan data kedalam console dengan console.log, dan bersihkan semua field inputan pada FormOrder sehingga user bisa menginput orderan baru tanpa perlu menghapus data didalam field inputan secara manual.

## Release 2

	Setelah component FormOrder berfungsi, selanjutnya kita akan menyimpan datanya di dalam OrderPage Component.

1. Import hooks useState, dan useEffect di dalam OrderPage component.

2. Dengan menggunakan hook useState, buatlah state untuk menampung hasil inputan pada FormOrder. buat nama state dengan nama orderItems, dan fungsi untuk set state baru dengan nama setOrderItems. Initial state berupa array kosong.

3. Buatlah sebuah effect yang akan melakukan console.log isi data dari state orderItems setiap kali terjadi perubahan data pada state orderItems.

4. Buat sebuah fungsi dengan nama handleAddItem untuk menghandle proses update menambahkan data kedalam state orderItems. pastikan konsep imutable digunakan pada proses ini.

5. setelah fungsi handleAddItem jadi, kirim fungsi ini ke component FormOrder dengan menggunakan props. berikan nama props yang sama dengan nama fungsi agar tidak bingung.

6. pastikan component FormOrder menerima props fungsi handleAddItem dengan cara menampilkan fungsi tersebut ke console di component FormOrder.

7. Jika sudah dipastikan component FormOrder sudah menerima props berupa fungsi handleAddItem, maka ganti action console.log pada action ketika form di submit menjadi fungsi handleAddItem.

8. Lakukan uji coba, apakah form berhasil menambahkan data kedalam state orderItems ? Jika belum, coba di lihat lagi instruksi dan pastikan kamu sudah mengikuti semua instruksinya. Jika sudah, maka selamat kamu sudah berhasil menyelesaikan release 2

   

## Release 3

	Setelah kita sukses menyimpan data dari FormOrder, maka saatnya kita menampilkan data tersebut kedalam user interface applikasi. 

1. Buat sebuah component untuk menampilkan semua data dari state orderItems, beri nama component ini dengan nama DisplayListItems. Component ini akan menerima data dari OderPage dengan menggunakan props. **berikan nama props yang meaningfull !!**
3. Buat sebuah component (**buat nama component yang meaningfull !!**) untuk menampilkan detail item, di dalam komponen ini harus menampilkan nama, harga dan quantity.
3. Masukan component yang bertugas menampilkan detail item kedalam komponen DisplayListItems, kemudian kirim props kedalam component tersebut (**gunakan function .map()**)
4. Lakukan Uji coba, setiap submit form, apakah DisplayListItem bertambah ? Jika belum, coba di lihat lagi instruksi dan pastikan kamu sudah mengikuti semua instruksinya. Jika sudah, maka selamat kamu sudah berhasil menyelesaikan release 3

## Release 4

	Detail dari tem-item belanja sudah ditampilkan pada aplikasi, saatnya kita menambahkan perhitungan pada detail item tersebut agar kasir tidak perlu repot menghitung harga total dari setiap detail item.

1. Di dalam component yang bertugas menampilkan detail item, tambahkan sebuah HTML tag pada JSX untuk menampilkan total harga item tersebut.

2. Tampilkan total harga pada HTML tag yg baru tersebut dengan formula sebagai berikut :
> 	 	 quantity X harga
3. Lakukan uji coba, setiap submit form, apakah total harga peritem yang tampil sudah benar ? Jika belum, coba perhatikan lagi tipe data yang kamu gunakan didalam form dan state, pastikan tipe data yang digunakan pada form dan state bisa digunakan untuk perhitungan matematika. Jika sudah, maka selamat kamu sudah berhasil menyelesaikan release 4

   

## Release 5

	Kita sudah menampilkan total harga per-item. Selanjutnya kita perlu menghitung nominal total dari semua item yang ada.

1. Buatlah 1 buah component untuk menampilkan nominal total dari semua item yang ada.
2. Masukan component ini kedalam OrderPage, Kirimkan data state orderItems dengan menggunakan props dalam component ini. gunakan meaningfull props name. 
3. Lakukan buatlah sebuah function yang dapat melakukan pengolahan data props yang diterima, sehingga bisa mendapatkan nominal total harga yang harus dibayarkan oleh customer.
4. Tampilkan hasil pengolahan data tersebut kedalam JSX.
5. Lakukan uji coba, setiap submit form, apakah nominal total sudah sesuai ? Jika belum, periksa kembali function pengolahan data, pastikan bisa menghasilkan output yang sesuai. Jika sudah, maka selamat kamu sudah berhasil menyelesaikan release 5
