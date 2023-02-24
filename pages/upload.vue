<template>
  <NuxtLayout name="auth">
    <div class="container mx-auto h-screen flex justify-center items-center">
      <div class="w-full lg:w-1/3 px-10 lg:px-0">
        <div class="flex justify-center items-center mx-auto mb-4 w-40">
          <div class="relative">
            <NuxtLink to="#">
              <img
                src="/images/avatar.jpg"
                alt=""
                class="rounded-full border-white border-4"
              />
              <img
                src="/icon/icon-avatar-add.svg"
                alt=""
                class="absolute right-0 bottom-0 pb-2"
              />
            </NuxtLink>
          </div>
        </div>
        <h2 class="font-normal mb-3 text-3xl text-white text-center">Hi, Name</h2>
        <p class="text-white text-center font-light">Tolong upload foto selfimu yuk...</p>
        <div class="mb-4 mt-6">
          <div class="mb-3">
            <button
              @click="registerSuccessRouter"
              class="block w-full bg-orange-button hover:bg-blue-button text-white font-semibold px-6 py-4 text-lg rounded-full"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div>
          <div class="mb-4">
            <button
              @click="registerSuccessRouter"
              class="block w-full bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light px-6 py-4 text-lg rounded-full"
            >
              Lewati
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const router = useRouter();
const registerSuccessRouter = () => {
  router.push("/register-success");
};

definePageMeta({
  layout: false,
});

useHead({
  title: "Funded | Upload Photo",
  meta: [
    {
      name: "description",
      content: "Funded website for campaign startup to grow up",
    },
  ],
});
</script>
