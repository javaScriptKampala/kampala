import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { Post } from "./types"

export function getSortedPostsData(dir: string, count?: number): Post[] {
	const postsDirectory = path.join(process.cwd(), dir)
	const postSlugDirs = fs.readdirSync(postsDirectory)

	const allPostsData = postSlugDirs.map((postSlugDir) => {
		const fullPath = path.join(postsDirectory, postSlugDir, "index.md")
		const fileContents = fs.readFileSync(fullPath, "utf8")
		const matterResult = matter(fileContents)

		return {
			slug: postSlugDir,
			...(matterResult.data as {
				title: string
				summary: string
				date: Date
				author: string
			}),
		}
	})

	const sortedPostsData = allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	})

	if (typeof count === "number") return sortedPostsData.slice(0, count)
	return sortedPostsData
}

export function getAllPostIds(dir: string) {
	const postsDirectory = path.join(process.cwd(), dir)
	const fileNames = fs.readdirSync(postsDirectory)

	return fileNames.map((fileName) => {
		return {
			params: {
				slug: fileName.replace(/\.md$/, ""),
			},
		}
	})
}

export async function getPostData(dir: string, slug: string) {
	const postsDirectory = path.join(process.cwd(), dir)
	const fullPath = path.join(postsDirectory, `${slug}/index.md`)
	const fileContents = fs.readFileSync(fullPath, "utf8")
	const matterResult = matter(fileContents)

	const processedContent = await remark()
		.use(html)
		.process(matterResult.content)
	const contentHTML = processedContent.toString()

	return {
		slug,
		contentHTML,
		...(matterResult.data as { date: string; title: string }),
	}
}
