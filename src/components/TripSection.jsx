import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { RiAddCircleLine } from "react-icons/ri";
import { HiOutlineChevronUp } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import Triggers from "./Triggers";
import TriggersA from "./TriggersA";

const TripSection = () => {
	return (
		<div className="mt-20">
			<h2 className="text-center text-3xl text-slate-800 font-semibold">
				Trip itinerary
			</h2>
			<div className="rounded-xl border-2 py-16 px-6">
				<span className="block text-[#0D6EFD] text-2xl font-semibold mb-6">
					Flight
				</span>
				<ul className="flex flex-col gap-6">
					<li className="bg-[#F6F6F6] py-6 px-4 rounded-xl flex justify-between items-center">
						<Image src="/flight.png" width={100} height={100} />
						<div className="flex justify-center items-center gap-x-6">
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">Azerbaijan Airlines</p>
								<Separator className="my-2" />
								<p>Economy</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">1h 35m</p>
								<Separator className="my-2" />
								<p>11:40 4 Sep - 04:30 30 Sep</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">Azerbaijan Airlines</p>
								<Separator className="my-2" />
								<p>DOH, SEA</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<div className="flex justify-center items-center gap-x-1">
									<p className="font-semibold">GYD</p>{" "}
									<IoIosArrowRoundForward />{" "}
									<p className="font-semibold">SJS</p>
								</div>
								<Separator className="my-2" />
								<p>AI-984 AI-518</p>
							</div>
						</div>

						<div>
							<h4 className="text-xl font-semibold">NGN 8,481</h4>
						</div>
						<div className="flex flex-col justify-center items-center">
							<Button className="bg-[#3A53AD]">Change</Button>
							<Triggers />
						</div>
					</li>
					<li className="bg-[#F6F6F6] py-6 px-4 rounded-xl flex justify-between items-center">
						<Image src="/flight.png" width={100} height={100} />
						<div className="flex justify-center items-center gap-x-6">
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">Azerbaijan Airlines</p>
								<Separator className="my-2" />
								<p>Economy</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">1h 35m</p>
								<Separator className="my-2" />
								<p>11:40 4 Sep - 04:30 30 Sep</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">Azerbaijan Airlines</p>
								<Separator className="my-2" />
								<p>DOH, SEA</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<div className="flex justify-center items-center gap-x-1">
									<p className="font-semibold">GYD</p>{" "}
									<IoIosArrowRoundForward />{" "}
									<p className="font-semibold">SJS</p>
								</div>
								<Separator className="my-2" />
								<p>AI-984 AI-518</p>
							</div>
						</div>

						<div>
							<h4 className="text-xl font-semibold">NGN 8,481</h4>
						</div>
						<div className="flex flex-col justify-center items-center">
							<Button className="bg-[#3A53AD]">Change</Button>
							<Triggers />
						</div>
					</li>
				</ul>

				<div class="relative">
					<input
						type="file"
						className="absolute top-1/2 left-1/2 inset-0 opacity-0 -ml-20 -mt-14 py-12"
					/>
					<div class="flex flex-col items-center justify-center w-full h-full border-dashed border-2 border-[#b8b8b8] text-slate-400 rounded-md cursor-pointer py-4 mt-6">
						<RiAddCircleLine className="text-4xl" />
						<span className="text-[18px] font-medium">Add Transport</span>
					</div>
				</div>
			</div>

			<div className="rounded-xl border-2 py-16 px-6">
				<span className="block text-[#0D6EFD] text-2xl font-semibold mb-6">
					Hotel
				</span>
				<ul className="flex flex-col gap-6">
					<li className="bg-[#F6F6F6] py-6 px-4 rounded-xl flex justify-between items-center">
						<Image src="/flight2.png" width={100} height={100} />
						<div className="flex justify-center items-center gap-x-6">
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">BURUJ HOTEL</p>

								<p>Dubai, UAE</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">Check-in</p>

								<p>30, Sep, 2023</p>
							</div>
							<div className="w-52 h-[2px] bg-slate-200"></div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">Check-out</p>

								<p>05, Oct, 2023</p>
							</div>
						</div>

						<div>
							<h4 className="text-xl font-semibold">NGN 8,481</h4>
						</div>
						<div className="flex flex-col justify-center items-center">
							<Button className="bg-[#3A53AD]">Change</Button>
							<TriggersA />
						</div>
					</li>
				</ul>

				<div class="relative">
					<input
						type="file"
						className="absolute top-1/2 left-1/2 inset-0 opacity-0 -ml-20 -mt-14 py-12"
					/>
					<div class="flex flex-col items-center justify-center w-full h-full border-dashed border-2 border-[#b8b8b8] text-slate-400 rounded-md cursor-pointer py-4 mt-6">
						<RiAddCircleLine className="text-4xl" />
						<span className="text-[18px] font-medium">Add Hotel</span>
					</div>
				</div>
			</div>

			<div className="rounded-xl border-2 py-16 px-6">
				<span className="block text-[#0D6EFD] text-2xl font-semibold mb-6">
					Activities
				</span>
				<ul className="flex flex-col gap-6">
					<li className="bg-[#F6F6F6] py-6 px-4 rounded-xl flex justify-between items-center relative">
						<Image src="/activity.webp" width={100} height={100} />
						<div className="flex justify-center items-center gap-x-12">
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">Day 1</p>

								<p>Dubai, UAE</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold text-center">
									Lake Louise & Banff & Moraine <br /> Lake Tour from Calgary or{" "}
									<br /> Banff
								</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">11:00</p>

								<p>AM</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">1h 35m</p>
								<Separator className="my-2" />
								<p>30, Sep, 2023</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">12:35</p>

								<p>PM</p>
							</div>
						</div>

						<div>
							<h4 className="text-xl font-semibold">NGN 8,481</h4>
						</div>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-center items-center gap-x-2">
								<Button className="bg-[#3A53AD]">Change </Button>
								<RiAddCircleLine />
							</div>
							<TriggersA />
						</div>
						<div>
							<HiOutlineChevronUp className="text-3xl -ml-12" />
						</div>
						<RiCloseLine className="absolute right-5 top-4 text-red-500 text-xl" />
					</li>

					<li className="bg-[#F6F6F6] py-6 px-4 rounded-xl flex justify-between items-center relative">
						<Image src="/activity.webp" width={100} height={100} />
						<div className="flex justify-center items-center gap-x-12">
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">Day 1</p>

								<p>Dubai, UAE</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold text-center">
									Lake Louise & Banff & Moraine <br /> Lake Tour from Calgary or{" "}
									<br /> Banff
								</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">11:00</p>

								<p>AM</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">1h 35m</p>
								<Separator className="my-2" />
								<p>30, Sep, 2023</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">12:35</p>

								<p>PM</p>
							</div>
						</div>

						<div>
							<h4 className="text-xl font-semibold">NGN 8,481</h4>
						</div>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-center items-center gap-x-2">
								<Button className="bg-[#3A53AD]">Change </Button>
								<RiAddCircleLine />
							</div>
							<TriggersA />
						</div>
						<div>
							<HiOutlineChevronUp className="text-3xl -ml-12" />
						</div>
						<RiCloseLine className="absolute right-5 top-4 text-red-500 text-xl" />
					</li>

					<li className="bg-[#F6F6F6] py-6 px-4 rounded-xl flex justify-between items-center relative">
						<Image src="/activity.webp" width={100} height={100} />
						<div className="flex justify-center items-center gap-x-12">
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">Day 1</p>

								<p>Dubai, UAE</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold text-center">
									Lake Louise & Banff & Moraine <br /> Lake Tour from Calgary or{" "}
									<br /> Banff
								</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">11:00</p>

								<p>AM</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">1h 35m</p>
								<Separator className="my-2" />
								<p>30, Sep, 2023</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">12:35</p>

								<p>PM</p>
							</div>
						</div>

						<div>
							<h4 className="text-xl font-semibold">NGN 8,481</h4>
						</div>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-center items-center gap-x-2">
								<Button className="bg-[#3A53AD]">Change </Button>
								<RiAddCircleLine />
							</div>
							<TriggersA />
						</div>
						<div>
							<HiOutlineChevronUp className="text-3xl -ml-12" />
						</div>
						<RiCloseLine className="absolute right-5 top-4 text-red-500 text-xl" />
					</li>

					<li className="bg-[#F6F6F6] py-6 px-4 rounded-xl flex justify-between items-center relative">
						<Image src="/activity.webp" width={100} height={100} />
						<div className="flex justify-center items-center gap-x-12">
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">Day 1</p>

								<p>Dubai, UAE</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold text-center">
									Lake Louise & Banff & Moraine <br /> Lake Tour from Calgary or{" "}
									<br /> Banff
								</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">11:00</p>

								<p>AM</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">1h 35m</p>
								<Separator className="my-2" />
								<p>30, Sep, 2023</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">12:35</p>

								<p>PM</p>
							</div>
						</div>

						<div>
							<h4 className="text-xl font-semibold">NGN 8,481</h4>
						</div>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-center items-center gap-x-2">
								<Button className="bg-[#3A53AD]">Change </Button>
								<RiAddCircleLine />
							</div>
							<TriggersA />
						</div>
						<div>
							<HiOutlineChevronUp className="text-3xl -ml-12" />
						</div>
						<RiCloseLine className="absolute right-5 top-4 text-red-500 text-xl" />
					</li>

					<li className="bg-[#F6F6F6] py-6 px-4 rounded-xl flex justify-between items-center relative">
						<Image src="/activity.webp" width={100} height={100} />
						<div className="flex justify-center items-center gap-x-12">
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">Day 1</p>

								<p>Dubai, UAE</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold text-center">
									Lake Louise & Banff & Moraine <br /> Lake Tour from Calgary or{" "}
									<br /> Banff
								</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">11:00</p>

								<p>AM</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">1h 35m</p>
								<Separator className="my-2" />
								<p>30, Sep, 2023</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<p className="font-semibold">12:35</p>

								<p>PM</p>
							</div>
						</div>

						<div>
							<h4 className="text-xl font-semibold">NGN 8,481</h4>
						</div>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-center items-center gap-x-2">
								<Button className="bg-[#3A53AD]">Change </Button>
								<RiAddCircleLine />
							</div>
							<TriggersA />
						</div>
						<div>
							<HiOutlineChevronUp className="text-3xl -ml-12" />
						</div>
						<RiCloseLine className="absolute right-5 top-4 text-red-500 text-xl" />
					</li>
				</ul>

				{/* <div class="relative">
					<input type="file" class="absolute inset-0 opacity-0" />
					<div class="flex flex-col items-center justify-center w-full h-full border-dashed border-2 border-[#b8b8b8] text-slate-400 rounded-md cursor-pointer py-4 mt-6">
						<RiAddCircleLine className="text-4xl" />
						<span className="text-[18px] font-medium">Add Hotel</span>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default TripSection;
