<script lang="ts">
  import { fly, fade } from 'svelte/transition';

  const projects = [
    {
      name: 'Sweet Surrender Rewards App',
      tag: 'In Development',
      tagType: 'amber',
      label: 'Dali Labs',
      desc: 'A rewards app designed for local business "Sweet Surrender" so that its customers can review points earned.',
      meta: 'Flutter · Supabase · AI · 2026–Present',
      featured: true
    },
    {
      name: 'PyraMED Implementation Tool',
      tag: 'In Development',
      tagType: 'amber',
      label: 'Dali Labs',
      desc: 'An AI-powered web app designed to help specialists copy paste scripts that will help customize the PyraMED application patient info title bar.',
      meta: 'Sveltekit · Supabase · AI · 2026–Present',
      featured: true
    },
    {
      name: 'Canopy (pending name) x FarmersOS',
      tag: 'In Development',
      tagType: 'amber',
      label: 'Dali Labs',
      desc: 'An AI-powered intelligence platform for Central Valley specialty crop farms — harvest analytics, field performance, and crop insights for pistachio, almond, and stone fruit operations.',
      meta: 'Blazor · ASP.NET · Firebase · AI · 2026–Present',
      featured: true
    },
    {
      name: 'BAA Admissions Chatbot',
      tag: 'Completed',
      label: 'Dali Labs',
      tagType: 'default',
      desc: 'AI admissions assistant for Bakersfield Adventist Academy — Claude API proxied through Cloudflare Workers, embedded in WordPress with lead capture.',
      meta: 'Volunteer · 2025'
    },
    {
      name: 'Snapshot',
      tag: 'Live',
      label: 'Dali Labs',
      tagType: 'green',
      desc: 'Unified ISP support dashboard consolidating data from multiple vendor portals into a single view for Level 1 technicians during live customer calls.',
      meta: 'CSUMB Capstone · IT-Optics · 2023',
      demoUrl: 'https://www.youtube.com/watch?v=8USs1nkyP14',
      capstoneUrl: 'https://dalitechnologies.weebly.com/cst-489499---capstone.html'
    }
  ];

  const roots = [
    { emoji: '🎓', label: 'Education', bullets: ['Attendance tracking', 'Grade reporting', 'Parent communication', 'Curriculum planning', 'Resource sharing'] },
    { emoji: '🎶', label: 'Music', bullets: ['Venue booking', 'Practice scheduling', 'Fan engagement', 'Lesson booking', 'Merch management'] },
    { emoji: '📚', label: 'Libraries', bullets: ['Digital catalog', 'Event scheduling', 'Borrowing tracking', 'Community programs', 'Resource discovery'] },
    { emoji: '🚚', label: 'Food Trucks', bullets: ['Live location tracking', 'Order ahead', 'Schedule management', 'Customer loyalty', 'Menu updates'] },
    { emoji: '☕', label: 'Coffee Shops', bullets: ['Loyalty programs', 'Order ahead', 'Inventory tracking', 'Staff scheduling', 'Local discovery'] },
    { emoji: '🏥', label: 'Healthcare', bullets: ['Appointment booking', 'Patient navigation', 'Insurance coordination', 'Telehealth tools', 'Referral tracking'] },
    { emoji: '🏫', label: 'Schools', bullets: ['Communication tools', 'Scheduling', 'Student support', 'Parent engagement', 'Resource allocation'] },
    { emoji: '🎭', label: 'Arts', bullets: ['Ticketing', 'Artist discovery', 'Grant tracking', 'Venue booking', 'Community outreach'] },
    { emoji: '⚾', label: 'Youth Sports', bullets: ['League scheduling', 'Team registration', 'Score tracking', 'Volunteer coordination', 'Parent communication'] },
    { emoji: '🚴', label: 'Outdoor Recreation', bullets: ['Trail mapping', 'Gear rentals', 'Group coordination', 'Event planning', 'Safety alerts'] },
    { emoji: '🐕', label: 'Animal Welfare', bullets: ['Adoption matching', 'Foster coordination', 'Donation tracking', 'Volunteer scheduling', 'Medical records'] },
    { emoji: '🌳', label: 'Parks', bullets: ['Facility booking', 'Maintenance scheduling', 'Usage analytics', 'Event coordination', 'Volunteer management'] },
    { emoji: '📖', label: 'Local Authors', bullets: ['Publishing tools', 'Event booking', 'Reader engagement', 'Distribution', 'Community building'] },
    { emoji: '🎪', label: 'Community Events', bullets: ['Registration', 'Volunteer coordination', 'Ticketing', 'Promotion', 'Vendor management'] },
    { emoji: '🏛️', label: 'Local Government', bullets: ['Permitting', 'Public records', 'Citizen requests', 'Meeting scheduling', 'Service tracking'] },
    { emoji: '🚒', label: 'Public Safety', bullets: ['Dispatch coordination', 'Training records', 'Incident reporting', 'Community alerts', 'Equipment tracking'] },
    { emoji: '🍊', label: 'Farmers Markets', bullets: ['Vendor management', 'Online pre-orders', 'Loyalty programs', 'Location & hours', 'Inventory'] },
    { emoji: '🚂', label: 'Transportation', bullets: ['Route planning', 'Real-time tracking', 'Accessibility info', 'Multi-modal routing', 'Schedule updates'] },
    { emoji: '🏡', label: 'Neighborhoods', bullets: ['Community boards', 'Resource sharing', 'Safety reporting', 'Local services', 'Event coordination'] },
    { emoji: '🎮', label: 'Gaming', bullets: ['Tournament management', 'Local event booking', 'Community building', 'Venue discovery', 'Streaming tools'] },
    { emoji: '🎬', label: 'Film', bullets: ['Location scouting', 'Crew coordination', 'Production management', 'Permit tracking', 'Distribution'] },
    { emoji: '🎤', label: 'Performing Arts', bullets: ['Ticketing', 'Rehearsal scheduling', 'Venue management', 'Talent booking', 'Audience engagement'] },
    { emoji: '💼', label: 'Small Business', bullets: ['Inventory management', 'Customer tracking', 'Appointment booking', 'Marketing tools', 'Financial reporting'] },
    { emoji: '🏗️', label: 'Construction', bullets: ['Project management', 'Permit tracking', 'Subcontractor coordination', 'Safety compliance', 'Material tracking'] },
    { emoji: '🔋', label: 'Renewable Energy', bullets: ['Production monitoring', 'Maintenance scheduling', 'Grid integration', 'ROI tracking', 'Permitting'] },
    { emoji: '✈️', label: 'Aviation', bullets: ['Maintenance tracking', 'Flight scheduling', 'Training records', 'Safety reporting', 'Parts inventory'] },
    { emoji: '📦', label: 'Logistics', bullets: ['Route optimization', 'Inventory tracking', 'Delivery management', 'Customer communication', 'Analytics'] },
    { emoji: '🌎', label: 'Nonprofits', bullets: ['Donor management', 'Volunteer coordination', 'Grant tracking', 'Impact reporting', 'Community outreach'] },
    { emoji: '🧑‍🍳', label: 'Restaurants', bullets: ['Reservation management', 'Menu tools', 'Inventory tracking', 'Staff scheduling', 'Customer loyalty'] },
    { emoji: '🌱', label: 'Sustainability', bullets: ['Impact tracking', 'Resource monitoring', 'Community engagement', 'Certification management', 'Reporting'] },
    { emoji: '📷', label: 'Tourism', bullets: ['Visitor guides', 'Local discovery', 'Experience curation', 'Booking integration', 'Review management'] },
    { emoji: '🏕️', label: 'Camping', bullets: ['Reservation systems', 'Trail info', 'Safety alerts', 'Equipment rentals', 'Group coordination'] },
    { emoji: '📚', label: 'Literacy', bullets: ['Reading tracking', 'Tutor matching', 'Resource sharing', 'Progress monitoring', 'Community programs'] },
    { emoji: '💡', label: 'Startups', bullets: ['Mentor matching', 'Resource discovery', 'Co-founder matching', 'Investor connections', 'Community building'] },
    { emoji: '🧠', label: 'Mental Health', bullets: ['Provider matching', 'Appointment booking', 'Resource discovery', 'Crisis support', 'Community connection'] },
    { emoji: '🤝', label: 'Community Organizations', bullets: ['Member management', 'Event coordination', 'Volunteer tracking', 'Communication tools', 'Impact reporting'] },
  ];

  let activeItem: (typeof roots)[number] | null = $state(null);
  let contactOpen = $state(false);

  function handleItemClick(root: (typeof roots)[number]) {
    activeItem = activeItem?.label === root.label ? null : root;
  }

  function openContact() {
    contactOpen = true;
  }

  function closeContact() {
    contactOpen = false;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && contactOpen) closeContact();
  }

  $effect(() => {
    document.body.style.overflow = contactOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  });

  function saveContact() {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Christian Dali',
      'TITLE:Full-Stack Developer',
      'EMAIL;type=INTERNET:christiandali.dev@gmail.com',
      'URL;type=GitHub:https://github.com/christiandali',
      'URL;type=LinkedIn:https://linkedin.com/in/christiandali',
      'NOTE:Full-stack developer · Community Builder · Central Valley CA',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'christian-dali.vcf';
    a.click();
    URL.revokeObjectURL(url);
  }
