interface Project {
	lang: string;
	name: string;
	desc: string;
	tags: string[];
}

const PROJECTS: Project[] = [
	{
		lang: "___",
		name: "Empty",
		desc: "Nothing for now...",
		tags: [],
	},
];

const ProjectCard = ({ lang, name, desc, tags }: Project) => (
	<article className="card">
		<p className="card-lang">{lang}</p>
		<p className="card-name">{name}</p>
		<p className="card-desc">{desc}</p>
		<div className="card-tags">
			{tags.map((tag) => (
				<span key={tag} className="tag">
					{tag}
				</span>
			))}
		</div>
	</article>
);

const Projects = () => (
	<section className="section">
		<p className="section-label">Project</p>
		<div className="grid">
			{PROJECTS.map((p) => (
				<ProjectCard key={p.name} {...p} />
			))}
		</div>
	</section>
);

export default Projects;
