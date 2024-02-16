<template>
  <button @click="handleClick">Sharing Remote Button 01</button>
</template>

<script lang="ts" setup>
const handleClick = () => {
  alert('Calling remote Button 01 method')
}
</script>
