<template>
  <div class="relative"> 
      <label class="mb-1" for="">{{ label }}</label>
    <div class="input-wrapper flex items-center jsutify-between" @click="openOptions = !openOptions">
      <input
        v-model="selected"
        type="text"
        placeholder="— Select —"
        class="w-10/12"
        @change="$emit('change', e.target.value)"
      />
      <img src="" alt="" class="cursor-pointer" />
    </div>

    <div v-if="openOptions" class="absolute select-options-card w-full z-50">
      <span
        v-for="(option, index) in options"
        :key="index"
        class="option"
        @click="changeContent(option)"
      >
        {{ option }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectOptions',
  props: {
    options: {
      type: Array,
      Default: [],
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      openOptions: false,
    }
  },

  methods: {
    changeContent(option) {
      this.selected = option
      this.openOptions = false
    },
  },
}
</script>

<style>
.select-options-card {
  background: #ffffff;
  box-shadow: 0px 1px 5px #26262619;
  border: 1px solid #e8e2e8;
  border-radius: 14px;
  opacity: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  z-index: 9999999.99;
}

.option {
  font-size: 14px;
  margin-bottom: 14px;
}

.input-wrapper {
  background: #fcfcfc 0% 0% no-repeat padding-box;
  border: 1px solid #e7e7eb;
  border-radius: 14px;
  padding: 18px 16px;
}

input {
    background: transparent;
    border: none;
}

input:focus {
  outline: none;
}

label {
  font-size: 14px;
  letter-spacing: 0px;
  color: #4a4a4a;
  padding-left: 10px;
}
</style>