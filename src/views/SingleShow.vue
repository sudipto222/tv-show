<template>
  <div>
      <div class="header">
        <router-link to="/">
            <h3>TV SHOW</h3>
        </router-link>
      </div>
      <div class="container">
          <img :src="show.image && show.image.original" alt="image-card" class="image">
          <div class="text">
              <p>Premiered on {{ show.premiered }}</p>
              <h3>Summary</h3>
              <p>{{show.summary}}</p>
          </div>
      </div>
  </div>
</template>

<script>


export default {
    name:'SingleShow',
    data() {
        return {
            show: {}
        }
    },
    mounted() {
        const id = this.$route.params.id
    this.$http
      .get(`http://api.tvmaze.com/shows/${id}`)
      .then(response => this.show = response.data)
      .catch( error => alert(error));
  },
}
</script>

<style scoped>
.header {
    padding: 30px;
}
.container {
    max-width: 70%;
    display: block;
    margin: auto;
}
</style>