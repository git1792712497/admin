<template>
  <span v-if="isLoading">Loading</span>
  <img v-else :src="avatarUrl">
</template>


<script setup>
import { useImage } from '@vueuse/core'

const avatarUrl = 'https://place.dog/300/200'
const { isLoading } = useImage({ src: avatarUrl })
</script>

