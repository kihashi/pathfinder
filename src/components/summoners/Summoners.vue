<template>
  <div id="summoners-page">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title">
            Summoners
          </h1>
        </div>
        <div class="hero-foot">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Search</label>
            </div>
            <div class="field-body">
              <div class="control">
                <input class="input" type="text" placeholder="Enter a Summoner" v-model="searchTerm"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="columns">
          <div class="column is-one-quarter-desktop" v-for="summoner in filtered_summoners" :key="summoner.name">
            <summoner-card :summoner="summoner"/>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import SummonerCard from './SummonerCard'

export default {
  components: {SummonerCard},
  name: 'summoners',
  computed: {
    filtered_summoners: function () {
      let st = this.searchTerm
      return this.summoners.filter(
        function (summoner) {
          return summoner.name.toLowerCase().indexOf(st.toLowerCase()) !== -1
        }
      )
    }
  },
  data: function () {
    return {
      searchTerm: '',
      summoners: [
        {
          name: 'Kihashi',
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
          main_position: 'Jungle',
          profile_icon: {
            url: 'https://ddragon.leagueoflegends.com/cdn/8.4.1/img/profileicon/578.png'
          }
        },
        {
          name: 'BenevolentBanker',
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
                value: 'MASTER'
              }
            }
          ],
          main_position: 'Support',
          profile_icon: {
            url: 'https://ddragon.leagueoflegends.com/cdn/8.4.1/img/profileicon/578.png'
          }
        },
        {
          name: 'Zerockas',
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
              name: 'ranked_solo_fives',
              value: 'RANKED_FLEX_5X5'
            }
          },
          leagues: [
            {
              queue: {
                value: 'RANKED_FLEX_TT'
              },
              tier: {
                value: 'MASTER'
              }
            }
          ],
          main_position: 'bot',
          profile_icon: {
            url: 'https://ddragon.leagueoflegends.com/cdn/8.4.1/img/profileicon/578.png'
          }
        },
        {
          name: 'PuddinPop',
          region: {
            name: 'north_america',
            value: 'NA'
          },
          account: {
            id: 5006
          },
          current_match: {
            exists: false
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
            url: 'https://ddragon.leagueoflegends.com/cdn/8.4.1/img/profileicon/1114.png'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
