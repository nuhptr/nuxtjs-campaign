<template>
  <NuxtLayout name="success">
    <div class="container mx-auto h-screen flex justify-center items-center">
      <div class="w-full lg:w-1/3 px-10 lg:px-0">
        <div class="flex justify-center items-center mx-auto mt-6 mb-8">
          <img
            src="/illustration/funded-illustration.svg"
            alt="Funded Illustration"
            class="w-full h-64"
          />
        </div>
        <h2 class="font-medium mb-3 text-3xl text-center">Yeay! Kamu luar biasa</h2>
        <p class="text-center font-light">
          Uang kamu sudah ditransfer
          <br />
          kedalam akun perusahaan
        </p>
        <div class="mb-4 mt-6">
          <div class="mb-3">
            <button
              @click="indexRouter"
              class="block w-full bg-orange-button hover:bg-blue-button text-white font-semibold px-6 py-4 text-lg rounded-full"
            >
              Danai Project Lainnya
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

definePageMeta({
  layout: false,
});

useHead({
  title: "Funded | Fund Success",
  meta: [
    {
      name: "description",
      content: "Funded website for campaign startup to grow up",
    },
  ],
});
</script>
