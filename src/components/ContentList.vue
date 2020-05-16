<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "ContentList",
    created() {
      this.getContentData()
    },
    methods: {
      /**
       * 获取数据的方法
       */
      getContentData() {
        axios.get('/api/portal/lists/getCategoryPostLists?category_id=2')
          .then(response => {
            /*将数据抛出 父组件必须以contentList为原型绑定方法*/
            this.$emit('contentList', response.data.data.list);
          })
          .catch(error => {

          });

      }
    }
  }
</script>
