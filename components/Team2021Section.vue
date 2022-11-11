<template>
  <Container name="team" id="team">
    <section class="content-section">
      <HashHeader title="TEAM"  />
      <div class="contents">
        <div class="team-grid">
          <div v-for="(teamMember, index) in team" :key="index"
            :class="['team-card', `rot-${Math.floor(Math.random() * 24) * 15}`]">
            <a :href="teamMember.url" target="_blank" rel="noopener noreferrer">
              <div class="picture-wrapper smooth-transition">
                <img :src="teamMember.picture" alt="profile picture" class="profile-pic" />
              </div>
            </a>
            <h4 class="title">{{ teamMember.name }}</h4>
            <h6 class="title">{{teamMember.pos}}</h6>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";

export default {
  components: {
    Container,
    HashHeader,
  },
  data() {
    return {
      team: [
        {
          
            name: "Sachin Makwana",
            url: "https://www.linkedin.com/in/sachin-makwana-ab556919",
            pos: "Mentor",
            picture: require("~/assets/Team/menter.jpg"),
            rotation: 75,
          },
          {
          name: "Jay Patel",
            url: "https://in.linkedin.com/in/jay-patel-112569114",
            pos: "Mentor",
            picture: require("~/assets/Team/menter.jpg"),
            rotation: 75,
          },
          {
          name: "PATEL PRINCE",
          url: "https://www.linkedin.com/in/prince-patel-133452205",
          pos:'Co-Ordinator',
          picture: require("~/assets/Team/Prince Patel.jpg"),
          rotation: 205,
        },
        {
          name: "Khushali k Kapdi",
          
          pos:'Co-Co-ordinator',
          picture: require("~/assets/Team/Khushali.jpg"),
          rotation: 150,
        },
        {
          name: "Tarif Hingolja",
          url: "https://www.linkedin.com/in/tarifhingolja/",
          pos:'Event Coordinator ',
          picture: require("~/assets/Team/Tarif.jpg"),
          rotation: 150,
        },
        {
          name: "Mandaliya Aarti Dineshbhai ",
          pos:'Event Coordinator',
          picture: require("~/assets/Team/Aarti Mandaliya.jpg"),
          rotation: 150,
        },
        
        {
          name: "Dharm Patel",
          url: "https://www.linkedin.com/in/dharm-patel-57057420a",
          pos:'Event Management',
          picture: require("~/assets/Team/Dharm Patel.png"),
          rotation: 75,
        },
        {
        name: "Vyas Drashti Rameshbhai ",
        url: "www.linkedin.com/in/drashti-vyas-212b21199",
        pos:'Event Management',
        picture: require("~/assets/Team/Drashti Vyas.jpg"),
        rotation: 95,
      },
      {
        name: "Limbachiya Shivam Rajeshkumar ",
        url: "https://www.linkedin.com/in/shivam-limbachiya-731234247",
        pos:'Event Management',
        picture: require("~/assets/Team/Shivam Limbachiya.jpg"),
        rotation: 120,
      },
      {
        name: "Darji Nehaben Hasmukhbhai",
        pos:'Event Management',
        picture: require("~/assets/Team/Neha Darji.jpg"),
        rotation: 120,
      },
      
      {
          name: "Soham Thakar",
          pos:'Event Management',
          picture: require("~/assets/Team/Soham_.jpg"),
          rotation: 65,
        },
      {
        name: "Patel Ashvi Mahendrabhai ",
        url: "https://www.linkedin.com/in/ashvi-patel-170556245",
        pos:'Anchor',
        picture: require("~/assets/Team/Ashvi Patel.jpg"),
        rotation: 120,
      },
      {
        name: "Preet Parimal Shah ",
        url: "https://www.linkedin.com/in/preet-shah-25b3461b9/",
        pos:'Anchor',
        picture: require("~/assets/Team/Preet Shah.jpg"),
        rotation: 120,
      },
      {
        name: "LALANI HIREN NANDLAL ",
        url: "https://www.linkedin.com/in/hiren-lalani-8a6ba41b9",
        pos:'Tech Manger',
        picture: require("~/assets/Team/Hiren Lalani.jpg"),
        rotation: 75,
      },
      {
        name: "Chaudhari Miteshkumar Veljibhai",
        url: "https://www.linkedin.com/in/miteshkumar-chaudhari-41a0bb221/",
        pos:'Graphic Design',
        picture: require("~/assets/Team/Mitesh Chaudhari.png"),
        rotation: 150,
      },
      
        {
          name: "Helly Patel",
          url: "https://www.linkedin.com/in/helly-patel-56b4a2250",
          pos:'Social Media Manager',
          picture: require("~/assets/Team/Helly Patel.jpg"),
          rotation: 65,
        },
        {
          name: "Grishma Suresh Sao",
          url: "https://www.linkedin.com/in/grishma-sao-38910b250",
          pos:'Social Media Manager',
          picture: require("~/assets/Team/Grishma Sao.jpg"),
          rotation: 65,
        },
        {
          name: "Patel Aryan R",
          pos:'Social Media Manager',
          picture: require("~/assets/Team/Aryan Patel.jpg"),
          rotation: 65,
        },
        
        {
          name: "Patel Jil J.",
          url: "https://www.linkedin.com/in/jil-patel-05a520233",
          pos:'Photography',
          picture: require("~/assets/Team/Patel Jil.jpg"),
          rotation: 65,
        },
        {
          name: "Patel Vandan Kamleshbhai",
          url: "https://www.linkedin.com/in/Photography",
          pos:'Photography',
          picture: require("~/assets/Team/Vandan.jpg"),
          rotation: 65,
        },
      
        
        {
          name: "Kaushal Nagar",
          url: "https://www.linkedin.com/in/kaushal-nagar997",
          pos:'Social Media Manager',
          picture: require("~/assets/Team/Kaushal Nagar.png"),
          rotation: 65,
        },
      
      
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  font-family: "Segoe UI";

  .contents {
    padding: 1rem 4rem;
    text-align: center;

    @include respond-below(sm) {
      padding: 1rem 0rem;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-below(xs) {
        grid-template-columns: repeat(1, 1fr);
      }

      .team-card {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
        border-radius: 1rem;
        // justify-content: center;
        align-items: center;

        .picture-wrapper {
          border-style: solid;
          border-width: 3px;
          border-color: red red white red;
          width: 210px;
          height: 210px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-top: 1rem;

          .profile-pic {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            // background: var(red);
          }

          @include respond-below(md) {
            width: 170px;
            height: 170px;

            .profile-pic {
              width: 160px;
              height: 160px;
            }
          }

          @include respond-below(sm) {
            width: 140px;
            height: 140px;

            .profile-pic {
              width: 130px;
              height: 130px;
            }
          }
        }

        .title {
          font-size: 1.2rem;
          text-align: center;
          margin: 1rem 0rem;
          color: rgba(233, 83, 34, 1);

          @include respond-below(sm) {
            font-size: 1rem;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
