<template>
  <div class='comment-page'>
    <text>我是从vuex中拿到的数据: {{test}}</text>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Comment',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'test'
    ])
  }
}
</script>

<style scoped lang='less'>
.comment-page{
}
</style>
