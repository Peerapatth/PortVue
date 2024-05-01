<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  console.log('Component is mounted')
})
</script>

<template>
  <nav>
    <ul>
      <div class="Navlink">
        <div class="Navlogo">
          <li>
            <header><a href="#"> JIRAPAT.</a></header>
          </li>
        </div>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </div>
      <div class="Navtalk">
        <li><a href="mailto:bukharney@gmail.com">Let's talk</a></li>
      </div>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--color-background);
  padding: 2rem 0rem;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: var(--grey-primary);
  text-decoration: none;
  padding: 0 1rem;
}

.Navlink {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.Navlogo a {
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--write-primary);
}

.Navtalk {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.Navtalk a {
  background-color: var(--write-secondary);
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  color: var(--black-primary);
  font-weight: 500;
  transition: transform 0.3s ease;
}

.Navlink :not(:first-child):hover {
  transform: translateY(-1px);
}

.Navlink a:hover {
  color: var(--write-primary);
}

.Navtalk :hover {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  a {
    padding: 0 0.5rem;
  }

  .Navtalk a {
    padding: 0.3rem 0.75rem;
  }
}
</style>
