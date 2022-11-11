<template>
  <div class="container">
    <!-- template -->
    <NavigationBar />
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfbr4O9p32rhbhNVmFG88lCGMzEjuaMYAd5GWPu38zeIrNTsg/viewform?embedded=true" width="640" height="407" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    <BlogSection />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import BlogSection from "~/components/BlogSection";
import FooterSection from "~/components/FooterSection";

export default {
  components: {
    NavigationBar,
    BlogSection,
    FooterSection,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}
</style>
