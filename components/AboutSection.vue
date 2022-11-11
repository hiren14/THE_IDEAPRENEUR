<template>
  <div id="about">
    <Container name="about">
      <section class="content-section">
        <HashHeader title="ABOUT US" />
        <div class="contents">
          <div class="about">
            <p>
              <span style="color: rgba(233, 83, 34, 1)"> The Ideapreneurship</span>
              - is Entrepreneurship Club in Computer Science and Engineering Department of Government Engineering College Patan, A Entrepreneurship club will help students to turn their ideas and passions into businesses and will help to develop future business leaders.
              <br />
              <br />
              It’s Goal is to benefit and develop aspiring entrepreneurs as it will act as a platform for applying and exercising academic learnt skills           </p>
         
              It is most important for<span style="color: rgba(233, 83, 34, 1)">  college nowadays because there is a start-up wave riding across the nation. From making job seeker to job creator. 
             </span>
                <!-- <div class="cta-buttons">
              <button class="cta-button smooth-transition">
                <img src="~/assets/HTF2/about-where.svg" />
                <div>
                  <span class="title">WHERE</span
                  ><span class="desc">Virtual Event</span>
                </div>
              </button>
              <button class="cta-button smooth-transition">
                <img src="~/assets/HTF2/about-when.svg" />
                <div>
                  <span class="title">WHEN</span
                  ><span class="desc">22-24 Oct, 2021</span>
                </div>
              </button>
            </div> -->
          </div>
          <div class="img hide-small">
            <img src="~/assets/logo1.png" />
          </div>
        </div>
      </section>
    </Container>
  </div>
</template>

<script>
import HashHeader from "~/components/HashHeader";
import Container from "~/components/Container";
export default {
  components: {
    HashHeader,
    Container,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 2rem 0 10px;
  font-family: "Segoe UI";

  .contents {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
    align-items: flex-end;

    @include respond-below(md) {
      grid-template-columns: repeat(1, 1fr);
    }

    .about {
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;

      p {
        color: rgba(112, 112, 112, 1);
        font-weight: bold;
        margin-top: 2rem;
        font-size: 1.2rem;

        @include respond-below(md) {
          padding-top: 20px;
        }
      }

      .cta-buttons {
        margin-top: 1.75rem;
        display: flex;

        .cta-button {
          background-color: white;
          border: none;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          border-radius: 0.5rem;
          width: 45%;
          box-shadow: rgba(255, 107, 0, 0.1) 0px 0px 10px 0px;

          img {
            margin-right: 0.7rem;
          }

          div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .title {
              font-size: 1.1rem;
              font-family: "Segoe UI Bold";
              color: rgba(233, 83, 34, 1);
            }

            .desc {
              opacity: 0.6;
              font-size: 0.95rem;
              margin-top: 0.5rem;
            }
          }

          &:nth-of-type(2) {
            margin-left: 2rem;
          }

          &:hover {
            background-color: #feede3;
          }
        }

        @include respond-below(xs) {
          flex-direction: column;
          justify-content: center;
          .cta-button {
            width: 100%;

            &:nth-of-type(2) {
              margin-top: 1rem;
              margin-left: 0rem;
            }
          }
        }
      }
    }

    .img {
      justify-self: center;
      img {
        width: 50vw;
        max-width: 600px;
      }
    }
  }
}
</style>
