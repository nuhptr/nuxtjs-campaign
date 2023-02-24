<script setup lang="ts">
const router = useRouter();
const indexRouter = () => {
  router.push("/");
};

definePageMeta({
  layout: false,
});

useHead({
  title: "Funded | Login",
  meta: [
    {
      name: "description",
      content: "Funded website for campaign startup to grow up",
    },
  ],
});
</script>

<style scoped>
.auth-background {
  background-image: url("/images/sign-in-background.jpg");
  background-position: center;
  background-size: cover;
}
</style>

<template>
  <NuxtLayout name="auth">
    <div class="h-auto flex justify-center items-center">
      <div class="hidden md:block lg:w-1/3 bg-white h-screen auth-background"></div>
      <div class="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
        <div class="w-full lg:w-1/2 px-10 lg:px-0">
          <h2 class="font-normal mb-6 text-3xl text-white leading-[45px]">
            Masuk untuk gabung ke komunitas startup!
          </h2>
          <div class="mb-6">
            <label class="font-normal text-lg text-white block mb-3">Alamat Email</label>
            <input
              type="email"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Masukan emailmu disini"
              value=""
            />
          </div>
          <div class="mb-10">
            <label class="font-normal text-lg text-white block mb-3">Kata Sandi</label>
            <input
              type="password"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write your password here"
              value=""
            />
          </div>
          <div class="mb-6">
            <button
              @click="indexRouter"
              class="block w-full bg-orange-button hover:bg-blue-button text-white font-semibold px-6 py-4 text-lg rounded-full"
            >
              Masuk
            </button>
          </div>
          <div class="text-center">
            <p class="text-white text-md">
              Tidak punya akun?
              <NuxtLink to="/register" class="no-underline text-orange-button">
                Daftar
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
