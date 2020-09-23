<template>
  <div class="home">
    <img
        alt="Vue logo"
        src="../assets/logo.png"
    >
    <HelloWorld msg="Jordan is awesome" />
    <input
        v-model="keyword"
        placeholder="search shows"
    >
    <div class="shows">
      <div
          v-for="(show, index) in filteredShows"
          :key="index"
          @click="displayShowInfo(show.attributes.title)"
          tabindex="0"
          @keypress.enter.space="displayShowInfo(show.attributes.title)"
          :class="{'active': selectedShow === show.attributes.title}"
      >
        <img
            :src="show.attributes.image.url"
            :alt="show.attributes.title"
        >
      </div>
    </div>
    <p v-if="selectedShow">{{ selectedShow }}</p>
    <p v-else>no show for you!</p>
    <v-button
        label="this is a button"
        href="http://www.google.com"
        target="_blank"
    >
      <audio-icon />
    </v-button>
    <br>
    <v-button
        label="disabled"
        href="http://www.google.com"
        target="_blank"
        disabled
    >
      <audio-icon />
    </v-button>
    <br>
    <v-button
        label="no icon here"
        href="http://www.google.com"
        target="_blank"
    />
    <br>
    <v-button
        href="http://www.google.com"
        target="_blank"
    >
      <audio-icon />
    </v-button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'
import VButton from '@/components/VButton.vue'
import AudioIcon from '@/components/AudioIcon.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    VButton,
    AudioIcon
  },
  data () {
    return {
      shows: [],
      selectedShow: '',
      keyword: 'sound'
    }
  },
  mounted () {
    axios
        .get('https://api.demo.nypr.digital/api/v3/buckets/newsounds-featured-shows/?site=newsounds')
        .then(response => (this.shows = response.data.data.attributes['bucket-items']))
  },
  methods: {
    displayShowInfo (title) {
      this.selectedShow = title
    }
  },
  computed: {
    filteredShows () {
      return this.shows.filter(show => {
        return show.attributes.title.toLowerCase().includes(this.keyword.toLowerCase())
      })
    }
  }
}
</script>

<style
    scoped
    lang="scss"
>
.shows {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  z-index: 10;

  div {
    opacity: .5;

    &.active {
      opacity: 1;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
}

input {
  margin-bottom: 2rem;
}

</style>
