<template>
  <footer v-if="data.footer" class="footer" :class="{ footerAutoMargin: isHomepage}">
    <div class="footer-flex">
      <div class="footer-section">
        <img :src="data.footer.icons" alt="Blueshoe/Unikube Logos" />
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
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      data: {
        footer: {
          copyright: "© Unikube 2022 © Blueshoe GmbH 2022",
          icons: "/docs/icons/footer_icons.svg",
          iconTagline: "Unikube powered by Blueshoe Digital Products",
          imprint: "https://unikube.io/legal-notice",
          privacy: "https://unikube.io/data-privacy",
          contact: {
            email: "info@unikube.io",
            phone: "+49 89 954 594 230",
            emailUrl: "mailto:info@unikube.io",
            phoneUrl: "tel:+49 89 954 594 230",
          },
          linkSections: {
            UnikubeSection: [
              {
                title: "Unikube",
                url: "https://unikube.io",
              },
              {
                title: "List of Features",
                url: "https://unikube.io/features",
              },
            ],
          },
        },
      },
    };
  },
  computed: {
    isHomepage() {
      return this.$frontmatter.home
    }
  }
};
</script>

<style lang="stylus">
.footer
    max-width: 960px
    margin-left "min(20rem, 50%)" % null;
    margin-right auto
    padding 2.5rem
    border-top 1px solid $borderColor
    color #656E77
    text-align left
    bottom 0;
    width calc(100% - 20rem)
    height auto
    z-index 11
    background-color white
    a
      color #656E77
    .footer-flex
      display flex
      flex-direction row
      justify-content space-between
      flex-wrap wrap
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
.footerAutoMargin
  margin-left auto !important
@media (max-width: 1100px)
  .footer
    .footer-flex
      flex-direction column
    .footer-section
      align-content center
@media (max-width: 719px)
  .footer
    margin-left auto
</style>
