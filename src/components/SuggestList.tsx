import { useDispatch } from 'react-redux';
import { IUser, resultProps } from '../_interfaces/PropsTypes';
import { useState } from 'react';
import { setLogin } from '../redux/Slices/loginSlice';
import './SuggestList.css';

const SuggestList = (props: resultProps) => {
	const [userSelected, setUserSelected] = useState<boolean>(false);
	const dispathLogin = useDispatch();
	const { results } = props;

	const handleChooseUser = (login: string) => {
		dispathLogin(setLogin(login));
	};

	return (
		<div className='suggest-list'>
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