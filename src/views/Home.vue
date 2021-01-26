<template>
  <div class="home">
    <div class="hero">
      <div class="header">
        <h3>TV SHOW</h3>
      </div>
      <div class="hero-text">
        Search for your favorite TV shows
        <div class="search">
          <input
            v-model="search"
            aria-label="Search"
            type="search"
            @keyup.enter="searchShow"
          >
          <button @click="searchShow">SEARCH</button>
        </div>
      </div>
    </div>
    <div class="tvshows" v-if="searchResult.length != 0">
      <div class="container">
          <div class="card" v-for="search in searchResult" :key="search.show.id">
            <router-link :to="`/single-show/${search.show.id}`">
              <img :src="search.show && search.show.image && search.show.image.original" alt="image-card" class="image">
              <h4>{{ search.show.name }}</h4>
              <p>Type: {{ search.show.type }}</p>
            </router-link>
          </div>
      </div>
    </div>
    <div class="tvshows" v-else>
      <div class="buttons">
        <button>Tragedy</button>
      </div>
      <div class="container">
          <div class="card" v-for="info in infos" :key="info.show.id">
            <router-link :to="`/single-show/${info.show.id}`">
              <img :src="info.show && info.show.image && info.show.image.original" alt="image-card" class="image">
              <h4>{{ info.show.name }}</h4>
              <p>Type: {{ info.show.type }}</p>
            </router-link>
          </div>
      </div>

      <div class="buttons">
        <button>Girls</button>
      </div>
      <div class="container">
        <!-- <router-link class="card" to="/single-show"> -->
          <div class="card" v-for="girl in girls" :key="girl.show.id">
            <router-link :to="`/single-show/${girl.show.id}`">
              <img :src="girl.show && girl.show.image && girl.show.image.original" alt="image-card" class="image">
              <h4>{{ girl.show.name }}</h4>
              <p>Type: {{ girl.show.type }}</p>
            </router-link>
          </div>
        <!-- </router-link> -->
      </div>

      <div class="buttons">
        <button>Comedy</button>
      </div>
      <div class="container">
          <div class="card" v-for="comedy in comedies" :key="comedy.show.id">
            <router-link :to="`/single-show/${comedy.show.id}`">
              <img :src="comedy.show && comedy.show.image && comedy.show.image.original" alt="image-card" class="image">
              <h4>{{ comedy.show.name }}</h4>
              <p>Type: {{ comedy.show.type }}</p>
            </router-link>
          </div>
      </div>

      <div class="buttons">
        <button>Action</button>
      </div>
      <div class="container">
          <div class="card" v-for="action in actions" :key="action.show.id">
            <router-link :to="`/single-show/${action.show.id}`">
              <img :src="action.show && action.show.image && action.show.image.original" alt="image-card" class="image">
              <h4>{{ action.show.name }}</h4>
              <p>Type: {{ action.show.type }}</p>
            </router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      search: '',
      infos: "",
      girls: "",
      comedies: "",
      actions: "",
      searchResult: ""
    }
  },
  watch: {
    search(val) {
      if (!val) {
        this.searchResult = ""
      }
    }
  },
  async mounted() {
    await this.$http
      .get('http://api.tvmaze.com/search/shows?q=tragedy')
      .then(response => this.infos = response.data)
      .catch( error => console.log(error));
    await this.$http
      .get('http://api.tvmaze.com/search/shows?q=girls')
      .then(response => this.girls = response.data)
      .catch( error => console.log(error));
    await this.$http
      .get('http://api.tvmaze.com/search/shows?q=comedy')
      .then(response => this.comedies = response.data)
      .catch( error => console.log(error));
    await this.$http
      .get('http://api.tvmaze.com/search/shows?q=action')
      .then(response => this.actions = response.data)
      .catch( error => console.log(error));
  },
  methods: {
    searchShow() {
      this.$http
        .get(`http://api.tvmaze.com/search/shows?q=${this.search}`)
        .then(response => {
          this.searchResult = response.data
        })
        .catch( error => console.log(error));
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  .hero {
    width: 100%;
    height: 300px;
    background: url(../assets/background-image.jpg);
    .header {
      padding: 20px;
      h3 {
        color: #ffffff;
        font-size: 36px;
        font-weight: 800;
        font-style: italic;
      }
    }
    .hero-text {
      margin-top: 50px;
      text-align: center;
      color: #ffffff;
      font-size: 28px;
      display: flex;
      flex-direction: column;
    }
    .search {
      display: flex;
      // max-width: 550px;
      margin: 0 auto;
      margin-top: 20px;
      input {
        height: 50px;
        max-width: 70%;
        border-radius: 2px;
        padding: 0 20px;
      }
      button {
        background: red;
        color: #ffffff;
        padding: 0 20px;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
  .tvshows {
    .buttons {
      padding: 30px;
      button {
        color: #ffffff;
        background:red;
        border-radius:  20px;
        border: 2px solid red;
        padding: 10px 20px;
        margin-left: 20px;
      }
    }
    .container {
      padding: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-row-gap: 50px;
      .card {
        display: block;
        margin: auto;
        max-width: 170px;
        h4 {
          color: black;
        }
        p {
          font-style: italic;
          color: black;
        }
      }
    }
  }
  .image {
    max-width: 150px;
  }
}

@media only screen and (max-width: 768px) {
  .home {
    .tvshows {
      .container {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
