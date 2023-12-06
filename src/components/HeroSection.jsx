import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { Button } from "./ui/button";
import { RiDownload2Line } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const HeroSection = () => {
	return (
		<div>
			<div className="relative">
				<h1 className="text-center text-5xl font-bold text-slate-800">
					My Trip <span className="text-[#0D6EFD]">Planner</span>
				</h1>
				<Image
					src="/lines.png"
					width={80}
					height={80}
					className="absolute -bottom-8 right-[28rem]"
				/>
			</div>

			<div className="flex justify-between items-center mt-16">
				<div className="bg-[#F6F6F6] py-3 px-4 rounded-md flex items-center justify-center gap-x-2">
					<div className="text-xl font-medium text-slate-600">
						My Vacation Plan - Spring
					</div>
					<MdOutlineModeEdit className=" text-slate-600 text-xl" />
				</div>

				<div className="flex justify-center items-center gap-x-4">
					<div className="w-4 h-4 bg-green-400 rounded-full"></div>
					<div className="flex items-center justify-center">
						<div className="w-10 h-10 p-5 bg-[#0A6DE4] text-white rounded-full flex items-center justify-center font-semibold text-xl border-solid border-4 border-white">
							<div>O</div>
						</div>
						<div className="w-10 h-10 p-5 bg-[#E4BA23] text-white rounded-full flex items-center justify-center font-semibold text-xl border-solid border-4 border-white -ml-4">
							<div>A</div>
						</div>
						<div className="w-10 h-10 p-5 bg-[#FF7394] text-white rounded-full flex items-center justify-center font-semibold text-xl border-solid border-4 border-white -ml-4">
							<div>SU</div>
						</div>
						<div className="w-10 h-10 p-5 bg-[#AF4DFD] text-white rounded-full flex items-center justify-center font-semibold text-xl border-solid border-4 border-white -ml-4">
							<div>AS</div>
						</div>
						<div className="w-10 h-10 p-5 bg-[#9E9E9E] text-white rounded-full flex items-center justify-center font-semibold text-xl border-solid border-4 border-white -ml-4">
							<div>+10</div>
						</div>
						<p className="ml-2">Okorie Emmanuel and 13 Others are Active</p>
					</div>
				</div>

				<div>
					<Button className="flex justify-center items-center gap-x-3 py-6 bg-[#DAEAFF] text-slate-800 hover:text-white">
						<RiDownload2Line className="text-xl" />
						<span>Save</span>
						<FiChevronDown className="text-xl" />
					</Button>
				</div>
			</div>

			<div className="bg-[#F1F7FF] py-10 pb-16 rounded-xl mt-20 flex flex-col justify-center items-center">
				<Tabs defaultValue="roundTrip" className="">
					<TabsList className="items-center justify-center flex mb-6">
						<TabsTrigger value="oneWay">One-way</TabsTrigger>
						<TabsTrigger value="roundTrip">Round trip</TabsTrigger>
						<TabsTrigger value="multiCity">Multi city</TabsTrigger>
					</TabsList>
					<TabsContent value="oneWay">
						<div className="flex justify-center items-center gap-x-1">
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">From</span>
								<p className="text-[#0D6EFD] font-medium">Lagos, Nigeria</p>
							</div>
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">To</span>
								<p className="text-[#0D6EFD] font-medium">Calgary, Canada</p>
							</div>
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">Depart</span>
								<p className="text-[#0D6EFD] font-medium">30/09/2023</p>
							</div>

							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">
									Travellers
								</span>
								<p className="text-[#0D6EFD] font-medium">1 Adult</p>
							</div>
						</div>
						<div className="flex justify-center items-center mt-10">
							<Button className="bg-[#0D6EFD] py-6 px-12">Save</Button>
						</div>
					</TabsContent>
					<TabsContent value="roundTrip">
						<div className="flex justify-center items-center gap-x-1">
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">From</span>
								<p className="text-[#0D6EFD] font-medium">Lagos, Nigeria</p>
							</div>
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">To</span>
								<p className="text-[#0D6EFD] font-medium">Calgary, Canada</p>
							</div>
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">Depart</span>
								<p className="text-[#0D6EFD] font-medium">30/09/2023</p>
							</div>
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">Return</span>
								<p className="text-[#0D6EFD] font-medium">05/10/2023</p>
							</div>
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">
									Travellers
								</span>
								<p className="text-[#0D6EFD] font-medium">1 Adult</p>
							</div>
						</div>
						<div className="flex justify-center items-center mt-10">
							<Button className="bg-[#0D6EFD] py-6 px-12">Save</Button>
						</div>
					</TabsContent>
					<TabsContent value="multiCity">
						<div className="flex justify-center items-center gap-x-1">
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">From</span>
								<p className="text-[#0D6EFD] font-medium">Lagos, Nigeria</p>
							</div>
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">To</span>
								<p className="text-[#0D6EFD] font-medium">Calgary, Canada</p>
							</div>
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">Depart</span>
								<p className="text-[#0D6EFD] font-medium">30/09/2023</p>
							</div>
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">Return</span>
								<p className="text-[#0D6EFD] font-medium">05/10/2023</p>
							</div>
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">
									Travellers
								</span>
								<p className="text-[#0D6EFD] font-medium">1 Adult</p>
							</div>
							<div className="bg-white rounded py-2 px-3 pr-12">
								<span className="block text-slate-500 font-medium">Others</span>
								<p className="text-[#0D6EFD] font-medium">
									USA, China, Thailand
								</p>
							</div>
						</div>
						<div className="flex justify-center items-center mt-10">
							<Button className="bg-[#0D6EFD] py-6 px-12">Save</Button>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default HeroSection;
