import { useEffect, useState } from 'react';
import debounce from "lodash.debounce";
import axios from 'axios';
import SuggestList from './SuggestList.tsx';
import { IUser } from '../_interfaces/PropsTypes.ts';
import { search_Url_Api } from '../_constant/github_url.ts';
import './SearchBar.css';

const SearchBar = () => {
	const [value, setValue] = useState<string>('');
	const [results, setResults] = useState<IUser[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const getResults = async (query: string) => {
		try {
			const response = await axios.get(`${search_Url_Api}${query}`);
			setResults(response.data.items);
			setLoading(false);
		} catch (e: any) {
			throw new Error(e instanceof Error ? e.message : e.toString());
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setValue(value);
		setLoading(true);
	};

	const debouncedData = debounce(getResults, 500);

	useEffect(() => {
		if (value.length > 0)
			debouncedData(value);
		return () => {
			debouncedData.cancel();
		};
	}, [value]);

	return (
		<header className='Search-Container'>
			<form action="">
				<input
					type="text"
					className={`input ${results.length > 0 ? 'active' : ''}`}
					placeholder='search for spotlight github...'
					onChange={(e) => handleChange(e)}
					value={value}
				/>
				{
					value.length > 0 && loading && (
						<span className='spinner-loader' />
					)
				}
			</form>
			{
				results.length > 0 &&
				value.length > 0 && (
					<SuggestList results={results} />
				)
			}
		</header >
	);
};

export default SearchBar;