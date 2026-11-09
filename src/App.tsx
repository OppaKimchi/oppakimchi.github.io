import {
  about,
  experience,
  highlights,
  profile,
  projects,
  skills,
  type Project,
} from "./content";

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project">
      <p className="project-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </p>
      <div>
        <p className="label">{project.context}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="points">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <ul className="tools" aria-label="Tools and techniques">
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        {project.link && (
          <a
            className="text-link"
            href={project.link.href}
            target="_blank"
            rel="noreferrer"
          >
            {project.link.label}
          </a>
        )}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top">
          {profile.name}
        </a>
        <nav aria-label="Main">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <p className="label">{profile.eyebrow}</p>
          <h1>{profile.name}</h1>
          <p className="intro">{profile.intro}</p>
          <p className="seeking">{profile.seeking}</p>
          <div className="actions">
            <a className="button primary" href="#work">
              See my work
            </a>
            <a className="button" href="#contact">
              Get in touch
            </a>
          </div>
        </section>

        <section aria-label="Highlights" className="highlights">
          {highlights.map((item) => (
            <div key={item.title}>
              <p className="highlight-title">{item.title}</p>
              <p className="highlight-detail">{item.detail}</p>
            </div>
          ))}
        </section>

        <section id="work" className="section">
          <h2>Selected work</h2>
          <div className="projects">
            {projects.map((project, index) => (
              <ProjectEntry key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map((skill) => (
              <div key={skill.group}>
                <dt>{skill.group}</dt>
                <dd>{skill.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section two-column">
          <div>
            <h2>Experience</h2>
            <ol className="timeline">
              {experience.map((job) => (
                <li key={job.period}>
                  <span className="label">{job.period}</span>
                  <strong>{job.role}</strong>
                  <span>{job.organisation}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2>About</h2>
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Get in touch</h2>
          <p>{profile.seeking}</p>
          <a
            className="contact-primary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Connect with me on LinkedIn
          </a>
          <ul className="contact-links">
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>Built with React and TypeScript. No trackers or third-party scripts.</p>
      </footer>
    </>
  );
}
