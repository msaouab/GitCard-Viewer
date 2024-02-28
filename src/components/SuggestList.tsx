import { useDispatch } from 'react-redux';
import { IUser, resultProps } from '../_interfaces/PropsTypes';
import { setSelectedUser } from '../redux/Slices/userSlice';
import { useEffect, useState } from 'react';
import './SuggestList.css';
import { useSearchParams } from 'react-router-dom';

const SuggestList = (props: resultProps) => {
	const [userSelected, setUserSelected] = useState<boolean>(false);
	const dispathUser = useDispatch();
	let [searchParams, setSearchParams] = useSearchParams();
	const { results } = props;

	const handleChooseUser = (id: string) => {
		const user: IUser | undefined = results.find((result: any) => result.id === id);
		if (user) {
			dispathUser(setSelectedUser(user));
			setUserSelected(true);
			setSearchParams({ user: user.login });
		}
	};

	useEffect(() => {
		if (searchParams.get('user')) {
			setUserSelected(false);
		}
	}, [results]);

	return (
		<div className='suggest-list'>
			{!userSelected && (
				<ul className="results">
					{results.length > 0 &&
						results.map((result: any, index: number) => (
							<li key={index} className="result-list" onClick={() => handleChooseUser(result.id)}>
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