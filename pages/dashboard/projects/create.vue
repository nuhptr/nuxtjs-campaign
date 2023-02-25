<script setup lang="ts">
useHead({
  title: "Dashboard | Create",
  meta: [
    {
      name: "description",
      content: "Funded website for campaign startup to grow up",
    },
  ],
});
</script>

<template>
  <div class="project-page">
    <section class="dashboard-header pt-5">
      <div class="container mx-auto relative">
        <Navbar />
      </div>
    </section>
    <section class="container mx-auto pt-8">
      <div class="flex justify-between items-center">
        <div class="w-full mr-6">
          <h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="w-3/4 mr-6">
          <h3 class="text-2xl text-gray-900 mb-4">Buat Project Baru</h3>
        </div>
        <div class="w-1/4 text-right">
          <NuxtLink
            to="/dashboard/{{  }}"
            class="bg-orange-button hover:bg-blue-button text-white font-bold px-4 py-1 rounded inline-flex items-center"
          >
            Save
          </NuxtLink>
        </div>
      </div>
      <div class="block mb-24">
        <div class="w-full lg:max-w-full lg:flex mb-4">
          <div
            class="w-full border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
          >
            <form class="w-full">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
                  >
                    Campaign Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Contoh: Demi Gunpla Demi Istri"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 mt-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
                  >
                    Price
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    placeholder="Contoh: 200000"
                  />
                </div>
                <div class="w-full px-3 mt-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
                  >
                    Short Description
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Deskripsi singkat mengenai projectmu"
                  />
                </div>
                <div class="w-full px-3 mt-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
                  >
                    What will backers get
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Contoh: Ayam, Nasi Goreng, Piring"
                  />
                </div>
                <div class="w-full px-3 mt-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Isi deskripsi panjang untuk projectmu"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
