<template>
  <section class="projects">
    <div class="Projects-sub-header">Look at My</div>
    <div class="Projects-header">Projects</div>
    <div class="Project-sections">
      <div class="Project-section">
        <div class="Project-header">
          <div class="Project-left">
            <div class="Project-pic-1"></div>
          </div>

          <div class="Project-right">
            <div class="Project-Name-Grid">
              <div>
                <div class="Project-Name">MODX - Back-end Developer</div>
                <div class="Project-time">SEP 2023 - DEC 2023</div>
              </div>
              <div class="Project-Link-icon">
                <a href="https://github.com/"><i class="bx bxl-github"></i></a>
                <a href="https://www.behance.com/"><i class="bx bxl-behance"></i></a>
              </div>
            </div>
            <p>
              At ModX, an online shopping platform for the KMUTT bookstore, I worked as a Back-end
              Developer, responsible for creating the web API ,manage database, and maintainer. ( Go
              & TypeScirpt ) ( University Project )
            </p>
          </div>
        </div>
      </div>
      <div class="Project-section">
        <div class="Project-header">
          <div class="Project-left">
            <div class="Project-pic-2"></div>
          </div>
          <div class="Project-right">
            <div class="Project-Name-Grid">
              <div>
                <div class="Project-Name">TradeKub - Back-end Develope</div>
                <div class="Project-time">MAR 2023 - MAY 20233</div>
              </div>
              <div class="Project-Link-icon">
                <a href="https://github.com/"><i class="bx bxl-github"></i></a>
                <a href="https://www.behance.com/"><i class="bx bxl-behance"></i></a>
              </div>
            </div>
            <p>
              As Tradekub's back-end developer, I optimize our stock trading platform's
              functionality, manage databases, and ensure secure and efficient stock transactions. I
              collaborate with front-end developers and prioritize system performance. ( Python )(
              University Project )
            </p>
          </div>
        </div>
      </div>
      <div class="Project-section">
        <div class="Project-header">
          <div class="Project-left">
            <div class="Project-pic-3"></div>
          </div>
          <div class="Project-right">
            <div class="Project-Name-Grid">
              <div>
                <div class="Project-Name">Banmod Hackathon - Front-end Developer</div>
                <div class="Project-time">OCT 2022 - NOV 2022</div>
              </div>
              <div class="Project-Link-icon">
                <a href="https://github.com/"><i class="bx bxl-github"></i></a>
                <a href="https://www.behance.com/"><i class="bx bxl-behance"></i></a>
              </div>
            </div>
            <p>
              As a member of the Bangmod Hackathon Project, I am on the website development team. It
              focuses on creating user-friendly and visually appealing website interfaces through
              effective collaboration with UX/UI design teams. ( JS & React)
            </p>
          </div>
        </div>
      </div>
      <div class="Project-section">
        <div class="Project-header">
          <div class="Project-left">
            <div class="Project-pic-4"></div>
          </div>
          <div class="Project-right">
            <div class="Project-Name-Grid">
              <div>
                <div class="Project-Name">- Full-Stack Developer</div>
                <div class="Project-time">OCT 2022 - PRESENT</div>
              </div>
              <div class="Project-Link-icon">
                <a href="https://github.com/"><i class="bx bxl-github"></i></a>
                <a href="https://www.behance.com/"><i class="bx bxl-behance"></i></a>
              </div>
            </div>
            <p>
              As a full-stack developer, I seamlessly handled both front-end and back-end tasks and
              ensured a smooth integration of features for a user-friendly web application. ( Go &
              Svelte )
            </p>
          </div>
        </div>
      </div>
      <div class="Project-section">
        <div class="Project-header">
          <div class="Project-left">
            <div class="Project-pic-5"></div>
          </div>
          <div class="Project-right">
            <div class="Project-Name-Grid">
              <div>
                <div class="Project-Name">- Full-Stack Developer</div>
                <div class="Project-time">JUNE 2022</div>
              </div>
              <div class="Project-Link-icon">
                <a href="https://github.com/"><i class="bx bxl-github"></i></a>
                <a href="https://www.behance.com/"><i class="bx bxl-behance"></i></a>
              </div>
            </div>
            <p>
              As a full-stack developer, I handled Farm Management System is a project designed to
              assist fish farmers in efficiently managing their aquaculture operations. By
              leveraging Internet of Things (IoT) technology. ( Dart & Flutter )
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.Projects-header,
.Projects-sub-header {
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

.Project-sections {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.Project-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 3rem;
}

.Project-Name-Grid {
  display: grid;
  grid-template-columns: 1fr auto;
}

.Project-Name {
  font-weight: 600;
  color: var(--write-primary);
  margin-bottom: 0.5rem;
}

.Project-time {
  color: var(--grey-primary);
  margin-bottom: 1rem;
}

.Project-Link-icon {
  display: flex;
  flex-direction: row;
}

p {
  margin-bottom: 1rem;
}

.Project-Link-icon i {
  margin-right: 0.75rem;
  padding: 0.3rem;
  font-size: 1.25rem;
  border-radius: 50%;
  color: var(--black-primary);
  background: var(--write-primary);
}

.Project-Link-icon i:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.Project-pic-1 {
  background-image: url('../assets/MODX/Mock.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: calc(50vw - 7.5vw * 2);
  height: calc(2000 / 5000 * 50vw);
}

.Project-pic-2 {
  background-image: url('../assets/TradeKub/Banner.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: calc(50vw - 7.5vw * 2);
  height: calc(2000 / 5000 * 50vw);
}

.Project-pic-3 {
  background-image: url('../assets/Banmod/Banner.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: calc(50vw - 7.5vw * 2);
  height: calc(2000 / 5000 * 50vw);
}

.Project-pic-4 {
  background-image: url('../assets/FullStack/Banner.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: calc(50vw - 7.5vw * 2);
  height: calc(2000 / 5000 * 50vw);
}

.Project-pic-5 {
  background-image: url('../assets/Farm/Banner.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: calc(50vw - 7.5vw * 2);
  height: calc(2000 / 5000 * 50vw);
}

@media (max-width: 768px) {

  .Projects-header,
  .Projects-sub-header {
    font-size: 1.5rem;
  }

  .Project-pic-1,
  .Project-pic-2,
  .Project-pic-3,
  .Project-pic-4,
  .Project-pic-5 {
    width: calc(100vw - 7.5vw * 2);
    height: calc(2000 / 5000 * 100vw);
  }

  .Project-header {
    grid-template-columns: 1fr;
  }

  .Project-right {
    order: 1;
    margin-bottom: 1.5rem;
  }

  .Project-left {
    order: 2;
  }
}
</style>
