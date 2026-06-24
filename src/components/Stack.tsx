const SKILLS = ["Go", "Python", "C / Arduino"] as const;

const Stack = () => (
	<section className="section">
		<p className="section-label">Stack</p>
		<div className="skills">
			{SKILLS.map((skill) => (
				<span key={skill} className="skill">
					{skill}
				</span>
			))}
		</div>
	</section>
);

export default Stack;
