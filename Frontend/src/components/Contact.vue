<template>
  <section class="contact">
    <div class="contact-footer">
      <div class="Footer-left">
        <header>JIRAPAT.</header>
        <span>Email:</span> Bukharney@gmail.com <br />
        <span>Phone:</span> 097-341-8245
      </div>
      <div class="Footer-right">
        <div class="Footer-link">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </div>
        <div class="Footer-icon">
          <a href="https://www.linkedin.com/in/jirapat-lakma/"><i class="bx bxl-linkedin"></i></a>
          <a href="https://github.com/Bukharney"><i class="bx bxl-github"></i></a>
          <a href="https://www.instagram.com/jrplm__/"><i class="bx bxl-instagram"></i></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid var(--grey-primary);
}

.contact-footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.Footer-left header {
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  margin-bottom: 4rem;
}

.Footer-left span {
  margin-top: 1.5rex;
  font-weight: 600;
}

.Footer-right {
  margin-top: 1.5rem;
  display: flex;

  flex-direction: column;
}

.Footer-link {
  display: flex;
  justify-content: flex-end;
}

.Footer-right li {
  margin-left: 1.5rem;
  font-weight: 600;
  list-style: none;
  margin-bottom: 4rem;
}

.Footer-right a {
  color: var(--grey-primary);
  text-decoration: none;
}

.Footer-right a:hover {
  color: var(--write-primary);
}

.Footer-icon {
  display: flex;
  justify-content: flex-end;
}

.Footer-icon a {
  margin-left: 0.5rem;
  background: var(--gredient);
  text-decoration: none;
  padding: 0.5rem;
  border: 1.5px solid var(--write-primary);
  color: var(--write-primary);
  border-radius: 20%;
}
</style>
