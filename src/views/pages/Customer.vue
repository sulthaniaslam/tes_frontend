<template>
    <div class="customer">
        <h2>Customer</h2>
        <hr>

        <button @click="onTambah()">+ tambah</button>

        <table border="1" width="100%">
            <thead>
                <tr>
                    <th>#</th>
                    <th>nama</th>
                    <th>contact</th>
                    <th>email</th>
                    <th>alamat</th>
                    <th>diskon</th>
                    <th>tipe diskon</th>
                    <th>ktp</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in customer" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.nama}}</td>
                    <td>{{item.contact}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.alamat}}</td>
                    <td>{{item.diskon}}</td>
                    <td>{{item.tipe_diskon}}</td>
                    <td>{{item.ktp}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customer: [],
        }
    },

    created() {
        this.getAllCustomer()
    },

    methods: {
        getAllCustomer(){   
            this.axios.get(`${this.baseurl}/customer`)
            .then((response) => {
                console.log(response.data);

                this.customer = response.data
            })
        },

        onTambah(){
            this.$router.push({
                path: '/customer/tambah'
            })
        }
    },
}
</script>