<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  title: String
})
import { onMounted } from 'vue'
onMounted(() => {
  console.log('Component is mounted')
})
</script>

<template>
  <section class="about">
    <div class="about-left">
      <div class="about-pic"></div>
      <h1>Hi, I am</h1>
      <h2>Jirapat Lakma.|</h2>
    </div>
    <div class="about-right">
      As a 3rd-year Bachelor of Computer Engineering student, I am determined to gain further
      experience and enhance my skills as a Software Engineer. My career objective is to actively
      seek opportunities that will help me grow professionally, expand my knowledge, and contribute
      to meaningful software development projects.
      <div class="about-icon">
        <a href="https://www.linkedin.com/"><i class="bx bxl-linkedin"></i></a>
        <a href="https://github.com/"><i class="bx bxl-github"></i></a>
        <a href="https://www.instagram.com/"><i class="bx bxl-instagram"></i></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.about-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  margin-top: 1.5rem;
  font-weight: 600;
}

h2 {
  font-weight: 600;
  background: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.about-left h2 {
  width: 100%;
  animation:
    typing 3s steps(28) infinite,
    blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 3rem;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.about-pic {
  width: 100px;
  height: 100px;
  background-image: url('../assets/Avatar.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.about-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-icon {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
}

.about-icon i {
  margin-right: 1rem;
  padding: 0.5rem;
  font-size: 1.25rem;
  border-radius: 50%;
  color: var(--black-primary);
  background: var(--write-primary);
}

.about-icon i:hover {
  cursor: pointer;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .about {
    margin-top: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .about-left {
    order: 1;
  }

  .about-right {
    order: 2;
    margin-top: -2rem;
  }

  .about-left h2 {
    font-size: 2rem;
  }

  .about-icon {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
  }

  .about-icon i {
    margin-right: 0.75rem;
  }
}
</style>
