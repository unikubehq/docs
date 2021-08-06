<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <CustomNavbar></CustomNavbar>
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>
      <SearchBox />
      <p class="description-detail">
        {{ data.description }}
      </p>
    </header>

    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <a :href="feature.url">
          <img :src="feature.icon" alt="">
          <h2>{{ feature.title }}</h2>
        </a>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div
      v-if="data.footer"
      class="footer"
    >
      <div class="footer-flex">
        <div class="footer-section">
          <img :src="data.footer.icons" alt="Blueshoe/Unikube Logos">
          <span class="footer-tagline">
            {{ data.footer.iconTagline }}
          </span>
        </div>
        <div class="footer-section">
          <ul>
            <li>
              <a :href="data.footer.contact.emailUrl">
                {{ data.footer.contact.email }}
              </a>
            </li>
            <li>
              <a :href="data.footer.contact.phoneUrl">
                {{ data.footer.contact.phoneUrl }}
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-section" v-for="section in data.footer.linkSections">
          <!-- TODO Add section titles-->
          <ul>
            <li v-for="sec in section">
              <a :href="sec.url">{{ sec.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-flex bottom">
        <span>{{ data.footer.copyright }}</span>
        <span>
          <a :href="data.footer.imprint">Imprint</a> |
          <a :href="data.footer.privacy">Privacy</a>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import CustomNavbar from './CustomNavbar.vue'
import SearchBox from '@SearchBox'
export default {
  name: 'Home',
  components: { NavLink, CustomNavbar, SearchBox },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
#app
  background-image url("/docs/img/docs_bg.svg")
  background-position bottom
  background-repeat no-repeat
  background-size cover
.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
    .search-box
      width 35rem
      input
        width 100%
        border-radius 0

  .features
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 20%
    max-width 20%
    background-color #9faed9
    box-shadow 5px 5px 14px 9px #E3E3E3
    img
      width 30%
      height auto
      margin auto
      display block
      padding 1.5em 0
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      margin 0
      padding 20px
      display block
      background-color #ffffff
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    color #656E77
    a
      color #656E77
    .footer-flex
      display flex
      flex-direction row
      justify-content space-between
    .bottom
      padding-top 10em
    .footer-section
      display flex
      flex-direction column
      img
        width 128px
        height auto
      ul
        list-style-type none
    .footer-tagline
      max-width 200px
@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem
@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
