export interface Post {
	title: string
	summary: string
	author: string
	slug: string
	cover?: string
	date: Date | string
	time?: string
}
