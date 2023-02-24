<template>
  <div class="landing-page">
    <section class="landing-hero pt-5">
      <div class="header__bg"></div>
      <div class="container mx-auto relative">
        <Navbar />
        <Hero />
      </div>
    </section>
    <Steps />
    <ProjectFunded />
    <Client />
    <CallToAction />
    <Footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: "Funded | Startup Website",
  meta: [
    { name: "description", content: "Funded website for campaign startup to grow up" },
  ],
});
</script>
