export default function GalleryPage() {
	return (
		<>
			<h1 className="w-full text-left font-bold text-5xl my-10">Gallery</h1>
			<div className="w-full flex flex-col">
				<div className="columns-3 gap-4 space-y-4">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
						<div className="rounded-md overflow-hidden" key={i}>
							<img
								src={`/assets/images/gallery/${i < 10 ? "0" : ""}${i}.jpg`}
								className="w-full h-full"
								alt={`${i < 10 ? "0" : ""}${i}.jpg`}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
