<template>
    <div class="sales-tambah">
        <h4>Form Tambah Sales</h4>
        <hr>

        <form method="post" @submit.prevent="onSimpan()">
            <table border="1" width="50%">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="customer" id="" v-model="data.customer">
                        </th>
                    </tr>
                    <tr>
                        <th>Item</th>
                        <th>:</th>
                        <th>
                            <select name="item" id="" v-model="data.itemSelected">
                                <option value="">-- Pilih Item --</option>
                                <option v-for="(item, index) in data.item" :key="index" :value="item.id">
                                    {{item.nama_item}}
                                </option>
                            </select>
                            <!-- <span>{{data.itemSelected}}</span> -->
                        </th>
                    </tr>
                    <tr>
                        <th>Qty</th>
                        <th>:</th>
                        <th>
                            <input type="number" name="qty" id="" v-model="data.qty" @keyup="onQty()">
                        </th>
                    </tr>
                    <tr>
                        <th>Total diskon</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="total_diskon" id="" v-model="data.total_diskon" readonly>
                        </th>
                    </tr>
                    <tr>
                        <th>Total harga</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="total_harga" id="" v-model="data.total_harga" readonly>
                        </th>
                    </tr>
                    <tr>
                        <th>Total bayar</th>
                        <th>:</th>
                        <th>
                            <input type="text" name="total_bayar" id="" v-model="data.total_bayar" readonly>
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
                customer: '',
                item: [],
                itemSelected: '',
                qty: 0,
                total_diskon: 0,
                total_harga: 0,
                total_bayar: 0,
                stok : 0,
            },
        }
    },
    created() {
        this.getAllItem();

    },
    methods: {
        onQty(){
            // this.qty = (this.qty < 0) ? 0 : this.qty
            this.axios.get(`${this.baseurl}/cek_stok/${this.data.itemSelected}/${this.data.qty}`)
            .then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    let datas = response.data
                    this.data.stok = datas.stok
                    this.data.total_harga = datas.data.harga_satuan

                    let qty = parseInt(this.data.qty)
                    let th = parseInt(this.data.total_harga)
                    
                    this.data.total_bayar = qty * th

                }else{
                    this.data.stok = 0
                    console.log(response.data.message);
                }
            })
        },

        onSimpan(){
            console.log(this.data);
            this.axios.post(`${this.baseurl}/sales`, {
                customer : this.data.customer,
                itemSelected : this.data.itemSelected,
                qty : this.data.qty,
                total_diskon : this.data.total_diskon,
                total_harga : this.data.total_harga,
                total_bayar : this.data.total_bayar,
            })
            .then((response) => {
                console.log(response.data);
                if (response.status == 201) {
                    alert('Berhasil insert data')
                    this.$router.push({
                        path: '/sales'
                    })
                }else{
                    alert('Gagal')
                }
            })
        },

        getAllItem(){
            this.axios.get(`${this.baseurl}/item`)
            .then((response) => {
                this.data.item = response.data
            })
        },

    },
}
</script>