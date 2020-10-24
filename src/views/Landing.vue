<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 50vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="{ backgroundImage: 'url(' + require('@/assets/img/le.jpg') + ')'}"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/10 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Linkmenų g. 58  bendruomenė
                </h1>
                 <p class="mt-4 text-lg text-gray-300">
                Facebook grupė: <a href="https://www.linkmenu58.lt/#/facebook">linkmenu58.lt/#/facebook</a>
                </br>
                Google pašto grupė: <a href="https://www.linkmenu58.lt/#/google">linkmenu58.lt/#/google</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
          </div>
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <i class="fas fa-list text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Apie puslapį
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
               <p class="text-lg leading-relaxed m-4 text-gray-600">
                Nors turime tris „Facebook“ grupes, bendravimas ir problemų
                sprendimas stringa. Norėtųsi, kad su namais susijusius klausimus
                pavyktų spręsti efektyviau. Būtent tam ir skirtas šis puslapis,
                kuriame rasite visą informaciją apie tai, kas svarbu mūsų bendruomenei.
              </p>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
               <b>Tačiau, žinoma, čia dažnai neužsuksite, tad kol neturime namo
                  bendrijos, siūlome</b>
                <li class="text-lg leading-relaxed m-4 text-gray-600">
                  Pagrindinėje „Facebook“ grupėje (<a href="https://linkmenu58.lt/#/facebook">linkmenu58.lt/#/facebook</a>)
                  bendrauti visais šiuo metu aktualiais klausimais.
                </li>
                <li class="text-lg leading-relaxed m-4 text-gray-600">
                  Naujoje „Google“ grupėje (<a href="https://linkmenu58.lt/#/google">linkmenu58.lt/#/google</a>) galime
                  spręsti ilgalaikius klausimus (pvz. sugedę garažo vartai,
                  bendruomenės kūrimas, pirmininko rinkimai ir kt.)
                </li>
                <li class="text-lg leading-relaxed m-4 text-gray-600">
                  <b>(!)</b> „Facebook“ grupė skirta tik šiuo metu svarbiems ir
                  greitai išsprendžiamiems klausimams, o „Google“ palikime
                  klausimus, kurių svarbu nepamesti ir rasti informaciją po
                  kurio laiko.
                </li>
              </p>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
              >
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1540921002383-b2a7ff6a716d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Visų pagrindinių komunikacijos kanalų nuorodos yra viršuje,
                    dešinėje
                  </h4>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="https://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
              >
                <img
                  alt="..."
                   src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Naujienos
                  </h4>
                </blockquote>
              </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                  <i class="fas fa-thumbtack"></i>
                </div>
               <h4 class="text-gray-600">
                Šiuo metu vyksta balsavimas dėl kondicionerių įsirengimo butuose.
                Prašome būstų savininkų dalyvauti balsavime:
                <a href="https://www.ebustas.lt/apklausos">
                https://www.ebustas.lt/apklausos
                </a>
                arba eBustas programėlėje.
               </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
