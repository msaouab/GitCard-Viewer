import { useSelector } from 'react-redux';
import './Card.css';
import Tooltip from './Tooltip';

const Card = () => {
	const selector = useSelector((state: any) => state.user);

	const user = selector.user;

	console.log('selector:', user);

	return (
		<main>
			{
				user !== null && (
					<article className='card'>
						<img src={user.avatar_url} alt={user.login} className='user-profile' />
						<a href={user.html_url} target='_blank' className='user-login'>
							<Tooltip text={user.login} children={user.login} />
						</a>
					</article>
				)
			}
		</main>
	);
}

export default Card;

//use the .env in the root of the project to set the environment variables
// get the data from /user/:username