<template>
  <section class="translate">
    <article class="article">
      <p class="text-lead" ref="result">{{ result ? result : 'Paper Different' }}</p>
      <!-- <p>Lorem...</p> -->
      <div class="row flex-center">
        <button @click="translate">Translate</button>
        <button @click="copy">Copy</button>
      </div>
    </article>
    <div class="form-group">
      <textarea class="no-resize input" placeholder="No resize" v-model="input"></textarea>
    </div>
    <p class="footer">
      Made by
      <a href="http://brownhu.site">BrownHu</a>
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { setCORS } from 'google-translate-api-browser'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  result: string = ''
  input: string = ''
  copy() {
    const result = this.$refs.result
    this.$copyText(this.result, result)
  }
  translate() {
    const translate = setCORS('http://cors-anywhere.herokuapp.com/')
    translate(this.input, { to: 'zh', tld: 'cn' })
      .then((res: any) => {
        // I do not eat six days
        console.log(res.text)
        this.result = res.text
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
</script>

<style lang="less" scoped>
.translate {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  .article {
    width: 60vw;
  }
  .input {
    margin-top: 70px;
    width: 60vw;
    height: 320px;
  }
  .footer {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
}
</style>
