<template>
  <div class="p-6">
    <h1 class="flex justify-center text-3xl">About Page</h1>
    <p class="my-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex molestias facere soluta magni quos, ducimus nulla ut quasi non nobis nesciunt. Doloremque qui itaque tempora odio illum quidem exercitationem cumque quibusdam suscipit nihil? Recusandae tenetur fugiat enim vel, voluptate numquam perspiciatis, nisi corrupti quis ducimus exercitationem, fuga illum sequi facilis veniam maxime ut incidunt? Modi nostrum ea expedita vitae quaerat harum id sit esse at officia? Ratione, aliquid molestiae! Odit error alias adipisci dolorum, voluptas pariatur esse porro, corrupti iusto sunt fugiat distinctio illo veniam velit maxime id accusantium! Voluptatem ex, dolor omnis voluptate culpa perspiciatis deleniti ratione repellendus tenetur vitae unde, facere, vel ullam est dignissimos vero dolore laudantium ea! Esse praesentium sint dolor numquam! Ea, iste veniam impedit sint saepe laudantium pariatur! Consectetur ea unde eligendi omnis a. Vero ad adipisci vel aliquid minus a corporis unde, minima possimus doloremque nesciunt natus assumenda repudiandae distinctio quos quidem perspiciatis exercitationem hic eaque officia harum ullam dolores quas numquam! Odio quibusdam repudiandae laudantium iure facere a totam ex vero pariatur, officia deserunt nemo, voluptatibus nam cupiditate non animi temporibus quidem veniam ducimus at, molestiae nobis. Fuga veritatis optio magnam, enim neque autem accusantium! Impedit sint minima facilis quae, nisi molestiae!</p>
  </div>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault'

export default {
  name: 'About',
  emits: ['layoutChange'],
  setup(props, { emit }) {
    emit('layoutChange', LayoutDefault)
  }
}
</script>