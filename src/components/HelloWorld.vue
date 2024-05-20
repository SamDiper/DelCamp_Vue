<template>
  <div>
      hola
  </div>
</template>

<script>
import API from '@/api'
export default {
    data () {
        return {
        }
    },
    methods: {
        infodelcamp () {
            API.peticion()
                .then(res => {
                    console.log(res)
                })
        }
    },

    mounted () {
        this.infodelcamp()
    }
}
</script>


<style scoped>

</style>
