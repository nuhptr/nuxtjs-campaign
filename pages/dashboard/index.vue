<script setup lang="ts"></script>

<template>
  <div class="project-page">
    <section class="dashboard-header pt-5">
      <div class="container mx-auto relative">
        <Navbar />
      </div>
    </section>
    <section class="container mx-auto pt-8 mb-24">
      <div class="flex justify-between items-center mb-6">
        <div class="w-3/4 mr-6">
          <h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2>
          <ul class="flex mt-2">
            <li class="mr-6">
              <NuxtLink class="text-gray-800 font-bold" to="/dashboard">
                Projek Kamu
              </NuxtLink>
            </li>
            <li class="mr-6">
              <NuxtLink
                class="text-gray-500 hover:text-gray-800"
                to="/dashboard/transactions"
              >
                Transaksi Kamu
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="w-1/4 text-right">
          <NuxtLink
            to="/dashboard/create"
            class="bg-orange-button hover:bg-blue-button text-white font-bold py-4 px-4 rounded inline-flex items-center"
          >
            + Buat Campaign
          </NuxtLink>
        </div>
      </div>
      <hr />
      <div class="block mb-2">
        <div class="w-full lg:max-w-full lg:flex mb-8" v-for="index in 3" :key="index">
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style="background-image: url('https://tailwindcss.com/img/card-left.jpg')"
          ></div>
          <div
            class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-8 flex flex-col justify-between leading-normal"
          >
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-1">
                Cari Uang Buat Gunpla
              </div>
              <p class="text-sm text-gray-600 flex items-center mb-2">
                Rp. 200.000.000 &middot; 80%
              </p>
              <p class="text-gray-700 text-base">
                With N-key rollover (NKRO on wired mode only) you can register as many
                keys as you can press at once without missing out characters. It allows to
                use all the same media keys as conventional macOS.
              </p>
            </div>
            <div class="flex items-center">
              <NuxtLink
                :to="'/dashboard/projects/' + 1"
                class="bg-blue-button hover:bg-orange-500 text-white py-2 px-4 rounded"
              >
                Detail
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
