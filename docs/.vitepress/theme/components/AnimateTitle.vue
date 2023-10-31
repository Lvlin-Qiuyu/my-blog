<script setup lang="ts"></script>

<template>
    <h1 class="name">
        <span class="clip">LvLin 的个人网站</span>
    </h1>
    <p class="tagline">不积跬步，无以至千里；不积小流，无以成江海</p>
</template>

<style scoped>
.name {
    background: -webkit-linear-gradient(315deg,
            rgb(210, 86, 53) 10%,
            #647eff 50%,
            rgb(238, 224, 112) 90%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.name {
    max-width: 392px;
    letter-spacing: -0.4px;
    line-height: 40px;
    font-size: 32px;
    font-weight: 700;
    white-space: pre-wrap;
}

.tagline {
    padding-top: 8px;
    max-width: 392px;
    line-height: 30px;
    font-size: 24px;
    /* font-weight: 700; */
    white-space: pre-wrap;
    color: var(--vp-c-text-2);
}

@media (min-width: 640px) {
    .name {
        max-width: 576px;
        line-height: 56px;
        font-size: 48px;
    }

    .tagline {
        padding-top: 12px;
        max-width: 576px;
        line-height: 42px;
        font-size: 36px;
    }
}

@media (min-width: 960px) {
    .name {
        line-height: 64px;
        font-size: 56px;
    }

    .tagline {
        line-height: 48px;
        font-size: 42px;
    }
}


</style>