    <template>
    <div class="sales">
        <h2>Sales</h2>
        <hr>

        <button @click="onTambah()">+ tambah</button>

        <table border="1" width="100%">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Transaksi</th>
                    <th>Tggl</th>
                    <th>Customer</th>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Total diskon</th>
                    <th>Total harga</th>
                    <th>Total bayar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.code_transaksi}}</td>
                    <td>{{item.tanggal_transaksi}}</td>
                    <td>{{item.customer}}</td>
                    <td>{{item.item}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.total_diskon}}</td>
                    <td>{{item.total_harga}}</td>
                    <td>{{item.total_bayar}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
        }
    },

    created() {
        this.getAllItem()
    },

    methods: {
        getAllItem(){   
            this.axios.get(`${this.baseurl}/sales`)
            .then((response) => {
                console.log(response.data);

                this.items = response.data
            })
        },

        onTambah(){
            this.$router.push({
                path: '/sales/tambah'
            })
        }
    },
}
</script>