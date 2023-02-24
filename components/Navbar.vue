<template>
    <header class="flex items-center">
        <div style="height: 54px" class="pr-5">
            <img src="/illustration/logo.svg" alt="logo" class="h-full" />
        </div>
        <ul class="flex items-center">
            <li>
                <NuxtLink class="text-white hover:text-[#3b41e3] text-lg px-4 py-3" to="/">
                    Beranda
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="text-white hover:text-[#3b41e3] text-lg px-4 py-3" to="#">
                    Project
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="text-white hover:text-[#3b41e3] text-lg px-4 py-3" to="#">
                    Fitur
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="text-white hover:text-[#3b41e3] text-lg px-4 py-3" to="#">
                    Kisah Sukses
                </NuxtLink>
            </li>
        </ul>
        <ul class="flex ml-auto items-center mt-2">
            <li>
                <NuxtLink to="/register"
                    class="inline-block bg-transparent  hover:bg-opacity-25 border-white border hover:bg-white text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4">
                    Daftar
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="#"
                    class="inline-block bg-blue-500 hover:bg-blue-700  hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full">
                    Akun Saya
                </NuxtLink>
            </li>
        </ul>
    </header>
</template>