<script>
  const name = "Christian Dali"
  const tagline = "Your friendly neighborhood programmer who is motivated to build tools that solve real problems — for farms, schools, and everything in between."
</script>

<main>
  <section class="hero">
    <p class="label">Full-Stack Developer · Bakersfield, CA</p>
    <h1>{name}</h1>
    <p class="tagline">{tagline}</p>
    <div class="actions">
      <a href="#work">See my work</a>
      <a href="#contact">Get in touch</a>
    </div>
  </section>

  <section class="education" id="education">
  <h2>Education</h2>
  <div class="schools">

    <div class="school">
      <div class="school-header">
        <h3>California State University, Monterey Bay</h3>
        <span class="year">2023</span>
      </div>
      <p class="degree">B.S. Computer Science · Software Engineering Concentration</p>
      <div class="project-links">
        <a href="https://dalitechnologies.weebly.com" target="_blank">Coursework Portfolio</a>
        <a href="https://dalitechnologies.weebly.com/cst-489499---capstone.html" target="_blank">Capstone Project</a>
      </div>
    </div>

    <div class="school">
      <div class="school-header">
        <h3>Bakersfield College</h3>
        <span class="year">2022</span>
      </div>
      <p class="degree">A.S. Computer Science</p>
    </div>

  </div>
</section>

<section class="contact" id="contact">
  <h2>Get In Touch</h2>
  <p class="contact-intro">I'm currently open to freelance projects, full-time opportunities, and conversations about building something new in the Central Valley.</p>
  <div class="contact-links">
    <a href="mailto:christiandali.dev@gmail.com">
      Email Me
    </a>
    <a href="https://github.com/christiandali" target="_blank">
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/christiandali" target="_blank">
      LinkedIn
    </a>
  </div>
  <p class="footer-label">Christian Dali · Dali Labs · Bakersfield, CA</p>
</section>

  <section class="work" id="work">
  <h2>Work</h2>
  <div class="projects">

    <div class="project featured">
      <div class="project-header">
        <span class="tag">In Development</span>
        <span class="tech">SvelteKit · Firebase · AI</span>
      </div>
      <h3>Canopy</h3>
      <p>An agricultural intelligence platform built for Central Valley farms. Canopy connects to field operations data and surfaces AI-powered harvest insights — designed for pistachio, almond, and specialty crop operations.</p>
      <p class="label">Dali Labs · 2025</p>
    </div>

    <div class="project">
      <div class="project-header">
        <span class="tag offline">Built · Currently Offline</span>
        <span class="tech">Claude API · Cloudflare Workers · WordPress</span>
      </div>
      <h3>BAA Admissions Chatbot</h3>
      <p>An AI-powered admissions assistant for Bakersfield Adventist Academy, built using the Anthropic Claude API proxied through a Cloudflare Worker and embedded directly into the school's WordPress site.</p>
      <p class="label">Volunteer · Bakersfield Adventist Academy · 2024</p>
    </div>

    <div class="project">
      <div class="project-header">
        <span class="tech">React · REST APIs · Data Visualization</span>
      </div>
      <h3>Snapshot</h3>
      <p>A unified support dashboard built for ISP technicians, consolidating data from multiple technology portals into a single view — surfacing only the most critical information needed during live customer calls, without requiring deep technical background.</p>
      <p class="label">Capstone Project · CSUMB · 2023</p>
    <div class="project-links">
    <a href="https://www.youtube.com/watch?v=8USs1nkyP14" target="_blank">Watch Demo</a>
    <a href="https://dalitechnologies.weebly.com/cst-489499---capstone.html" target="_blank">View Capstone</a>
    </div>
    </div>

  </div>
</section>
</main>

<style>
  main {
    font-family: 'Georgia', serif;
    max-width: 720px;
    margin: 0 auto;
    padding: 2rem;
  }

  .hero {
    padding: 6rem 0 4rem;
  }

  .label {
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 1.5rem;
    color: #1a1a1a;
  }

  .tagline {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #444;
    max-width: 540px;
    margin-bottom: 2.5rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
  }

  .actions a {
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-size: 0.95rem;
  }

  .actions a:first-child {
    background: #2d6a4f;
    color: white;
  }

  .actions a:last-child {
    border: 1px solid #ccc;
    color: #333;
  }

  .work {
  padding: 4rem 0;
  border-top: 1px solid #eee;
}

h2 {
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 2.5rem;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project {
  padding: 1.75rem;
  border: 1px solid #eee;
  border-radius: 8px;
}

.project.featured {
  border-color: #2d6a4f;
  background: #f9fdfb;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.tag {
  font-size: 0.75rem;
  background: #2d6a4f;
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
}

.tag.offline {
  background: #888;
}

.tech {
  font-size: 0.75rem;
  color: #aaa;
}

.project h3 {
  font-size: 1.4rem;
  margin: 0 0 0.5rem;
  color: #1a1a1a;
}

.project p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
  margin: 0 0 0.5rem;
}

.project .label {
  font-size: 0.8rem;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 1rem;
}

.project-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.project-links a {
  font-size: 0.8rem;
  color: #2d6a4f;
  text-decoration: none;
  border: 1px solid #2d6a4f;
  padding: 0.3rem 0.75rem;
  border-radius: 4px;
}

.project-links a:hover {
  background: #2d6a4f;
  color: white;
}

.education {
  padding: 4rem 0;
  border-top: 1px solid #eee;
}

.schools {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.school {
  padding: 1.75rem;
  border: 1px solid #eee;
  border-radius: 8px;
}

.school-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.school h3 {
  font-size: 1.2rem;
  color: #1a1a1a;
  margin: 0;
}

.year {
  font-size: 0.85rem;
  color: #aaa;
}

.degree {
  font-size: 0.95rem;
  color: #555;
  margin: 0 0 1rem;
}

.contact {
  padding: 4rem 0;
  border-top: 1px solid #eee;
}

.contact-intro {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  max-width: 520px;
  margin-bottom: 2rem;
}

.contact-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.contact-links a {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.95rem;
  background: #2d6a4f;
  color: white;
}

.contact-links a:hover {
  background: #245a41;
}

.footer-label {
  font-size: 0.8rem;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
</style>