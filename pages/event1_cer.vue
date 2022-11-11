
<template>
    <div class="container">
      
      <NavigationBar />
    <div class="form">
        <br />
        <br />
        <br />
    <hr />
    <iframe class="res" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ12G8m9nbn3CzC8mYQMrUuc25qHlxcrS0lOI6jjrenuePeymdAO7QO18Ie5VGQzlboKWGIMbyEaWS8/pubhtml?widget=true&amp;headers=false"></iframe>
    <ScrollTopVue />
    <ScrollTopArrowVue />
    
  </div>
    </div>
  </template>
  
  <script>
  import NavigationBar from "~/components/NavigationBar";
  import FooterSection from "~/components/FooterSection";
  import ScrollTopVue from "../components/ScrollTop.vue";
import ScrollTopArrowVue from "../components/ScrollTopArrow.vue";
  export default {
    components: {
      NavigationBar,
      FooterSection,
      ScrollTopVue,
      ScrollTopArrowVue,
    },
  };
  </script>
  
  <style>
  .res{
    position:absolute;
    height: 100%;
    width: 100%;
  }
  
  .container {
    display: flex;
    flex-direction: column;
  }
    @media screen and (max-width: 992px) {
            .form{
                height: 700px;
                 width: 700px;   
            }
  }
  
.res{
 width: 100%;
}
  </style>
  