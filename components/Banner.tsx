import Image from "next/legacy/image";
import { Movie } from "../typings";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
	trendingNow: Movie[];
}

function Banner({ trendingNow }: Props) {
	const [movie, setMovie] = useState<Movie | null>();
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
	const [showModal, setShowModal] = useRecoilState(modalState);

	useEffect(() => {
		setMovie(trendingNow[Math.floor(Math.random() * trendingNow.length)]);
	}, [trendingNow]);

	return (
		<div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[100vh] lg:justify-end lg:pb-12 md:h-[65vh] h-[44vh]">
			<div className="absolute top-0 left-0 h-[95vh] w-[99vw] -z-10">
				<Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout="fill" objectFit="cover" />
			</div>

			<h1 className="text-2xl font-bold lg:text-6xl md:text-4xl">{movie?.title || movie?.name || movie?.original_name}</h1>
			<p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl text-shadow-md">{movie?.overview}</p>

			<div className="flex space-x-3">
				<button
					className="text-black bg-white bannerButton"
					onClick={() => {
						setCurrentMovie(movie!);
						setShowModal(true);
					}}
				>
					<FaPlay className="w-4 h-4 text-black md:h-7 md:w-7" /> Play
				</button>
				<button
					className="bannerButton bg-[gray]/70"
					onClick={() => {
						setCurrentMovie(movie!);
						setShowModal(true);
					}}
				>
					<InformationCircleIcon className="w-5 h-5 md:h-8 md:w-8" /> More Info
				</button>
			</div>
		</div>
	);
}

export default Banner;
``;
