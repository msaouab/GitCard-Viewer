import { useDispatch } from 'react-redux';
import { IUser, resultProps } from '../_interfaces/PropsTypes';
import { useEffect, useRef, useState } from 'react';
import { setLogin } from '../redux/Slices/loginSlice';
import './SuggestList.css';

const SuggestList = (props: resultProps) => {
	const suggestListRef = useRef<HTMLDivElement>(null);
	const [userSelected, setUserSelected] = useState<boolean>(false);
	const dispathLogin = useDispatch();
	const { results } = props;

	useEffect(() => {
		setUserSelected(false);
		const handleClickOutside = (event: MouseEvent) => {
			if (suggestListRef.current && !suggestListRef.current.contains(event.target as Node)) {
				setUserSelected(true);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [results]);

	const handleChooseUser = (login: string) => {
		dispathLogin(setLogin(login));
		setUserSelected(true);
	};

	return (
		<div className='suggest-list' ref={suggestListRef}>
			{!userSelected && (
				<ul className="results">
					{results.length > 0 &&
						results.map((result: IUser, index: number) => (
							<li key={index} className="result-list" onClick={() => handleChooseUser(result.login)}>
								<img src={result.avatar_url} alt={result.login} />
								<p>{result.login}</p>
							</li>
						))}
				</ul>
			)}
		</div>
	);
}

export default SuggestList;