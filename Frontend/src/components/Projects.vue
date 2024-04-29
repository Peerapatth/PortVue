<template>
  <section class="projects">
    <div class="Projects-sub-header">Look at My</div>
    <div class="Projects-header">Projects</div>
  </section>
</template>

<style scoped>
.projects {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.Projects-header, .Projects-sub-header {
  width: 10rem;
  font-weight: 600;
  background: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.Projects-sub-header {
  color: var(--write-primary);
  width: auto;
  margin-bottom: 0rem;
}
</style>
