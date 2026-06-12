<script lang="ts">
  const projects = [
    {
      name: 'Canopy',
      tag: 'In Development',
      tagType: 'amber',
      label: 'Dali Labs',
      desc: 'An AI-powered intelligence platform for Central Valley specialty crop farms — harvest analytics, field performance, and crop insights for pistachio, almond, and stone fruit operations.',
      meta: 'SvelteKit · Firebase · AI · 2025–Present',
      featured: true
    },
    {
      name: 'BAA Admissions Chatbot',
      tag: 'Completed',
      tagType: 'default',
      desc: 'AI admissions assistant for Bakersfield Adventist Academy — Claude API proxied through Cloudflare Workers, embedded in WordPress with lead capture.',
      meta: 'Volunteer · 2025'
    },
    {
      name: 'Snapshot',
      tag: 'Live',
      tagType: 'green',
      desc: 'Unified ISP support dashboard consolidating data from multiple vendor portals into a single view for Level 1 technicians during live customer calls.',
      meta: 'CSUMB Capstone · IT-Optics · 2023',
      demoUrl: 'https://www.youtube.com/watch?v=8USs1nkyP14',
      capstoneUrl: 'https://dalitechnologies.weebly.com/cst-489499---capstone.html'
    }
  ];

  const roots = [
    { icon: 'ti-plant', label: 'Agriculture' },
    { icon: 'ti-school', label: 'Education' },
    { icon: 'ti-droplet', label: 'Oil & Energy' },
    { icon: 'ti-car', label: 'Downtown Culture' },
    { icon: 'ti-heart', label: 'Community' }
  ];
</script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">

