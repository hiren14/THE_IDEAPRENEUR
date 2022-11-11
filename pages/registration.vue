<template>
    <div class="container">
      
      <NavigationBar />
    <div class="form">
        <br />
        <br />
        <br />
    <hr />


    <iframe class="res" src="https://docs.google.com/forms/d/e/1FAIpQLSdmwPfVz2yPj8mWTmPUCwSCgTn3Z_rWDAKrdgw_3yQClal6aA/viewform?embedded=true" width="100%" height="1700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
<ScrollTopVue />
    <ScrollTopArrowVue />
    
  </div>
    </div>
  </template>
  
  <script>
  import NavigationBar from "~/components/NavigationBar";
  import FooterSection from "~/components/FooterSection";
  import ScrollTopArrowVue from "../components/ScrollTopArrow.vue";
  import ScrollTopVue from "../components/ScrollTop.vue";
    export default {
    components: {
      NavigationBar,
      FooterSection,
      ScrollTopArrowVue,
      ScrollTopVue
    },
  };
  </script>
  
  <style>
  .res{
    position:absolute;
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
  