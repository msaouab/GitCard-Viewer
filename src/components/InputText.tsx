import { useEffect, useState } from 'react';
import debounce from "lodash.debounce";
import axios from 'axios';
import SuggestList from './SuggestList';
import './InputText.css';
import { IUser } from '../_interfaces/PropsTypes';
import { search_Url_Api } from '../_domain/github_url.ts';

const InputText = () => {
	const [value, setValue] = useState<string>('');
	const [results, setResults] = useState<IUser[]>([]);
	const [requestCount, setRequestCount] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);

	const getResults = async (query: string) => {
		try {
			const response = await axios.get(`${search_Url_Api}${query}`);
			setResults(response.data.items);
			setRequestCount(prevCount => prevCount + 1);
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
		if (value.length > 3)
			debouncedData(value);
		if (value.length === 0)
			setResults([]);
		return () => {
			debouncedData.cancel();
		};
	}, [value]);

	return (
		<header className='inputContainer'>
			<form action="">
				<input
					type="text"
					className={`input ${results.length > 0 ? 'active' : ''}`}
					placeholder='search...'
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
			<p>Total requests made: {requestCount}</p>
		</header >
	);
};

export default InputText;