import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const CommentSection = () => {
	return (
		<div className="border-2 rounded-xl mt-20 p-5">
			<div className="flex justify-start items-center gap-x-4 w-full">
				<div className="p-2 w-12 h-12 bg-[#9B5EFF] flex justify-center items-center rounded-full text-white font-semibold text-lg">
					OE
				</div>
				<div className="bg-[#F5F5F5] rounded-full w-full py-3 px-4 flex items-center">
					<input
						type="text"
						className="w-full border-none outline-none bg-transparent"
						placeholder="Comment...."
					/>
					<FaArrowRight className="text-xl" />
				</div>
			</div>
			<div className="mt-8">
				<h4 className="text-xl">Comments</h4>
				<div className="flex items-start gap-4 mt-4">
					<div>
						<FaUser className="text-[#6C757D] text-3xl" />
					</div>
					<div>
						<div className="flex items-center">
							<p className="text-[#4e5256]">Fuad Adigun</p>
							<span className="text-sm text-[#6C757D] ml-2">1 day ago</span>
						</div>
						<p className="text-[#4e5256] mt-2">
							Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4 mt-14">
					<div>
						<FaUser className="text-[#6C757D] text-3xl" />
					</div>
					<div>
						<div className="flex items-center">
							<p className="text-[#4e5256]">Hope Faith</p>
							<span className="text-sm text-[#6C757D] ml-2">1 day ago</span>
						</div>
						<p className="text-[#4e5256] mt-2">
							Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentSection;
