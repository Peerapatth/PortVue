<script setup>
import Navbar from './Navbar.vue'
import About from './About.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
import Education from './Education.vue'

const scrollToSection = (sectionId, paddingTop = 20) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const navBarHeight = document.querySelector('nav').offsetHeight
    const offset = section.offsetTop - navBarHeight - paddingTop

    document.body.style.scrollBehavior = 'smooth'
    window.scrollTo({ top: offset, behavior: 'smooth' })
    setTimeout(() => {
      document.body.style.scrollBehavior = 'smooth'
    }, 1000)
  }
}
</script>

<template>
  <main>
    <Navbar @navigateTo="scrollToSection" />
    <About id="about" :style="{ paddingTop: '20px' }" />
    <Education id="education" :style="{ paddingTop: '20px' }" />
    <Projects id="projects" :style="{ paddingTop: '20px' }" />
    <Contact id="contact" :style="{ paddingTop: '20px' }" />
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

@keyframes scrollAnimation {
  from {
    opacity: 0;
    transform: translateY(50px);
    scroll-behavior: smooth;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    scroll-behavior: smooth;
  }
}

#about,
#education,
#projects,
#contact {
  animation: scrollAnimation 1s;
}
</style>
