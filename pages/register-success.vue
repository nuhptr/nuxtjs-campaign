<script setup lang="ts">
const router = useRouter();
const indexRouter = () => {
  router.push("/");
};

useHead({
  title: "Funded | Success Register",
  meta: [
    { name: "description", content: "Funded website for campaign startup to grow up" },
  ],
});
</script>

<template>
  <NuxtLayout name="success">
    <div class="container mx-auto h-screen flex justify-center items-center">
      <div class="w-full lg:w-1/3 px-10 lg:px-0">
        <div class="flex justify-center items-center mx-auto mt-6 mb-8">
          <img
            src="/illustration/success-illustration.svg"
            alt="success illustration"
            class="w-full h-64"
          />
        </div>
        <h2 class="font-medium mb-3 text-3xl text-center">
          Selamat Datang di Langkah Awal!
        </h2>
        <p class="text-center font-light">
          Akun kamu baru saja didaftarkan
          <br />
          kedalam sistem kami
        </p>
        <div class="mb-4 mt-6">
          <button
            @click="indexRouter"
            class="block w-full bg-orange-button hover:bg-blue-button text-white font-semibold py-3 text-base rounded-full"
          >
            Mulai Menjelajah
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
