<template>
  <div class="card is-info">
    <div class="card-content">
      <div class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img :src="summoner.profile_icon.url"/>
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p class="is-bold">{{summoner.name}}</p>
            <p class="is-bold">{{league_tier}}</p>
          </div>
        </div>
        <div class="media-right">
          <p class="is-bold">{{summoner.region.value}}</p>
          <figure class="image is-32x32">
            <img :src="position_icon"/>
          </figure>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <a :href="match_history">Match History <font-awesome-icon :icon="link"/></a>
      </p>
      <p v-if="summoner.current_match.exists && summoner.current_match.queue.name === 'ranked_flex_threes'" class="card-footer-item">
        <a>Spectate <font-awesome-icon :icon="link"/></a>
      </p>
    </footer>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt'
export default {
  name: 'summoner-card',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  computed: {
    link: function () {
      return faExternalLinkAlt
    },
    match_history: function () {
      return `https://matchhistory.na.leagueoflegends.com/en/#match-history/NA/${this.summoner.account.id}?matchType=2&map=10`
    },
    league_tier: function () {
      let threesLeague = this.summoner.leagues.filter(
        function (league) {
          return league.queue.value === 'RANKED_FLEX_TT'
        }
      )
      if (threesLeague[0].tier.value === 'CHALLENGER') {
        return 'Challenger Tier'
      } else {
        return 'Master Tier'
      }
    },
    position_icon: function () {
      return require(`@/assets/lane_icons/${this.summoner.main_position.toLowerCase()}.png`)
    }
  },
  props: {
    summoner: {
      type: Object,
      default: function () {
        return {
          name: 'SummonerName',
          region: {
            name: 'north_america',
            value: 'NA'
          },
          account: {
            id: 5006
          },
          current_match: {
            exists: true,
            queue: {
              name: 'ranked_flex_threes',
              value: 'RANKED_FLEX_TT'
            }
          },
          leagues: [
            {
              queue: {
                value: 'RANKED_FLEX_TT'
              },
              tier: {
                value: 'CHALLENGER'
              }
            }
          ],
          main_position: 'Top',
          profile_icon: {
            url: 'http://via.placeholder.com/64x64'
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
