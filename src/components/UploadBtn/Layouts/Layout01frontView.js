import React from "react";
import { BsCircle } from "react-icons/bs";

const Layout01frontView = () => {
	return (
		<div className="text-black mx-auto my-3 bg-gray-700 shadow-lg h-[359.06px] w-[151.7px]  inner-border">
			<div className="text-center relative py-1 -mx-1 h-[310.06px]">
				<BsCircle className="text-white frontCirlcle"></BsCircle>
			</div>
			<div>
				<p
					className="text-white absolute rotate-90"
					style={{ margin: "-70px 38px" }}
				>
					ET VOUS
				</p>
			</div>

			<div className="border-t-2 border-dotted"></div>
		</div>
	);
};

export default Layout01frontView;
// transform: rotate(90deg);
//     color: white;
//     position: absolute;
//     margin: -70px 38px;
