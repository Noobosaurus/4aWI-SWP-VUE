<template>
  <div class="container">
    <h1 class="page-header">Manage Devices</h1>
    <router-link to="/add"><button class="add-button">add Device</button></router-link>
    <br />
    <table class="table table-striped">
        <thead class="item-container">
          <tr class="item">
            <th>Device Name</th>
            <th>Device Type</th>
            <th>MAC-Address</th>
            <th>IP-Address</th>
            <th>Port</th>
            <th>Description</th>
            <th>VLAN</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="item-container">
          <tr v-for="device in devices" :key="device.id" class="item">
            <td>{{device.name}}</td>
            <td>{{device.type}}</td>
            <td>{{device.mac}}</td>
            <td>{{device.ip}}</td>
            <td>{{device.port}}</td>
            <td>{{device.description}}</td>
            <td>{{device.vlan}}</td>
            <td><button class="delete" @click="deleteDevice(device.id)">X</button></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
 name: 'ListComponent',
  data() {
    return {
      devices: []
    }
  },
  created() {
    this.fetchDevices();
  },
  methods: {
    fetchDevices(){
      fetch(
        "https://view-device-default-rtdb.europe-west1.firebasedatabase.app/devices.json"
        ).then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          // speichere Daten in einem temporaeren Feld
          const results = [];
          if(!data) {
            this.devices = results;
            return;
          }
          
          let newData = Object.entries(data);
          for(let i = 0; i < newData.length; i++) {
              results.push({
                id: newData[i][0],
                name: newData[i][1].name,
                description: newData[i][1].description,
                type: newData[i][1].type,
                mac: newData[i][1].mac,
                ip: newData[i][1].ip,
                port: newData[i][1].port,
                vlan: newData[i][1].vlan
              });
          }

          //ab hier stehen alle Daten im array results
          this.devices = results;
          console.log(this.devices);
        });
    },
    deleteDevice(id) {
      fetch(
        `https://view-device-default-rtdb.europe-west1.firebasedatabase.app/devices/${id}.json`, {
          method: 'DELETE'
        }
      ).then(() => {
        this.fetchDevices();
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    display:flex;
    flex-direction: column;
    align-items: center;
}

.container > h1 {
  font-size: 3rem;
  margin-top: 60px;
}

.add-button {
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

.item-container {
  display:flex;
  flex-direction: column;
  margin-top: 20px;
  width:80vw;
}

.item {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  margin:15px;
}



.item > th {
  font-size: 1.5em;
}

.item > td {
  font-size: 1.5em;
}

.delete {
  background: #9e233d;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 1em;
  padding: 10px 15px;
}

</style>