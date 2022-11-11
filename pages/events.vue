<template>
  <div class="container">
    <NavigationBar />
    <EventsSection />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import PatEventsSection from "~/components/PastEventsSection";
import FooterSection from "~/components/FooterSection";

export default {
  components: {
    NavigationBar,
    PastEventsSection,
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
