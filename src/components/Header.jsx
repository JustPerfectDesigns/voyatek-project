import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { RiHome6Line } from "react-icons/ri";
import { LuWallet } from "react-icons/lu";
import { BiLineChart } from "react-icons/bi";
import { BiGlobe } from "react-icons/bi";
import { GiCreditsCurrency } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { BiBell } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiAddBoxLine } from "react-icons/ri";
import { LuUserCircle } from "react-icons/lu";
import Link from "next/link";

const Header = () => {
	return (
		<header className="mt-6">
			<nav className="flex justify-between items-center">
				<div className="flex justify-center items-center gap-x-6">
					<Link href="#" className="logo">
						<Image src="/voyateklogo.png" width={50} height={50} />
					</Link>

					<div className="flex justify-center items-center gap-x-2 bg-[#DEF5F4] py-[.7rem] px-4 rounded-xl ">
						<BiSearch className="text-xl text-slate-700" />
						<input
							type="text"
							placeholder="Search..."
							className="bg-transparent outline-none max-w-[150px]"
						/>
					</div>
				</div>

				<div className="">
					<ul className="flex justify-center items-center gap-x-6">
						<li className="">
							<Link
								href="#"
								className="flex flex-col items-center justify-center text-[#0D6EFD]"
							>
								<RiHome6Line className="text-xl" />
								<div className="font-medium text-sm">Home</div>
							</Link>
						</li>
						<li className="">
							<Link
								href="#"
								className="flex flex-col items-center justify-center text-slate-500 hover:text-[#0D6EFD] transition-all"
							>
								<LuWallet className="text-xl" />
								<div className="font-medium text-sm">Wallet</div>
							</Link>
						</li>
						<li className="">
							<Link
								href="#"
								className="flex flex-col items-center justify-center text-slate-500 hover:text-[#0D6EFD] transition-all"
							>
								<BiLineChart className="text-xl" />
								<div className="font-medium text-sm">Trends</div>
							</Link>
						</li>
						<li className="">
							<Link
								href="#"
								className="flex flex-col items-center justify-center text-slate-500 hover:text-[#0D6EFD] transition-all"
							>
								<BiGlobe className="text-xl" />
								<div className="font-medium text-sm">GoEasy</div>
							</Link>
						</li>
						<li className="">
							<Link
								href="#"
								className="flex flex-col items-center justify-center text-slate-500 hover:text-[#0D6EFD] transition-all"
							>
								<GiCreditsCurrency className="text-xl" />
								<div className="font-medium text-sm">GoCredit</div>
							</Link>
						</li>
						<li className="">
							<Link
								href="#"
								className="flex flex-col items-center justify-center text-slate-500 hover:text-[#0D6EFD] transition-all"
							>
								<FaRegHandshake className="text-xl" />
								<div className="font-medium text-sm">Commission for life</div>
							</Link>
						</li>
					</ul>
				</div>

				<div className="">
					<ul className="flex justify-center items-center gap-x-6">
						<li className="">
							<Link
								href="#"
								className="flex flex-col items-center justify-center text-slate-500"
							>
								<BiBell className="text-xl hover:text-[#0D6EFD] transition-all" />
							</Link>
						</li>
						<li className="">
							<Link href="#" className="relative text-slate-500 ">
								<div className="absolute top-1 left-4 rounded-full bg-red-600 w-2 h-2 p-[7px] text-[10px] flex items-center justify-center text-white font-semibold">
									2
								</div>
								<RiShoppingCartLine className="text-xl hover:text-[#0D6EFD] transition-all" />
							</Link>
						</li>
						<li className="">
							<Link
								href="#"
								className="flex flex-col items-center justify-center text-slate-500"
							>
								<RiAddBoxLine className="text-xl hover:text-[#0D6EFD] transition-all" />
							</Link>
						</li>
						<li className="">
							<Link
								href="#"
								className="flex flex-col items-center justify-center text-slate-500"
							>
								<LuUserCircle className="text-xl hover:text-[#0D6EFD] transition-all" />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
