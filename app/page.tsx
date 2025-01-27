import { BlogPosts } from "app/components/posts";
import utilStyles from "./styles/utilStyles.module.css";
import { Projects } from "./staticData/projects";
import photos from "./staticData/photos";
import blogStyles from "./blog/blog.module.css";

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
			<div className={blogStyles.photoContainer}>
				{photos.map((photo) => (
					<a href={photo.externalUrl} target="_blank" rel="noopener">
						<img
							src={photo.src}
							className="coverImage"
							alt={photo.alt}
						></img>
					</a>
				))}
			</div>
			<div className="my-8">
				<BlogPosts />
			</div><h2 className="mb-4 text-2xl">Notable Personal Projects</h2>
			<div
				className={utilStyles.leftAlign + " " + utilStyles.marginSpace}
			>
				
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