<main>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-eyebrow">
      <div class="hero-dot"></div>
      <span class="hero-label">Full-stack developer · Bakersfield, CA</span>
    </div>
    <h1>Building tools<br>for people<br>who grow things.</h1>
    <p class="hero-sub">I build practical software for agriculture, education, and community — rooted in the Central Valley and pointed toward what's possible.</p>
    <p class="hero-philosophy">"The unknown is the greatest source of creativity."</p>
    <div class="hero-actions">
      <a href="#work" class="btn-primary">See my work</a>
      <a href="#contact" class="btn-secondary">Get in touch</a>
    </div>
  </section>

  <!-- Roots strip -->
  <div class="roots-strip">
    {#each roots as root}
      <div class="roots-item">
        <i class="ti {root.icon}" aria-hidden="true"></i>
        <span>{root.label}</span>
      </div>
    {/each}
  </div>

  <!-- Work -->
  <section class="section" id="work">
    <div class="section-header">
      <h2 class="section-title">Work</h2>
      <span class="section-sub">Projects & Products</span>
    </div>
    <div class="project-grid">
      {#each projects as project}
        <div class="project-card {project.featured ? 'featured' : ''}">
          <div class="project-top">
            <span class="project-tag {project.tagType}">{project.tag}</span>
            {#if project.label}
              <span class="project-label">{project.label}</span>
            {/if}
          </div>
          <h3 class="project-name">{project.name}</h3>
          <p class="project-desc">{project.desc}</p>
          <p class="project-meta">{project.meta}</p>
          {#if project.demoUrl || project.capstoneUrl}
            <div class="project-links">
              {#if project.demoUrl}
                <a href={project.demoUrl} target="_blank" class="project-link">Watch Demo →</a>
              {/if}
              {#if project.capstoneUrl}
                <a href={project.capstoneUrl} target="_blank" class="project-link">View Capstone →</a>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <!-- Education -->
  <section class="section alt" id="education">
    <div class="section-header">
      <h2 class="section-title">Education</h2>
      <span class="section-sub">Academic Background</span>
    </div>
    <div class="edu-grid">
      <div class="edu-card">
        <div class="edu-header">
          <h3>California State University, Monterey Bay</h3>
          <span class="edu-year">2023</span>
        </div>
        <p class="edu-degree">B.S. Computer Science · Software Engineering Concentration</p>
        <div class="project-links">
          <a href="https://dalitechnologies.weebly.com" target="_blank" class="project-link">Coursework Portfolio →</a>
          <a href="https://dalitechnologies.weebly.com/cst-489499---capstone.html" target="_blank" class="project-link">Capstone Project →</a>
        </div>
      </div>
      <div class="edu-card">
        <div class="edu-header">
          <h3>Bakersfield College</h3>
          <span class="edu-year">2022</span>
        </div>
        <p class="edu-degree">A.S. Computer Science</p>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="section" id="contact">
    <div class="section-header">
      <h2 class="section-title">Get In Touch</h2>
      <span class="section-sub">Let's work together</span>
    </div>
    <p class="contact-intro">I'm open to freelance projects, full-time opportunities, and conversations about building something new in the Central Valley.</p>
    <div class="contact-links">
      <a href="mailto:christiandali.dev@gmail.com" class="btn-primary">Email Me</a>
      <a href="https://github.com/christiandali" target="_blank" class="btn-secondary">GitHub</a>
      <a href="https://linkedin.com/in/christiandali" target="_blank" class="btn-secondary">LinkedIn</a>
    </div>
  </section>

</main>

<style>
  main {
    max-width: 100%;
  }

  /* Hero */
  .hero {
    padding: 5rem 2.5rem 4rem;
    max-width: 760px;
  }

  .hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .hero-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #c17f3a;
    flex-shrink: 0;
  }

  .hero-label {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #c17f3a;
    font-weight: 500;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 52px;
    font-weight: 700;
    line-height: 1.1;
    color: #1c1a15;
    margin: 0 0 1.5rem;
  }

  .hero-sub {
    font-size: 17px;
    line-height: 1.7;
    color: #5a5340;
    max-width: 520px;
    margin-bottom: 1rem;
    font-weight: 300;
  }

  .hero-philosophy {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    font-style: italic;
    color: #9e7e4a;
    margin-bottom: 2.5rem;
    padding-left: 1rem;
    border-left: 2px solid #c17f3a;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
  }

  /* Buttons */
  .btn-primary {
    background: #2d5a3d;
    color: #f0ead8;
    padding: 0.7rem 1.75rem;
    border-radius: 3px;
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    border: none;
    text-decoration: none;
    display: inline-block;
  }

  .btn-primary:hover {
    background: #245030;
  }

  .btn-secondary {
    background: transparent;
    color: #2d5a3d;
    padding: 0.7rem 1.75rem;
    border-radius: 3px;
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid #2d5a3d;
    text-decoration: none;
    display: inline-block;
  }

  .btn-secondary:hover {
    background: #f0ead8;
  }

  /* Roots strip */
  .roots-strip {
    background: #2d5a3d;
    padding: 1.25rem 2.5rem;
    display: flex;
    gap: 2.5rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .roots-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #c8dcc8;
  }

  .roots-item i {
    font-size: 15px;
    color: #8fbc8f;
  }

  .roots-item span {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 400;
  }

  /* Sections */
  .section {
    padding: 4rem 2.5rem;
    background: #faf8f3;
  }

  .section.alt {
    background: #f0ead8;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 700;
    color: #1c1a15;
  }

  .section-sub {
    font-size: 12px;
    color: #b0a07a;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* Projects */
  .project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .project-card {
    background: #fff;
    border: 0.5px solid #d4c9a8;
    border-radius: 4px;
    padding: 1.5rem;
  }

  .project-card.featured {
    grid-column: span 2;
    border-left: 3px solid #c17f3a;
  }

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .project-tag {
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.2rem 0.5rem;
    border-radius: 2px;
    border: 0.5px solid #d4c9a8;
    color: #b0a07a;
  }

  .project-tag.amber {
    color: #c17f3a;
    border-color: #c17f3a;
  }

  .project-tag.green {
    color: #2d5a3d;
    border-color: #2d5a3d;
  }

  .project-label {
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #b0a07a;
  }

  .project-name {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 700;
    color: #1c1a15;
    margin-bottom: 0.5rem;
  }

  .project-desc {
    font-size: 13px;
    line-height: 1.7;
    color: #6b6147;
    margin-bottom: 0.75rem;
  }

  .project-meta {
    font-size: 11px;
    color: #b0a07a;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .project-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .project-link {
    font-size: 12px;
    color: #2d5a3d;
    text-decoration: none;
    letter-spacing: 0.04em;
  }

  .project-link:hover {
    text-decoration: underline;
  }

  /* Education */
  .edu-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .edu-card {
    background: #fff;
    border: 0.5px solid #d4c9a8;
    border-radius: 4px;
    padding: 1.5rem;
  }

  .edu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .edu-header h3 {
    font-size: 16px;
    font-weight: 500;
    color: #1c1a15;
  }

  .edu-year {
    font-size: 12px;
    color: #b0a07a;
  }

  .edu-degree {
    font-size: 13px;
    color: #6b6147;
    margin-bottom: 0.75rem;
  }

  /* Contact */
  .contact-intro {
    font-size: 16px;
    line-height: 1.7;
    color: #5a5340;
    max-width: 520px;
    margin-bottom: 2rem;
    font-weight: 300;
  }

  .contact-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  /* Mobile */
  @media (max-width: 600px) {
    .hero {
      padding: 3rem 1.25rem 2.5rem;
    }

    h1 {
      font-size: 36px;
    }

    .project-grid {
      grid-template-columns: 1fr;
    }

    .project-card.featured {
      grid-column: span 1;
    }

    .section {
      padding: 3rem 1.25rem;
    }

    .roots-strip {
      gap: 1.25rem;
      padding: 1.25rem;
    }
  }
</style>