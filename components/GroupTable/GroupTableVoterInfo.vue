<template>
  <div class="detail-wrapper d-flex align-center justify-space-between pl-1">
    <p class="text-subtitle-1">{{ name }} {{ lastname }}</p>
    <p class="text-subtitle-1">โหวตได้อีก: {{ count }} กลุ่ม</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'Pichai',
    lastname: 'Namwan',
    count: 9999999,
  }),
}
</script>
