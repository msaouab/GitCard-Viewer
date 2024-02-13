import './Card.css';

const Card = () => {
	return (
		<div className="card">
			<img src="https://via.placeholder.com/150" alt="placeholder" />
			<div className="card-body">
				<h2>Card Title</h2>
				<p>Card Description</p>
			</div>
		</div>
	);
}

export default Card;