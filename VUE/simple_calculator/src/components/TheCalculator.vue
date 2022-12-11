<template>
    <div class="wrapper">
        <div class="main">
            <h1>Simple Calculator</h1>
            <input v-model="curr"/>
            <div class="row">
                <simple-button class="btn" description="+" @calculate="calculate" :class="{ active: sign === '+' }"></simple-button>
                <simple-button class="btn" description="-" @calculate="calculate" :class="{ active: sign === '-' }"></simple-button>
            </div>
            <div class="row2">
                <simple-button class="btn" description="*" @calculate="calculate" :class="{ active: sign === '*' }"></simple-button>
                <simple-button class="btn" description="/" @calculate="calculate" :class="{ active: sign === '/' }"></simple-button>
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
            prev: null,
            curr: '',
            oper: null,
            sign: '',
            click: false,
            end: false
        }
    },
    methods: {
        calculate(description) {
            if(description === '+') {
                this.oper = (a,b) => a + b;
                this.prev = this.curr;
                this.click = true;
                this.curr = '';
                this.sign = description;
            } else if (description === '-') {
                this.oper = (a,b) => a - b;
                this.prev = this.curr;
                this.click = true;
                this.curr = '';
                this.sign = description;
            } else if (description === '*') {
                this.oper = (a,b) => a * b;
                this.prev = this.curr;
                this.click = true;
                this.curr = '';
                this.sign = description;
            } else if (description === '/') {
                this.oper = (a,b) => a / b;
                this.prev = this.curr;
                this.click = true;
                this.curr = '';
                this.sign = description;
            } else if (description === '='){
                this.curr = this.oper(
                    parseFloat(this.prev),
                    parseFloat(this.curr)
                );
                this.prev = null;
                this.sign = '';
                this.end = true;
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