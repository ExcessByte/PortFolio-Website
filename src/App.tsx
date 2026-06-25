import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import { Analytics } from "@vercel/analytics/next";

const About = () => (
	<section className="section">
		<p className="section-label">About</p>
		<p className="about">
			I build small, self-hosted tools that do one thing well. Currently
			learning <span className="about-accent">Go</span> by writing real
			software. Daily driver:{" "}
			<span className="about-accent">Alpine Linux</span> +{" "}
			<span className="about-accent">i3wm</span>. I like hardware,
			low-level tinkering, and keeping things minimal.
		</p>
	</section>
);

const App = () => (
	<div className="root">
		<Hero />
		<About />
		<Projects />
		<Stack />
		<Analytics />
	</div>
);

export default App;
