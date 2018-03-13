<template>
  <div class='home-page'>
    <p @click='handleClick'>
      click me
    </p>
    <p v-text='test'></p>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {TEST} from '../../store/mutation-types'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'test', 'userInfo'
    ])
  },
  methods: {
    ...mapMutations([
      TEST
    ]),
    handleClick () {
      this[TEST](Math.random()) // 调用mutation
      console.log(this.test) // 获取store中test数据
    }
  }
}
</script>

<style scoped lang='less'>
.home-page{
}
</style>
