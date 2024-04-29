<template>
    <section class="contact">
        <div class="contact-footer">
            <div class="Footer-left">
                <header>JIRAPAT.</header>
                <span>Email:</span> Jirapat@gmail.com <br />
                <span>Phone:</span> 123-456-7890
            </div>
            <div class="Footer-right">
                <div class="Footer-link">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>
                <div class="Footer-icon">
                    <a href="https://www.linkedin.com/"><i class="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/"><i class="bx bxl-github"></i></a>
                    <a href="https://www.instagram.com/"><i class="bx bxl-instagram"></i></a>
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

.Footer-right :hover {
    transform: translateY(-1px);
}

.Footer-icon {
    display: flex;
    justify-content: flex-end;
}
</style>
