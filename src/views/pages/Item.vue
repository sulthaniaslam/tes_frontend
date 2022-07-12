<template>
    <div class="item">
        <h2>Items</h2>
        <hr>

        <button @click="onTambah()">+ tambah</button>

        <table border="1" width="100%">
            <thead>
                <tr>
                    <th>#</th>
                    <th>nama item</th>
                    <th>unit</th>
                    <th>stok</th>
                    <th>harga satuan</th>
                    <th>barang</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.nama_item}}</td>
                    <td>{{item.unit}}</td>
                    <td>{{item.stok}}</td>
                    <td>{{item.harga_satuan}}</td>
                    <td>{{item.barang}}</td>
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
            this.axios.get(`${this.baseurl}/item`)
            .then((response) => {
                console.log(response.data);

                this.items = response.data
            })
        },

        onTambah(){
            this.$router.push({
                path: '/item/tambah'
            })
        }
    },
}
</script>