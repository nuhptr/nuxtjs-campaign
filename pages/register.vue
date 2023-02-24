<template>
  <NuxtLayout name="auth">
    <div class="h-screen flex justify-center items-center">
      <div class="hidden md:block lg:w-1/3 bg-white h-screen auth-background"></div>
      <div class="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
        <div class="w-full lg:w-1/2 px-10 lg:px-0">
          <h2 class="font-bold mb-4 text-3xl text-white">Daftar Akun</h2>
          <div class="mb-5">
            <label class="font-normal text-lg text-white block mb-3">Full Name</label>
            <input
              type="text"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write Your Name Here"
              value=""
            />
          </div>
          <div class="mb-4">
            <label class="font-normal text-lg text-white block mb-3">Occupation</label>
            <input
              type="text"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write your occupation here"
              value=""
            />
          </div>
          <div class="mb-4">
            <label class="font-normal text-lg text-white block mb-3">Email Address</label>
            <input
              type="email"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write your email address here"
              value=""
            />
          </div>
          <div class="mb-6">
            <label class="font-normal text-lg text-white block mb-3">Password</label>
            <input
              type="password"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Type your password here"
              value=""
            />
          </div>
          <div class="mb-4">
            <button
              @click="uploadRouter"
              class="block w-full bg-orange-button hover:bg-blue-button text-white font-semibold px-6 py-4 text-lg rounded-full"
            >
              Lanjutkan Pendaftaran
            </button>
          </div>
          <div class="text-center">
            <p class="text-white text-md">
              Sudah punya akun?
              <NuxtLink to="/login" class="no-underline text-orange-button"
                >Masuk</NuxtLink
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const router = useRouter();
const uploadRouter = () => {
  router.push("/upload");
};

useHead({
  title: "Funded | Register",
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
  background-image: url("/images/sign-up-background.jpg");
  background-position: center;
  background-size: cover;
}
</style>
