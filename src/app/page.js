import CommentSection from "@/components/CommentSection";
import HeroSection from "@/components/HeroSection";
import PaySection from "@/components/PaySection";
import TripSection from "@/components/TripSection";

export default function Home() {
	return (
		<div className="mt-20">
			<HeroSection />
			<TripSection />
			<PaySection />
			<CommentSection />
		</div>
	);
}
