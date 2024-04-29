<script setup lang="ts">
import Navbar from './Navbar.vue';
import About from './About.vue';
import Projects from './Projects.vue';
import Contact from './Contact.vue';
import Education from './Education.vue';
</script>

<template>
  <main>
    <Navbar/>
    <About />
    <Education />
    <Projects />
    <Contact />
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  margin: 0;
  padding: 0vw 7.5vw;
  height: auto;
  margin-bottom: 3rem;
}
</style>
