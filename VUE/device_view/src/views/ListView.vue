<template>
  <list-component></list-component>
</template>

<script>
// @ is an alias to /src
import ListComponent from '@/components/ListComponent.vue'

export default {
  name: 'HomeView',
  components: {
    ListComponent
  }
}
</script>
