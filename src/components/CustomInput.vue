<template>
  <label>
    <!-- <div>{{ label }}</div> -->
      <input
        v-bind="$attrs"
        :type="type"
        :date="date"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
        class="shadow bg-252945   appearance-none rounded-md w-full p-4 md:py-6 md:px-10   leading-tight  focus:shadow-outline input"
      />
    </label>
</template>

<script>
 
export default {
      inheritAttrs: false,
      props: {
        type: {
          type: String,
        },
        placeholder: {
          type: String,
          default: '',
        },  
        value: {
          type: [String, Number],
          default: ''
        }, 
        date: {
          type: [String, Number],
          default: ''
        }
      },
      data(){
        return{
          ...this.value,
        }
      }
  }
  
</script>

<style>
input{
  box-shadow: 0px 0px 4px 4px rgb(124,93,250); 
  border: solid 1px #494E6E;
  /* outline-color: rgba(60, 47, 109); */
}
.input:focus{
    outline:none;
    border: 1px solid #7c5ef3;
}
</style>
