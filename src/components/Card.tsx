import { FaExternalLinkAlt, FaGithub, FaTwitter } from 'react-icons/fa';
import { user_Url_Api } from '../_domain/github_url';
import { IUser } from '../_interfaces/PropsTypes';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Tooltip from './Tooltip';
import Toast from './Toast';
import Kpis from './Kpis';
import './Card.css';

const Card = () => {
	const selector = useSelector((state: any) => state.login);
	const [user, setUser] = useState<IUser | null>(null);
	const [error, setError] = useState<string>('');

	const login = selector.login;
	const getUser = async () => {
		try {
			const response = await axios.get(`${user_Url_Api}${login}`);
			setUser(response.data);
		} catch (e: any) {
			setError(e instanceof Error ? e.message : e.toString());
			errorToast();
		}
	};

	useEffect(() => {
		if (login && login !== '') {
			getUser();
		}
	}, [login]);

	const errorToast = () => {
		<Toast message={error} type='error' />
	};

	const kpis = [
		{
			label: 'Followers',
			value: user?.followers,
		},
		{
			label: 'Following',
			value: user?.following,
		},
		{
			label: 'Repos',
			value: user?.public_repos,
		},
	];

	return (
		<main className='main'>
			{
				user !== null && (
					<>
						<article className='article card'>
							<img src={user.avatar_url} alt={user.login} className='user-profile' />
							<Tooltip text={user.login} children={user.name} />
							<p className='bio'>{user.bio}</p>
							{user.location && <p>{user.location}</p>}
							<div className='social-links'>
								{
									user.html_url && user.html_url !== '' &&
									<a href={user.html_url} target='_blank' className='links'><FaGithub /></a>
								}
								{
									user.twitter_username && user.twitter_username !== '' &&
									<a href={`https://x.com/${user.twitter_username}`} target='_blank' className='links'><FaTwitter /></a>
								}
								{
									user.blog && user.blog !== '' &&
									<a href={user.blog} target='_blank' className='links'><FaExternalLinkAlt /></a>
								}
							</div>
						</article>
						<article className='article kpis'>
							{
								kpis.map((kpi, index) => (
									<Kpis key={index} kpi={kpi} />
								))
							}
						</article>
					</>
				)
			}
		</main>
	);
}

export default Card;
