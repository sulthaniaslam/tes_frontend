<template>
    <div class="customer-tambah">
        <h4>Form Tambah Customer</h4>
        <hr>

        <form method="post" @submit.prevent="onSimpan()">
            <table border="1" width="50%">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="nama" id="" v-model="data.nama">
                        </th>
                    </tr>
                    <tr>
                        <th>Contact</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="contact" id="" v-model="data.contact">
                        </th>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="email" id="" v-model="data.email">
                        </th>
                    </tr>
                    <tr>
                        <th>Alamat</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="alamat" id="" v-model="data.alamat">
                        </th>
                    </tr>
                    <tr>
                        <th>Diskon</th>
                        <th>:</th>
                        <th>
                            <input type="number" name="diskon" id="" v-model="data.diskon">
                        </th>
                    </tr>
                    <tr>
                        <th>Tipe diskon</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="tipe_diskon" id="" v-model="data.tipe_diskon">
                        </th>
                    </tr>
                    <tr>
                        <th>Ktp</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="ktp" id="" v-model="data.ktp">
                        </th>
                    </tr>
                    
                    <tr>
                        <th>
                            <button type="submit">Simpan</button>
                        </th>
                    </tr>
                </thead>
            </table>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data : {
                nama : '',
                contact : '',
                email : '',
                alamat : '',
                diskon : 0,
                tipe_diskon : '',
                ktp : '',
            }
        }
    },
    methods: {
        onSimpan(){
            
            this.axios.post(`${this.baseurl}/customer`, this.data)
            .then((response) => {
                console.log(response.data);
                if (response.status == 201) {
                    alert('Berhasil insert data')
                    this.$router.push({
                        path: '/customer'
                    })
                }else{
                    alert('Gagal')
                }
            })
        }
    },
}
</script>