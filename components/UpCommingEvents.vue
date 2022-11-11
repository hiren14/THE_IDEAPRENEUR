<template>
<div id="up">
  <div class="contents">
    <div class="events-wrapper">
  
      <p class="details">
        <span style="color: #d74f4b; font-size: 25px; font-weight: 600"
          >UpComming Events</span
        >
       <hr class="dots" />
      </p>
      <br />
      <div class="cards-grid">
        <div v-for="(event, index) in events" :key="index" class="card">
          <div class="card-side smooth-transition">
            <img :src="event.image" alt="cityImage" />
            <div class="texts">
              <h4 class="eventName" v-html="event.name">{{event.name}}</h4>
              <p class="event">
                Date: {{ event.date }} <br />
                Time: {{ event.time }} <br />
              </p>
              <a :href="event.url" target="_blank">
                <p
                  :class="[
                    'venue smooth-transition',
                    event.active ? 'highlight' : null
                  ]"
                >
                  Venue: {{ event.venue }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  </div>
</template>

<script>
import Container from "~/components/Container";

export default {
  components: {
    Container
  },
  data() {
    return {
      events: [
        {
          name: "HTML and CSS Workshop",
          details:
            "We're a group of passionate developers who are here to help you grow your programming skills.<br /><br />Join us for a workshop Glance At Web Designing about HTML and CSS by CodeHives Club.<br />This workshop is on Friday, Sept 30th from 10:30am - 2:00 pm (ET) and will cover the fundamentals of CSS and HTML with an emphasis on how to use each to make your websites more functional.<br />Learn how to create effective layouts, design images as backgrounds, add animation to your content and much more!",
          image: require("~/assets/event/eve_3.jpg"),
          venue: "Seminar Hall, Cse Dept, GecPatan",
          date: "30th Sept. 2022",
          time: "10:30 AM to 2:00 PM",
          url: "/registration",
          active: true
        },
        
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.contents {
  width: 90%;
  margin: 0 auto;
  padding: 80px 0 20px;

  .events-wrapper {
    background-color: #fdf7df;
    border-radius: 10px;
    text-align: center;
    padding: 30px;

    .details {
      width: 70%;
      margin: auto auto 2rem;

      @include respond-below(xs) {
        width: 90%;
      }
    }

    img {
      margin: auto auto 30px;
      width: 300px;

      @include respond-below(xs) {
        width: 90%;
      }
    }

    .cta-button-disabled {
      color: #666;
      background-color: #ccc;
      border: none;
      text-decoration: none;
      margin-bottom: 1rem;
      height: 5rem;
      padding: 0.5rem 1rem;
      font-family: "Segoe UI Bold";
      border-radius: 0.5rem;
      cursor: pointer;
    }

    .cta-button {
      background-color: #e85325;
      color: white;
      border: none;
      text-decoration: none;
      margin-bottom: 1rem;
      height: 5rem;
      padding: 0.5rem 1rem;
      font-family: "Segoe UI Bold";
      border-radius: 0.5rem;
      cursor: pointer;
      box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

      &:hover {
        box-shadow: rgba(215, 79, 75, 0.25) 0px 0px 0px 6px;
      }
    }

    .cards-grid {
      display: grid;
      position: relative;
      grid-template-columns: 1fr 1fr 1fr;
      background-color: #fdf7df;
      border-radius: 10px;
      column-gap: 30px;
      margin-top: 2rem;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
        margin-top: 30px;
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 30px;
      }

      @include respond-below(xs) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 30px;
      }

      .card {
        min-height: 25rem;
        display: flex;
        align-items: center;
        justify-content: center;

        @include respond-below(lg) {
          min-height: 18rem;
        }

        a {
          text-decoration: none;
          color: unset;
        }

        .card-side {
          width: 100%;
          border-radius: 15px;
          padding: 1.5rem;
          background-color: #fdf7df;
          border: 2px solid #d8504b;

          &:hover {
            box-shadow: rgba(215, 79, 75, 0.25) 0px 0px 0px 10px;
          }

          img {
            margin: auto auto -5px;
            width: 100%;
          }
        }

        .image {
          position: relative;
          display: flex;
          flex-direction: column;
          align-content: center;
          margin-left: auto;
          margin-right: auto;

          img {
            margin: 16px;
            width: 190px;
          }

          .line {
            position: absolute;
            right: 0px;
            border-left: 2px dashed #ff5100;
            top: -50px;
            height: 300%;
          }
        }

        .texts {
          text-align: center;

          .highlight {
            background: #d8504b;
            border-radius: 5px;
            color: white;
            padding: 4px 0;
            margin-top: 8px;

            &:hover {
              box-shadow: rgba(215, 79, 75, 0.25) 0px 0px 0px 6px;
            }
          }

          .eventName {
            font-size: 1.2rem;
            font-weight: bold;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
}
.dots {
  color:  #d74f4b;
   height: 8px;
   align-item: center;
  border-width: 0 0 8px;
  border-style: solid;
  border-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 1" width="8" height="4"><circle fill="rgb(215, 79, 75)" cx="1" cy="0.5" r="0.5"/></svg>') 0 0 100% repeat;
   
 width: 70%;
      margin: auto auto .5rem;

      @include respond-below(xs) {
        width: 90%;
      }
}
</style>
