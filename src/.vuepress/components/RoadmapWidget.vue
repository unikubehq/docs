<template>
<div class="roadmap-widget">
  <h4>Feature Status:
    <span class="feature-status">
      {{ featureStatus }}
    </span>
  </h4>
  <h4>Upvotes
    <span class="feature-status">
      {{ upvoteCount }}
    </span>
  </h4>
  <h4>Join the
    <a :href="discussionUrl" target="_blank">Discussion</a>
  </h4>

</div>
</template>

<script>
import axios from 'axios'

export default {
  name: "RoadmapStatus",
  created() {
    axios.post('https://api.github.com/graphql', {
          "operationName": null,
          "variables": {
              "number": this.$frontmatter.discussionNumber
          },
          "query": `query ($number: Int!){
         repository(owner:"unikubehq", name:"docs") {
           discussion(number: $number) {
             title
             upvoteCount
             number
             url
           }
     }
     }`,

      },
{
      headers: {
        Authorization: 'bearer ' + process.env.ACCESS_TOKEN
      },
    })
    .then(res => this.discussion = res.data.data.repository.discussion)


  },
  data() {
    return {
      discussion: null,
    };
  },
  computed: {
    featureStatus () {
      return this.$frontmatter.status
    },
    upvoteCount () {
      return this.discussion?.upvoteCount
    },
    discussionUrl () {
      return this.discussion?.url
    }
  }
}
</script>

<style scoped>
.roadmap-widget {
  position: fixed;
  right: 1.5em;
  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid #e3e3e3;
  padding: 0.5em 1em;
}
.feature-status {
  text-transform: capitalize;
}
@media only screen and (max-width: 1513px) {
  .roadmap-widget {
    position: static;
    max-width: 100%;
  }
}
</style>
