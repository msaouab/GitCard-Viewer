import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			Developed by
			<a href="https://github.com/msaouab" target='_blank' className='links'><FaGithub /></a>
			<a href="https://www.linkedin.com/in/msaouab/" target='_blank' className='links'><FaLinkedin /></a>
		</footer>
	);
};

export default Footer;