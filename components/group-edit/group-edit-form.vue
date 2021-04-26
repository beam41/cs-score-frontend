<template>
  <v-form class="pt-8 pb-4" @submit.prevent="saveDialog = true">
    <v-text-field
      :value="group.id"
      type="text"
      label="กลุ่มที่"
      outlined
      dense
      readonly
    />
    <GroupMemberTable />
    <v-divider class="my-8"></v-divider>
    <v-text-field
      v-model="group.name"
      type="text"
      label="ชื่อกลุ่ม"
      :rules="[rules.required]"
      required
      outlined
      dense
    />
    <v-text-field
      v-model="group.pName"
      type="text"
      label="ชื่อโปรเจค"
      :rules="[rules.required]"
      required
      outlined
      dense
    />
    <v-text-field
      v-model="group.repo"
      type="text"
      label="GitHub repository"
      :rules="[rules.required, rules.gitRepo]"
      persistent-hint
      :hint="gitRepoHint"
      required
      outlined
      dense
    >
    </v-text-field>
    <div class="d-flex align-center justify-center">
      <v-card class="mt-4 mb-7">
        <v-card-subtitle
          >เลือกสีกลุ่ม (สำหรับหน้าแสดงผล, ปุ่มโหวต)</v-card-subtitle
        >
        <v-color-picker v-model="group.picker" dot-size="25" mode="hexa" />
      </v-card>
    </div>
    <v-btn
      block
      color="var(--color)"
      :loading="loading"
      type="submit"
      class="mb-2 submit-btn"
    >
      บันทึก
    </v-btn>
    <v-btn block depressed @click="back()"> กลับ </v-btn>
    <v-dialog v-model="saveDialog" max-width="290">
      <v-card>
        <v-card-title> บันทึกข้อมูล </v-card-title>

        <v-card-text> ต้องการบันทึกข้อมูลหรือไม่!? </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="accent" text @click="saveDialog = false"> กลับ </v-btn>

          <v-btn color="secondary" @click="submit"> บันทึก </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import { hexa2rgba, determineColor } from '@/util/color'
const GITHUB_REGEX = / *[a-zA-Z_.0-9-]+ *\/ *[a-zA-Z_.0-9-]+ */

export default {
  data: () => ({
    group: {
      id: 1,
      name: '',
      pName: '',
      repo: '',
      picker: '',
    },
    saveDialog: false,
  }),
  computed: {
    gitRepoHint() {
      return 'ใส่เป็น เจ้าของ/ชื่อ repo เช่น cscmu/camp-project'
    },
    rules() {
      return {
        required: (value) => !!value || 'กรุณากรอกค่า',
        gitRepo: (value) => GITHUB_REGEX.test(value) || this.gitRepoHint,
      }
    },
  },
  watch: {
    'group.picker'(to) {
      const toRgba = hexa2rgba(to)
      console.log(to, toRgba)
      this.colorHandle(toRgba)
    },
  },
  methods: {
    back() {
      this.$router.push('/group/list')
    },
    submit() {
      console.log('lol')
    },
    colorHandle(color) {
      const shouldDark = !determineColor(color)
      document.documentElement.style.setProperty(
        '--color',
        `rgba(${color.r},${color.g},${color.b},${color.a})`
      )
      document.documentElement.style.setProperty(
        '--text-color',
        shouldDark ? 'white' : `rgba(0,0,0,0.85)`
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.submit-btn {
  color: var(--text-color);
}
</style>
