<template>
  <div class="add-container">
    <h1 class="page-header">Add Device</h1>
    <form class="form-class">
        <div class="well">
            <h4>Device Info</h4>
            <div class="form-group">
                <label>Device Name</label>
                <input type="text" class="form-control" placeholder="Device Name" v-model="name">
            </div>
            <div class="form-group">
                <label>Device Type</label>
                <input type="text" class="form-control" placeholder="Device Type" v-model="type">
            </div>
        </div>
        <div class="well">
            <h4>Network Infos</h4>
            <div class="form-group">
                <label>MAC-Address</label>
                <input type="text" class="form-control" placeholder="MAC-Address" v-model="mac">
            </div>
            <div class="form-group">
                <label>IP-Address</label>
                <input type="text" class="form-control" placeholder="IP-Address" v-model="ip">
            </div>
        </div>

        <div class="well">
            <h4>Application</h4>
            <div class="form-group">
                <label>Port</label>
                <input type="text" class="form-control" placeholder="Port" v-model="port">
            </div>
            <div class="form-group">
                <label>Description</label>
                <input type="text" class="form-control" placeholder="Description" v-model="description">
            </div>
            <div class="form-group">
                <label>VLAN</label>
                <input type="text" class="form-control" placeholder="Vlan" v-model="vlan">
            </div>
        </div>
        <button type="submit" class="submit" @click="addDevice">Submit</button>
        <router-link to="/"><button class="home">Back to home</button></router-link>
    </form>
  </div>
</template>

<script>
    export default {
    name: 'AddComponent',
    data () {
        return {
            name: '',
            type: '',
            mac: '',
            ip: '',
            port: '',
            description: '',
            vlan: ''
        }
    },
    methods: {
        addDevice() {
            fetch("https://view-device-default-rtdb.europe-west1.firebasedatabase.app/devices.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name: this.name, type: this.type, mac: this.mac, ip: this.ip, port: this.port, description: this.description, vlan: this.vlan})
            }
            )

            this.name = '';
            this.type = '';
            this.mac = '';
            this.ip = '';
            this.port = '';
            this.description = '';
            this.vlan = '';
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .add-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .page-header {
        margin-top: 30px;
        font-size: 3rem;
        margin-bottom:15px;
    }
    .form-class {
        display: flex;
        flex-direction: column;
        width:50vw;
    }

    .well > h4 {
        margin-top: 15px;
        font-size:2em;
    }

    .form-group {
        display: flex;
        margin-top: 15px;
        flex-direction: row;
        align-items: left;
        gap:20px;
    }
    .form-group > label {
        font-size: 1em;
        flex:1
    }

    .form-group > input {
        flex:3;
        font-size: 1em;
    }

    .submit {
        margin-bottom: 20px;
        background: #1a7658;
        border: none;
        color: white;
        border-radius: 10px;
        text-decoration: none;
        padding:15px 30px;
        font-size: 24px;
        margin-top:40px;

    }

    .home {
        margin-bottom: 20px;
        background: rgb(60, 47, 148);
        border: none;
        color: white;
        border-radius: 10px;
        text-decoration: none;
        padding:15px 30px;
        font-size: 24px;
        width: 651.5px;
    }

    .home > a {
        color: white;
        text-decoration: none;
    }

    @media (max-width: 400px) {
        .form-class {
            width: 90vw;
        }
    }
    
</style>