import { useState } from "react";
import './Tooltip.css';

type TooltipProps = {
	children: React.ReactNode;
	text: string;
};

const Tooltip = ({ children, text }: TooltipProps) => {
	const [show, setShow] = useState(false);

	const showTooltip = () => {
		setShow(true);
	};

	const hideTooltip = () => {
		setShow(false);
	};

	return (
		<div className='tooltip' onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
			{children}
			{show && <span className='tooltiptext'>{text}</span>}
		</div>
	);
};

export default Tooltip;
