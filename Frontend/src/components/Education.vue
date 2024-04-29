<template>
  <section class="Education-Skills">
    <div class="Education-Skills-details">
      <div class="Education">
        <div class="Education-Skills-header">Education</div>
        <div class="Education-details">
          <div class="Education-header">
            King Mongkut's University of technology Thonburi (KMUTT)
          </div>
          <div class="Education-subheader">Bachelor of Computer Engineering</div>
          <div class="Education-time">2021 - 2025</div>
          <div class="Education-header">SUBYAIWITTAYAKOM SCHOOL</div>
          <div class="Education-subheader">Science-Math Program</div>
          <div class="Education-time">2008 - 2020</div>
        </div>
      </div>
      <div class="Skills">
        <div class="Education-Skills-header">Skills</div>
        <div class="Skills-details">
          <div class="Skills-header">Languages</div>
          <div class="Skills-subheader">Go, TypeScript, Python, C, SQL, React</div>
          <div class="Skills-header">Tools</div>
          <div class="Skills-subheader">
            Git/Github, GitlabCI, Postman, PostgreSQL, VS Code, Docker
          </div>
          <div class="Skills-header">Soft Skills</div>
          <div class="Skills-subheader">Self-learning, Open-mindedness, Adaptability, Management</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.Education-Skills {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.Education-Skills-details {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.Education-Skills-header {
  width: 10rem;
  font-weight: 600;
  background: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.Education-header {
  font-weight: 600;
}

.Education-subheader {
  margin-top: 0.5rem;
  color: var(--grey-primary);
}

.Education-time {
  color: var(--grey-primary);
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--grey-primary);
  margin-bottom: 1rem;
}

.Skills-header {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.Skills-subheader {
  color: var(--grey-primary);
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .Education-Skills-details {
    margin-top: -3rem;
    grid-template-columns: 1fr;
  }
  .Education-Skills-header{
    font-size: 1.5rem;
  }
}
</style>
