<template>
    <div class="wrapper">
        <div class="main">
            <h1>Simple Calculator</h1>
            <input v-model="currentValue"/>
            <div class="row">
                <simple-button class="btn" description="+" @calculate="calculate" :class="{ active: previousOperator === '+' }"></simple-button>
                <simple-button class="btn" description="-" @calculate="calculate" :class="{ active: previousOperator === '-' }"></simple-button>
            </div>
            <div class="row2">
                <simple-button class="btn" description="*" @calculate="calculate" :class="{ active: previousOperator === '*' }"></simple-button>
                <simple-button class="btn" description="/" @calculate="calculate" :class="{ active: previousOperator === '/' }"></simple-button>
            </div>
            <simple-button id="large" class="btn" description="=" @calculate="calculate"></simple-button>
       </div>
    </div>
</template>

<script>
import SimpleButton from "./SimpleButton.vue";
export default {
    name: 'TheCalculator',
    components: {
        SimpleButton
    },
    data() {
        return {
            previousValue: 0,
            currentValue: "",
            previousOperator: ""
        }
    },
    methods: {
        calculate(description) {
            if(description === "+" | description === "-" | description === "*" | description === "/") {
                this.previousValue = parseInt(this.currentValue);
                this.currentValue = "";
                this.previousOperator = description;
            } else if(description === "=") {
                if(this.previousOperator === "+") {
                    this.currentValue = this.previousValue + parseInt(this.currentValue);
                } else if(this.previousOperator === "-") {
                    this.currentValue = this.previousValue - parseInt(this.currentValue);
                } else if(this.previousOperator === "*") {
                    this.currentValue = this.previousValue * parseInt(this.currentValue);
                } else if(this.previousOperator === "/") {
                    this.currentValue = this.previousValue / parseInt(this.currentValue);
                }
                this.previousOperator = '';
            } else {
                console.log("Wrong Description");
            }
        }
    }
    
}
</script>


<style>

body, * {
    --font-color: #000000;
}

.wrapper {
    display: flex;
    background-color: #ff9767;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: top;
    margin: 0px;
    padding: 0px;
}

.main{
    width: 80vw;
    height: 60vh;
    display:flex;
    flex-direction: column;
    align-items: center;
}

h1{
    font-size: 50px;
}

input{
    width: 100%;
    height: 7vh;
    font-size: 50px;
    text-align: right;
}

.row{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}

.row2{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}

.btn{
    width:100%;
    height: 10vh;
    margin: 10px;
    font-size: 60px;
    background-color: #ffb6ad;
    box-shadow: 0px 0px 3px 4px rgba(0,0,0,0.3);
    border-color:#ffb6ad;
    border-radius: 15px;
}

.active {
    background-color: #8989ff;
    border-color: #8989ff;
}

</style>