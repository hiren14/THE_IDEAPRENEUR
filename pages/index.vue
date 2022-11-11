<template>
  <div class="container">
    <NavigationBar />
    <ScrollTopArrow />
    <HeroSection
      data-aos="fade-left"
      data-aos-delay="100"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    /><!-- 
     <GlimpseSection
    
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      /> -->
    <AboutSection
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
    
     <!-- <TracksSection
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    /> -->
    <!-- <PrizesSection
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    /> -->
<!--      <ScheduleSection />  -->
     <!-- <SpeakersSection
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
     -->
     <!-- <SponsorsSection
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    /> -->
    <!-- <TestimonialsSection
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      /> -->
<!--      <UpComming /> -->
      <EventsSection />
    <Team2021Section
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
    <!-- <iframe class="res" src="https://docs.google.com/forms/d/e/1FAIpQLSewrWz8hVJxCMNfxxmbi60ue6QPRcKZFJN8EVtEwRoRcZrWww/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>  -->
     <!-- <FAQSection
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />  -->
    <FooterSection
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import HeroSection from "~/components/HeroSection";
import AboutSection from "~/components/AboutSection";
import GlimpseSection from "~/components/GlimpseSection";
import ScheduleSection from "~/components/ScheduleSection";
import ScrollTopArrow from "~/components/ScrollTopArrow";
// import FAQSection from "~/components/FAQSection";
import FooterSection from "~/components/FooterSection";
import aosMixin from "~/mixins/aos";
import EventsSection from "../components/PastEventsSection.vue";
import UpComming from "../components/UpCommingEvents.vue";

export default {
  components: {
    NavigationBar,
    HeroSection,
    AboutSection,
    GlimpseSection,
    ScheduleSection,
    // FAQSection,
    ScrollTopArrow,
    FooterSection,
    UpComming,
    EventsSection
},
  mixins: [aosMixin],
};
</script>

<style>
.container {
  /* margin: 0 auto; */
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
}
.res{
 width: 100%;
}
 @media screen and (max-width: 992px) {
iframe{
 align-items: center;
 }
}
 </style>
