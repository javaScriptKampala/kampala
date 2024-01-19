import RootLayout from "@/components/layout"

export default function Custom404Page() {
	return (
		<RootLayout title="404">
			<div className="w-full h-full flex justify-center items-center">
				<h1 className="font-bold text-5xl text-center my-20">
					OOPS!!! <br /> 404 ;-;
				</h1>
			</div>
		</RootLayout>
	)
}
