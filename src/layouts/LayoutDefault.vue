<template>
<div class="max-w-screen-lg mx-auto">
    <nav class="flex h-12 text-lg text-white bg-blue-800 place-content-between">
      <div class="flex items-center">
        <router-link class="mx-10" to="/">Home</router-link>
        <router-link class="mx-10" to="/about">About</router-link>
      </div>
      <div class="flex items-center">
        <router-link class="mx-10" to="/login">Login</router-link>
      </div>
    </nav>
    <main>
        <slot/>
    </main>
    <footer class="flex justify-center text-lg">
      &copy; Marcin Hodor - mhodor@o2.pl.
    </footer>
</div>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>