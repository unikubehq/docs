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

fetch("https://api.github.com/graphql", {
  "headers": {
    "accept": "*/*",
    "accept-language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "bearer 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",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "http://localhost:8080/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"operationName\":null,\"variables\":{\"number\":94},\"query\":\"query ($number: Int!) {\\n  repository(owner: \\\"unikubehq\\\", name: \\\"cli\\\") {\\n    discussion(number: $number) {\\n      title\\n      upvoteCount\\n      number\\n      url\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}",
  "method": "POST",
  "mode": "cors"
});