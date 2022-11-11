
<template>
    <div class="container">
      
      <NavigationBar />
    <div class="form">
        <br />
        <br />
        <br />
    <hr />
    <iframe class="res" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQVRuxxV883I6dAj0nFExDjoOsCMoca23CZ9l6RUsKHEUnCeBuhjWCkzu1uzmNZjGTPorwPzCcl5qMO/pubhtml?gid=1840084557&single=true&amp;headers=false"></iframe>
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
  