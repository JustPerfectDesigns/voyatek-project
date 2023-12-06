import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

export default function Trigger() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" className="text-[#3A53AD]">
					Hotel details
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Hotel Details</DialogTitle>
					<DialogDescription>
						Here goes the hotel details <br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
						quis odit ducimus a pariatur voluptates quaerat eius, quae alias
						tenetur, deleniti omnis. Alias quas in dolore placeat consequatur
						sapiente! Eveniet maxime ipsum doloremque odit cupiditate hic, eaque
						molestias facere exercitationem consequatur deleniti voluptas
						aspernatur minus explicabo magnam assumenda alias rerum.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						{/* <Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input
							id="name"
							defaultValue="Pedro Duarte"
							className="col-span-3"
						/> */}
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
