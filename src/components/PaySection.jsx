import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineShare } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";

const PaySection = () => {
	return (
		<div className="mt-20 flex justify-between items-center gap-6 w-full">
			<div className="w-full flex-1">
				<div className="relative">
					<Textarea
						placeholder="This is the trip plan for my annual leave. I will appreciate it if my request is approved. I await your swift response. Thanks!"
						className="resize-none w-full h-[272px] rounded-xl"
					/>
					<div className="absolute bottom-3 right-4 cursor-pointer flex justify-center items-center">
						<MdOutlineModeEditOutline className="text-xl text-[#0D6EFD]" />
						<span className="text-lg text-[#0D6EFD]">Edit</span>
					</div>
				</div>

				<div className="flex justify-start items-center gap-4 mt-4">
					<Button className="bg-[#DAEAFF] text-slate-800 hover:text-white flex justify-center items-center gap-1">
						<FiUserPlus /> Invite Pal
					</Button>
					<Button className="bg-[#DAEAFF] text-slate-800 hover:text-white flex justify-center items-center gap-1">
						<MdOutlineShare /> Share Trip
					</Button>
				</div>
			</div>
			<div>
				<div className="bg-white p-4 w-[350px] border-2 h-[272px] rounded-xl">
					<div className="flex justify-between items-center mt-3">
						<p>Flight</p>
						<p className="bg-[#EAF3FF] py-2 px-4 font-medium rounded-full text-sm text-[#0D6EFD]">
							NGN 100,00
						</p>
					</div>
					<div className="flex justify-between items-center mt-3">
						<p>Hotel</p>
						<p className="bg-[#EAF3FF] py-2 px-4 font-medium rounded-full text-sm text-[#0D6EFD]">
							NGN 100,00
						</p>
					</div>
					<div className="flex justify-between items-center mt-3">
						<p>Activities</p>
						<p className="bg-[#EAF3FF] py-2 px-4 font-medium rounded-full text-sm text-[#0D6EFD]">
							NGN 100,00
						</p>
					</div>
					<div className="flex justify-between items-center mt-10">
						<p className="font-semibold">Total</p>
						<p className="bg-[#EAF3FF] py-2 px-4 font-medium rounded-full text-[#0D6EFD]">
							NGN 1,000,000
						</p>
					</div>
				</div>
				<div className="flex justify-start items-center gap-4 mt-4">
					<Button
						variant="ghost"
						className=" text-slate-800 hover:text-slate-800 flex justify-center items-center gap-1 border-2 border-[#0D6EFD] px-6"
					>
						Split Pay
					</Button>
					<Button className="bg-[#0D6EFD] text-white hover:text-white flex justify-center items-center gap-1 px-6">
						Pay All
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PaySection;
