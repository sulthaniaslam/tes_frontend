<template>
    <div class="item-tambah">
        <h4>Form Tambah Item</h4>
        <hr>

        <form method="post" @submit.prevent="onSimpan()">
            <table border="1" width="50%">
                <thead>
                    <tr>
                        <th>Nama Item</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="nama_item" id="" v-model="data.nama_item">
                        </th>
                    </tr>
                    <tr>
                        <th>Unit</th>
                        <th>:</th>
                        <th>
                            <select name="unit" id="" v-model="data.unit">
                                <option value="">-- Pilih Unit --</option>
                                <option value="kg">kg</option>
                                <option value="pcs">pcs</option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <th>Stok</th>
                        <th>:</th>
                        <th>
                            <input type="number" name="stok" id="" v-model="data.stok">
                        </th>
                    </tr>
                    <tr>
                        <th>Harga satuan</th>
                        <th>:</th>
                        <th>
                            <input type="number" name="harga_satuan" id="" v-model="data.harga_satuan">
                        </th>
                    </tr>
                    <tr>
                        <th>Barang</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="barang" id="" v-model="data.barang">
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
                nama_item : '',
                unit : '',
                stok : '',
                harga_satuan : '',
                barang : 'barang.jpg',
            }
        }
    },
    methods: {
        onSimpan(){
            
            this.axios.post(`${this.baseurl}/item`, this.data)
            .then((response) => {
                // console.log(response.data);
                if (response.status == 201) {
                    alert('Berhasil insert data')
                    this.$router.push({
                        path: '/item'
                    })
                }else{
                    alert('Gagal')
                }
            })
        }
    },
}
</script>