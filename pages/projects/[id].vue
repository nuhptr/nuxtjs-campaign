<template>
  <div class="project-page">
    <section class="project-header pt-5">
      <div class="container mx-auto relative">
        <Navbar />
      </div>
    </section>
    <section class="container project-container mx-auto -mt-56">
      <div class="flex mt-3">
        <div class="w-3/4 mr-6">
          <div class="bg-white p-3 mb-3 border border-gray-400 rounded-20">
            <figure class="item-image">
              <img
                src="/images/project-image.jpg"
                alt="Image Project"
                class="rounded-20 w-full"
              />
            </figure>
          </div>
          <div class="flex -mx-2">
            <div
              class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20"
            >
              <figure class="item-thumbnail">
                <img
                  src="/images/project-slider-1.jpg"
                  alt="Project Slider 1"
                  class="rounded-20 w-full"
                />
              </figure>
            </div>
            <div
              class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20"
            >
              <figure class="item-thumbnail">
                <img
                  src="/images/project-slider-2.jpg"
                  alt="Project Slider 2"
                  class="rounded-20 w-full"
                />
              </figure>
            </div>
            <div
              class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20"
            >
              <figure class="item-thumbnail">
                <img
                  src="/images/project-slider-3.jpg"
                  alt="Project Slider 3"
                  class="rounded-20 w-full"
                />
              </figure>
            </div>
            <div
              class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20"
            >
              <figure class="item-thumbnail">
                <img
                  src="/images/project-slider-4.jpg"
                  alt="Project Slider 4"
                  class="rounded-20 w-full"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="w-1/4">
          <div
            class="bg-white w-full p-5 border border-gray-400 rounded-20 sticky"
            style="top: 15px"
          >
            <h3>Pimpinan Project:</h3>

            <div class="flex mt-3">
              <div class="w-1/4">
                <img
                  src="/images/testimonial-1-icon.png"
                  alt="Testimonial 1"
                  class="w-full inline-block rounded-full"
                />
              </div>
              <div class="w-3/4 ml-5 mt-1">
                <div class="font-semibold text-xl text-gray-800">Julia Keeva</div>
                <div class="font-light text-md text-gray-400">28.093 Penyokong</div>
              </div>
            </div>

            <h4 class="mt-5 font-semibold">Apa yang akan kamu dapat:</h4>
            <ul class="list-check mt-3 leading-7">
              <li>Ekuitas startup langsung dari pendiri</li>
              <li>Layanan atau produk khusus yang dimiliki startup</li>
              <li>Anda juga dapat menjual ekuitas Anda setelah startup melakukan IPO</li>
            </ul>
            <input
              type="number"
              class="border border-gray-500 block w-full px-6 py-3 mt-4 rounded-full text-gray-800 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
              placeholder="Jumlah dalam IDR"
              value=""
            />
            <NuxtLink
              to="/fund-success"
              class="text-center mt-3 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full"
            >
              Danai Sekarang
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-8">
      <div class="flex justify-between items-center">
        <div class="w-full md:w-3/4 mr-6">
          <h2 class="text-4xl text-gray-900 mb-2 font-medium">Keberuntungan Wireboard</h2>
          <p class="font-light text-xl mb-5">
            Era baru keyboard mekanis untuk semua orang
          </p>

          <div class="relative progress-bar">
            <div class="overflow-hidden mb-4 text-xs flex rounded-full bg-gray-200 h-6">
              <div
                style="width: 80%"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-button progress-striped"
              ></div>
            </div>
          </div>
          <div class="flex progress-info mb-6">
            <div class="text-2xl">80%</div>
            <div class="ml-auto font-semibold text-2xl">Rp 40.000.000</div>
          </div>

          <p class="font-light text-xl mb-5 leading-9">
            Dirancang agar sesuai dengan pengalaman mengetik khusus Anda. Apa pun yang
            terjadi Anda suka, linear, clicky atau sedikit di antaranya, kami punya Anda
            ditutupi dengan tiga opsi sakelar Gateron (Biru, Coklat, Merah). Dengan masa
            hidup 50 juta penekanan tombol yang ingin kami buat yakin bahwa Anda mengalami
            umpan balik yang sama untuk setiap keystroke.
          </p>
          <p class="font-light text-xl mb-5 leading-9">
            Dengan rollover N-key (NKRO pada mode kabel saja) Anda dapat mendaftar sebagai
            banyak tombol yang dapat Anda tekan sekaligus tanpa kehilangan karakter.
            Memungkinkan untuk menggunakan semua kunci media yang sama dengan macOS
            konvensional.
          </p>
          <p class="font-light text-xl mb-5 leading-9">
            Keyboard ini mampu bertahan hingga 72 jam mengetik, atau hingga 9 hari
            pemakaian normal (8 jam/hari) dengan baterai besar 4000 mAh.
          </p>
        </div>
        <div class="w-1/4 hidden md:block"></div>
      </div>
    </section>
    <CallToAction />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Funded | Details Projects",
  meta: [
    {
      name: "description",
      content: "Funded website for campaign startup to grow up",
    },
  ],
});
</script>
