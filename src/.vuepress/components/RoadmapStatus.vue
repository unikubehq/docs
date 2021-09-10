<template>
<div>
  <h2>Feature Status</h2>

  <h3>Voting Features</h3>
  <ul>
    <li v-for="post in votingFeatures">
      <a :href="$withBase(post.path)">{{ post.title }}</a>
    </li>
  </ul>

  <h3>Planned Features</h3>
  <ul>
    <li v-for="post in plannedFeatures">
      <a :href="$withBase(post.path)">{{ post.title }}</a>
    </li>
  </ul>

  <h3>In Progress Features</h3>
  <ul>
    <li v-for="post in inProgressFeatures">
      <a :href="$withBase(post.path)">{{ post.title }}</a>
    </li>
  </ul>

  <h3>Done Features</h3>
  <ul>
    <li v-for="post in doneFeatures">
      <a :href="$withBase(post.path)">{{ post.title }}</a>
    </li>
  </ul>

  <h3>Available Features</h3>
  <ul>
    <li v-for="post in availableFeatures">
      <a :href="$withBase(post.path)">{{ post.title }}</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "RoadmapStatus",
  data() {
    return {};
  },
  computed: {
    roadmapFiles() {
      return this.$site.pages.filter(p => {
        return p.path.indexOf('/roadmap/') >= 0 && p.relativePath.indexOf('README') < 0;
      })
    },
    availableFeatures() {
      return this.roadmapFiles.filter(p => {
        return p.frontmatter.status === 'available'
      })
    },
    votingFeatures() {
      return this.roadmapFiles.filter(p => {
        return p.frontmatter.status === 'voting'
      })
    },
    plannedFeatures() {
      return this.roadmapFiles.filter(p => {
        return p.frontmatter.status === 'planned'
      })
    },
    inProgressFeatures() {
      return this.roadmapFiles.filter(p => {
        return p.frontmatter.status === 'in-progress'
      })
    },
    doneFeatures() {
      return this.roadmapFiles.filter(p => {
        return p.frontmatter.status === 'done'
      })
    }

  }
}
</script>

<style scoped>

</style>