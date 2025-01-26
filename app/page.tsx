import { BlogPosts } from "app/components/posts";
import utilStyles from "./styles/utilStyles.module.css";
import { Projects } from "./staticData/projects";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-4xl font-semibold tracking-tighter">
				Brett Spangler
			</h1>
			<h2 className="mb-4 text-2xl">
				{`Passionate and Driven Software Developer/Engineer`}
			</h2>
			<br></br>
			<div className="my-8">
				<BlogPosts />
			</div>
			<div
				className={utilStyles.leftAlign + " " + utilStyles.marginSpace}
			>
				<h3>Notable Personal Projects</h3>
				<ul>
					{Projects.sort((p1, p2) => p1.sortOrder - p2.sortOrder).map(
						(project) => (
							<li key={project.sortOrder + project.displayName}>
								<a
									rel="noopener"
									target="_blank"
									href={project.url}
								>
									{project.displayName}
								</a>
							</li>
						)
					)}
				</ul>
			</div>
		</section>
	);
}
