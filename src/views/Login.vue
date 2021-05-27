<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
      <h1 class="self-center my-1 text-2xl">Sign In</h1>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-grey-darker" for="username">
          Username
        </label>
        <input class="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker" id="username" type="text">
      </div>
      <div class="mb-6">
        <label class="block mb-2 text-sm font-bold text-grey-darker" for="password">
          Password
        </label>
        <input class="w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker" id="password" type="password">
        <p class="text-xs italic text-red">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-800" type="submit">
          Sign In
        </button>
        <a class="inline-block text-sm font-bold text-blue-600 align-baseline hover:text-blue-800" href="#">
          Forgot Password?
        </a>

        <router-link to="/" class="inline-block text-sm font-bold text-blue-600 align-baseline hover:text-blue-800" href="#">
          Go back Home
        </router-link>
    </div>
  </form>
</template>

<script>
import LayoutAuth from '@/layouts/LayoutAuth'
import { ref } from 'vue'

export default {
  name: 'Login',
  emits: ['layoutChange'],
  setup(props, { emit }) {
    emit('layoutChange', LayoutAuth)

    const handleSubmit = () => {
      alert('Form submitted')
    }

    const email = ref('')
    const password = ref('')

    return {handleSubmit, email, password}
  }
}
</script>