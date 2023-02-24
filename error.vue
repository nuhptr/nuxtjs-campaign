<template>
  <NuxtLayout name="success">
    <div class="container mx-auto h-screen flex justify-center items-center">
      <div class="w-full lg:w-1/3 px-10 lg:px-0">
        <div class="flex justify-center items-center mx-auto mt-6 mb-8">
          <img
            src="/illustration/404-illustration.svg"
            alt="Error Illustration"
            class="w-full"
          />
        </div>
        <h2 class="font-medium mb-3 text-3xl text-center">
          Oops! Sesuatu ada yang salah
        </h2>
        <p class="text-center font-light" v-if="error.statusCode === 404">
          Halaman yang kamu tuju
          <br />
          tidak tersedia dalam moment ini!
        </p>
        <p class="text-center font-light" v-else>Error terjadi</p>
        <div class="mb-4 mt-6">
          <div class="mb-3">
            <button
              @click="indexRouter"
              class="block w-full bg-orange-button hover:bg-blue-button text-white font-semibold px-6 py-4 text-lg rounded-full"
            >
              Cari Donasi Project Lain
            </button>
          </div>
          <div class="mb-4">
            <button
              @click="dashboardRouter"
              class="block w-full bg-transparent border border-gray-500 text-gray-500 hover:bg-blue-button hover:border-green-button hover:text-white font-light px-6 py-4 text-lg rounded-full"
            >
              Dashboard ku
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const router = useRouter();
const indexRouter = () => {
  router.push("/");
};
const dashboardRouter = () => {
  router.push("/dashboard");
};

const error = defineProps(["error"]);
</script>
