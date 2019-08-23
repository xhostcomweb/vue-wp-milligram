<template>
  <Layout>
    <div class="container center">
    <br /><br />
    <h2>Milligram Vue Wordpress News</h2>
    <dl class="post-list">
      <dt v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </dt>
    </dl>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
    </div>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Milligram Vue Wordpress News'
  }
}
</script>
