import { Button } from "../ui/button"

export default function SupportUs() {
	return (
		<div className="w-full my-10 flex flex-col bg-accent py-12">
			<div className="flex-1 flex flex-col gap-6">
				<div className="w-full text-5xl font-bold text-primary text-center">
					WANT TO SUPPORT US?
				</div>
				<div className="flex justify-center items-center gap-4 font-bold">
					<Button>Partner With Us</Button>
					<Button variant="ghost">Become A Volunteer</Button>
				</div>
			</div>
		</div>
	)
}
