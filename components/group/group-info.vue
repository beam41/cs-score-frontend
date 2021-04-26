<template>
  <p class="text-subtitle-1">
    <b>กลุ่มที่ {{ group.id }}</b>
    <br />
    <b>ชื่อกลุ่ม:</b> {{ group.name }}
    <br />
    <b>Repository:</b>
    <OuterLink :href="`https://github.com/${group.githubName}`" :dark="dark">{{
      group.githubName
    }}</OuterLink>
    /
    <OuterLink
      :href="`https://github.com/${group.githubName}/${group.githubRepo}`"
      :dark="dark"
      >{{ group.githubRepo }}</OuterLink
    >
  </p>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: true,
    },
    dark: Boolean,
  },
}
</script>

<style></style>
