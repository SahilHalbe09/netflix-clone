import React from "react";
import { Movie } from "../typings";
import Image from "next/legacy/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
	// when using firebase
	// movie: Movie || DocumentData,
	movie: Movie;
}

function Thumbnail({ movie }: Props) {
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
	const [showModal, setShowModal] = useRecoilState(modalState);

	return (
		<div
			className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
			onClick={() => {
				setCurrentMovie(movie);
				setShowModal(true);
			}}
		>
			<Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} className="object-cover rounded-sm md:rounded" priority layout="fill" />
		</div>
	);
}

export default Thumbnail;
