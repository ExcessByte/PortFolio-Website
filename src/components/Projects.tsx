interface Project {
	lang: string;
	name: string;
	desc: string;
	tags: string[];
}

const PROJECTS: Project[] = [
	{
		lang: "Go",
		name: "TeleHopper",
		desc: "Telegram bot for message forwarding, channel hopping, and video file extraction.",
		tags: ["go-telegram/bot", "bot", "cli"],
	},
	{
		lang: "Go",
		name: "watchdog",
		desc: "Ultra-lightweight service monitoring dashboard. Uptime Kuma without the bloat.",
		tags: ["TOML config", "network", "self-hosted"],
	},
	{
		lang: "Shell / CSS",
		name: "carbonfox-desktop",
		desc: "i3wm + rofi + wallust theming setup built around the Carbonfox dark palette.",
		tags: ["i3wm", "rofi", "wallust"],
	},
	{
		lang: "JavaScript",
		name: "Helium ext",
		desc: "Browser extension applying Carbonfox theme to Helium. Dark mode done right.",
		tags: ["browser ext", "theming"],
	},
	{
		lang: "Python / GGUF",
		name: "go-coder-agent",
		desc: "Go-focused AI coding agent running Qwen2.5-Coder-1.5B locally via llama.cpp.",
		tags: ["LLM", "llama.cpp", "QLoRA"],
	},
	{
		lang: "C / Arduino",
		name: "arduino-sketchbook",
		desc: "Small hardware experiments on AVR boards. Sensors, displays, beginner builds.",
		tags: ["AVR", "embedded", "hardware"],
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