</script>


<main>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-eyebrow">
        <div class="hero-dot"></div>
        <span class="hero-label">Full-stack developer · Community Builder</span>
      </div>
      <h1>Hey, I'm Chris :)</h1>
      <div class="hero-rule"></div>
      <p class="hero-body">I'm a developer born and raised right here in California's Central Valley — and I believe it's the people who steer innovation and discovery into what this place is becoming.</p>
      <p class="hero-body">I'm curious about the gaps and problems we each can see from our own corner of the city — because we all hold a piece of this place in our hands.</p>
      <p class="hero-body">Whether you know exactly what you need or have no idea where to start — together, we might build something our friends and neighbors never could have imagined alone.</p>
      <div class="hero-actions">
        <a href="#work" class="btn-primary">See my work</a>
        <button class="btn-secondary" onclick={openContact}>Get in touch</button>
      </div>
    </div>

    <div class="hero-map" aria-hidden="true">
      <img src="/central-valley-map.png" alt="" class="valley-map"/>
    </div>
  </section>

  <!-- Roots marquee -->
  <div class="roots-outer" role="region" aria-label="Explore what software could improve" onmouseleave={() => activeItem = null}>
    {#if activeItem}
      <div class="expand-card" transition:fly={{ y: 6, duration: 150 }}>
        <div class="expand-title">
          <span class="expand-emoji">{activeItem.emoji}</span>
          <span class="expand-name">{activeItem.label}</span>
        </div>
        <div class="expand-divider">↓</div>
        <div class="expand-question">What could software improve?</div>
        <ul class="expand-list">
          {#each activeItem.bullets as bullet}
            <li>{bullet}</li>
          {/each}
        </ul>
      </div>
    {/if}
    <div class="roots-marquee" aria-label="Explore what software could improve">
      <div
        class="marquee-track"
        style:animation-play-state={activeItem ? 'paused' : 'running'}
      >
        {#each [...roots, ...roots, ...roots] as root}
          <button
            class="roots-item"
            onmouseenter={() => activeItem = root}
            onclick={() => handleItemClick(root)}
            aria-pressed={activeItem?.label === root.label}
          >
            <span class="roots-emoji" aria-hidden="true">{root.emoji}</span>
            <span>{root.label}</span>
          </button>
        {/each}
      </div>
    </div>
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


  <!-- Contact Bottom Sheet -->
  {#if contactOpen}
    <div
      class="sheet-backdrop"
      transition:fade={{ duration: 200 }}
      onclick={closeContact}
      role="presentation"
    ></div>

    <div
      class="contact-sheet"
      transition:fly={{ y: 500, duration: 340, opacity: 1 }}
      role="dialog"
      aria-modal="true"
      aria-label="Contact Christian Dali"
    >
      <div class="sheet-handle"></div>

      <div class="sheet-header">
        <div class="sheet-avatar">CD</div>
        <div class="sheet-identity">
          <div class="sheet-name">Christian Dali</div>
          <div class="sheet-title">Full-Stack Developer · Central Valley</div>
        </div>
      </div>

      <div class="sheet-divider"></div>

      <div class="sheet-actions">
        <button class="sheet-action" onclick={saveContact}>
          <div class="action-icon-wrap green">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div class="action-text">
            <div class="action-label">Save Contact</div>
            <div class="action-sub">Download .vcf to your contacts</div>
          </div>
          <div class="action-arrow">→</div>
        </button>

        <a href="mailto:christiandali.dev@gmail.com" class="sheet-action">
          <div class="action-icon-wrap amber">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <div class="action-text">
            <div class="action-label">Email Me</div>
            <div class="action-sub">christiandali.dev@gmail.com</div>
          </div>
          <div class="action-arrow">→</div>
        </a>

        <a href="https://linkedin.com/in/christiandali" target="_blank" rel="noopener" class="sheet-action">
          <div class="action-icon-wrap slate">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
          <div class="action-text">
            <div class="action-label">LinkedIn</div>
            <div class="action-sub">linkedin.com/in/christiandali</div>
          </div>
          <div class="action-arrow">→</div>
        </a>

        <a href="https://github.com/christiandali" target="_blank" rel="noopener" class="sheet-action">
          <div class="action-icon-wrap slate">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </div>
          <div class="action-text">
            <div class="action-label">GitHub</div>
            <div class="action-sub">github.com/christiandali</div>
          </div>
          <div class="action-arrow">→</div>
        </a>

        <div class="sheet-action disabled">
          <div class="action-icon-wrap muted">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
          </div>
          <div class="action-text">
            <div class="action-label">Wallet Pass</div>
            <div class="action-sub">iOS · Coming soon</div>
          </div>
          <div class="action-badge">Soon</div>
        </div>
      </div>

      <button class="sheet-close-btn" onclick={closeContact}>Close</button>
    </div>
  {/if}

</main>

<svelte:window onkeydown={handleKeydown} />

<style>
  main {
    max-width: 100%;
  }

  /* Hero */
  .hero {
    padding: 5rem 0 4rem 2.5rem;
    max-width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    min-height: 78vh;
    position: relative;
  }

  .hero-content {
    flex: 0 0 auto;
    width: min(52%, 580px);
    padding-right: 1rem;
    position: relative;
    z-index: 1;
  }

  .hero-map {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 65%;
    overflow: hidden;
    pointer-events: none;
  }

  .valley-map {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 38% center;
    display: block;
    -webkit-mask-image:
      linear-gradient(to right, transparent 0%, black 14%),
      radial-gradient(ellipse 82% 88% at 62% 50%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.88) 28%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.18) 67%, transparent 82%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to right, transparent 0%, black 14%),
      radial-gradient(ellipse 82% 88% at 62% 50%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.88) 28%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.18) 67%, transparent 82%);
    mask-composite: intersect;
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
    margin: 0 0 1.25rem;
  }

  .hero-rule {
    width: 40px;
    height: 3px;
    background: #c17f3a;
    border-radius: 2px;
    margin-bottom: 1.75rem;
  }

  .hero-body {
    font-size: 16px;
    line-height: 1.75;
    color: #5a5340;
    max-width: 560px;
    margin-bottom: 1.1rem;
    font-weight: 300;
  }

  .hero-body:last-of-type {
    margin-bottom: 2.5rem;
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

  /* Roots marquee */
  .roots-outer {
    position: relative;
  }

  .expand-card {
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    background: #faf8f3;
    border: 0.5px solid #d4c9a8;
    border-left: 3px solid #c17f3a;
    border-radius: 4px;
    padding: 1.25rem 1.5rem;
    min-width: 210px;
    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }

  .expand-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .expand-emoji {
    font-size: 20px;
    line-height: 1;
  }

  .expand-name {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 700;
    color: #1c1a15;
  }

  .expand-divider {
    font-size: 13px;
    color: #c17f3a;
    margin-bottom: 0.4rem;
  }

  .expand-question {
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #c17f3a;
    font-weight: 500;
    margin-bottom: 0.6rem;
  }

  .expand-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .expand-list li {
    font-size: 12px;
    color: #5a5340;
    line-height: 1.4;
    padding-left: 0.9rem;
    position: relative;
  }

  .expand-list li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #8fbc8f;
  }

  .roots-marquee {
    background: #2d5a3d;
    padding: 1.1rem 0;
    overflow: hidden;
    position: relative;
  }

  .roots-marquee::before,
  .roots-marquee::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4rem;
    z-index: 1;
    pointer-events: none;
  }

  .roots-marquee::before {
    left: 0;
    background: linear-gradient(to right, #2d5a3d, transparent);
  }

  .roots-marquee::after {
    right: 0;
    background: linear-gradient(to left, #2d5a3d, transparent);
  }

  .marquee-track {
    display: flex;
    align-items: center;
    gap: 0;
    width: max-content;
    animation: marquee 110s linear infinite;
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-100% / 3)); }
  }

  .roots-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #c8dcc8;
    padding: 0 1.75rem;
    position: relative;
    white-space: nowrap;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  .roots-item:hover {
    color: #e8f5e8;
  }

  .roots-item::after {
    content: '·';
    position: absolute;
    right: -0.15rem;
    color: #4a7a5a;
    font-size: 16px;
    line-height: 1;
  }

  .roots-emoji {
    font-size: 15px;
    line-height: 1;
    flex-shrink: 0;
  }

  .roots-item span:not(.roots-emoji) {
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
  @media (max-width: 860px) {
    .hero {
      flex-direction: column;
      align-items: stretch;
      padding: 0;
      min-height: unset;
    }

    .hero-content {
      width: 100%;
      padding: 0.75rem 1.25rem 2.5rem;
      margin-top: -2rem;
      position: relative;
      z-index: 1;
    }

    .hero-map {
      position: relative;
      inset: auto;
      width: 100%;
      height: 32vw;
      max-height: 160px;
      order: -1;
    }

    .valley-map {
      opacity: 1;
      object-position: 45% 38%;
      transform: scale(1.25);
      transform-origin: center center;
      -webkit-mask-image: linear-gradient(
        to bottom,
        black 0%,
        black 35%,
        rgba(0,0,0,0.5) 62%,
        rgba(0,0,0,0.05) 85%,
        transparent 100%
      );
      mask-image: linear-gradient(
        to bottom,
        black 0%,
        black 35%,
        rgba(0,0,0,0.5) 62%,
        rgba(0,0,0,0.05) 85%,
        transparent 100%
      );
    }
  }

  @media (max-width: 600px) {
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

    .roots-marquee {
      padding: 1rem 0;
    }

    .expand-card {
      left: 1rem;
      right: 1rem;
      transform: none;
      min-width: unset;
    }
  }

  /* Contact Bottom Sheet */
  .sheet-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(28, 26, 21, 0.45);
    z-index: 100;
    backdrop-filter: blur(2px);
  }

  .contact-sheet {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 101;
    background: #faf8f3;
    border-radius: 16px 16px 0 0;
    padding: 0 0 env(safe-area-inset-bottom, 1rem);
    box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.18);
    max-width: 520px;
    margin: 0 auto;
  }

  .sheet-handle {
    width: 36px;
    height: 4px;
    background: #d4c9a8;
    border-radius: 2px;
    margin: 0.75rem auto 0;
  }

  .sheet-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.5rem 1rem;
  }

  .sheet-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #2d5a3d;
    color: #f0ead8;
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sheet-name {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    color: #1c1a15;
    line-height: 1.2;
  }

  .sheet-title {
    font-size: 12px;
    color: #b0a07a;
    letter-spacing: 0.04em;
    margin-top: 2px;
  }

  .sheet-divider {
    height: 0.5px;
    background: #e8e0ca;
    margin: 0 1.5rem;
  }

  .sheet-actions {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
  }

  .sheet-action {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    padding: 0.875rem 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-family: inherit;
    text-align: left;
    transition: background 120ms ease;
  }

  .sheet-action:hover:not(.disabled) {
    background: #f0ead8;
  }

  .sheet-action.disabled {
    cursor: default;
    opacity: 0.55;
  }

  .action-icon-wrap {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .action-icon-wrap.green {
    background: #2d5a3d;
    color: #f0ead8;
  }

  .action-icon-wrap.amber {
    background: #c17f3a;
    color: #fff;
  }

  .action-icon-wrap.slate {
    background: #3a3528;
    color: #f0ead8;
  }

  .action-icon-wrap.muted {
    background: #e8e0ca;
    color: #b0a07a;
  }

  .action-text {
    flex: 1;
    min-width: 0;
  }

  .action-label {
    font-size: 14px;
    font-weight: 500;
    color: #1c1a15;
    line-height: 1.3;
  }

  .action-sub {
    font-size: 12px;
    color: #b0a07a;
    margin-top: 1px;
  }

  .action-arrow {
    font-size: 14px;
    color: #d4c9a8;
  }

  .action-badge {
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #b0a07a;
    border: 0.5px solid #d4c9a8;
    border-radius: 3px;
    padding: 0.15rem 0.4rem;
  }

  .sheet-close-btn {
    display: block;
    width: calc(100% - 3rem);
    margin: 0.5rem 1.5rem 1.25rem;
    padding: 0.75rem;
    background: #f0ead8;
    border: none;
    border-radius: 6px;
    font-family: inherit;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: 500;
    color: #5a5340;
    cursor: pointer;
  }

  .sheet-close-btn:hover {
    background: #e8e0ca;
  }
</style>