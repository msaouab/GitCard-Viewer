import { useEffect, useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import debounce from "lodash.debounce";
import axios from 'axios';
import SuggestList from './SuggestList';
import './InputText.css';
import { IUser } from '../_interfaces/PropsTypes';
import { url_API } from '../_domain/Api_url.ts';

const InputText = () => {
	const [value, setValue] = useState<string>('');
	const [results, setResults] = useState<IUser[]>([]);

	const getResults = async (query: string) => {
		try {
			const response = await axios.get(`${url_API}/search/users?q=${query}`);
			setResults(response.data.items);
		} catch (e: any) {
			throw new Error(e instanceof Error ? e.message : e.toString());
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setValue(value);
	};

	const deleteInput = () => {
		setValue('');
		setResults([]);
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
		<div className='inputContainer'>
			<form action="">
				<input
					type="text"
					className={`input ${results.length > 0 ? 'active' : ''}`}
					placeholder='search...'
					onChange={(e) => handleChange(e)}
					value={value}
				/>
				<div>
					{
						value.length > 3 ? (
							<IoCloseCircle onClick={() => deleteInput()} />
						) : (< FaGithub />)
					}
				</div>
			</form>
			{
				results.length > 0 &&
				value.length > 0 && (
					<SuggestList results={results} />
				)
			}
		</div >
	);
};

export default InputText;