<script setup>
import Navbar from './Navbar.vue';
import About from './About.vue';
import Projects from './Projects.vue';
import Contact from './Contact.vue';
import Education from './Education.vue';

const scrollToSection = (sectionId, paddingTop = 20) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navBarHeight = document.querySelector('nav').offsetHeight; 
    const offset = section.offsetTop - navBarHeight - paddingTop; 

    document.body.style.scrollBehavior = 'auto'; 
    window.scrollTo({ top: offset, behavior: 'smooth' });
    setTimeout(() => {
      document.body.style.scrollBehavior = 'smooth'; 
    }, 1000);
  }
}
</script>

<template>
  <main>
    <Navbar @navigateTo="scrollToSection" />
    <About id="about" :style="{ paddingTop: '50px' }" />
    <Education id="education" :style="{ paddingTop: '50px' }" />
    <Projects id="projects" :style="{ paddingTop: '50px' }" />
    <Contact id="contact" :style="{ paddingTop: '50px' }" />
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
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#about, #education, #projects, #contact {
  animation: scrollAnimation 0.5s ease forwards;
}
</style>
