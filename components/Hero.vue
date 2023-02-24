<template>
    <div class="flex items-center pt-10 px-5 md:px-0">
        <div class="w-1/2">
            <h1 class="text-4xl text-white mb-6 leading-[54px]">
                Kami siap <u class="hero-underline">membantu</u> untuk <br />
                memulai & <u class="hero-underline">mendanai</u> <br />
                kebutuhan mereka
            </h1>
            <p class="text-gray-400 text-xl font-light mb-8 leading-[30px]">
                Danai ide terbaik Anda untuk menjadi <br />
                produk nyata dan jadilah kontributor
            </p>
            <button @click="$router.push({ path: '/' })"
                class="block bg-blue-button hover:bg-green-button text-white font-semibold px-12 py-3 text-xl rounded-full">
                Temukan Project
            </button>
        </div>
        <div class="w-1/2 flex justify-center">
            <img src="/images/hero-image@2x.png" alt="crowdfunding project" />
        </div>
    </div>
</template>