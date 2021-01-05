<template>
  <p class="text-subtitle-1 pl-1">
    กลุ่มที่ {{ group.id }}
    <br />
    ชื่อกลุ่ม: {{ group.name }}
    <br />
    Repo:
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
