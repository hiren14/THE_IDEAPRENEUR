<template>
  <a href="#" v-show="visible" class="bottom-right">
    <slot></slot>
  </a>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      element: null,
    };
  },
  methods: {
    scrollListener() {
      this.visible = this.element.scrollTop > this.element.scrollHeight * 0.35;
    },
  },
  mounted() {
    this.element = document.querySelector("html");
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    this.element.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.bottom-right {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 10000;
  position: fixed;
  bottom: 1.4rem;
  right: 1.4rem;
  cursor: pointer;
}
</style>
