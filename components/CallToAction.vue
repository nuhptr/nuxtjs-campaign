<template>
    <section class="call-to-action bg-[#121212] mt-24 pt-16 pb-10">
        <div class="container mx-auto">
            <div class="w-full text-center">
                <h1 class="text-5xl text-white font-semibold leading-[72px]">
                    Cara mudah untuk mendanai <br /> ide dan inovasi terbaik
                </h1>
                <button @click="$router.push({ path: '/upload' })"
                    class="inline-block bg-orange-button hover:bg-white text-white hover:text-blue-500 font-semibold px-24 py-4 mt-8 text-lg rounded-full">
                    Mulai
                </button>
            </div>
        </div>
    </section>
</template>