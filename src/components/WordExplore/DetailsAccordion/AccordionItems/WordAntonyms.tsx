import { CircularProgress } from "@mui/joy";
import { wordsAPI } from "../../../../app/services/wordsAPI";
import { FC } from "react";
import { uniqueId } from "lodash";
import { useParams } from "react-router-dom";

interface IProps {
	word: string;
}

export const WordAntonyms: FC<IProps> = ({ word }) => {
	const { word } = useParams<{ word: string }>();
	const { data, isFetching, isError } = wordsAPI.useFetchAntonymsQuery(word);

	if (isError) return <p>Network error</p>;
	if (isFetching) return <CircularProgress />;
	if (data?.antonyms.length) {
		return (
			<ul>
				{data?.antonyms.map((antonym) => (
					<li key={uniqueId()}>{antonym}</li>
				))}
			</ul>
		);
	} else {
		return <p>нет данных</p>;
	}
};
