<template>
  <footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Pathfinder</strong> by <a href="http://johncleaver.com">John Cleaver</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </p>
      <p>
        <a :href="gh_address"><font-awesome-icon :icon="gh_icon"/></a>
        <a :href="reddit_address"><font-awesome-icon :icon="reddit_icon"/></a>
      </p>
      <p>
        Pathfinder / TheTwistedTreeline.Net isn't endorsed by Riot Games and doesn't reflect the views or opinions of
        Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and
        Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
      </p>
    </div>
  </div>
</footer>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faReddit from '@fortawesome/fontawesome-free-brands/faReddit'
export default {
  name: 'app-footer',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  computed: {
    gh_icon () {
      return faGithub
    },
    reddit_icon () {
      return faReddit
    }
  },
  data: function () {
    return {
      gh_address: '',
      reddit_address: ''
    }
  }
}
</script>

<style scoped>

</style>
