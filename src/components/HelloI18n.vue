<template>
  <p @click="df">하하하이</p>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HelloI18n',
  data() {
    return {
      dfg : "액티비티 그룹"
    }
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    // Something todo ..

    return { t }
  },
  methods : {
    df () {
      
      alert(this.$t('반갑습니다'))
    }
  }
})
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
