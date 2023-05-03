import React from "react";
import fscImage from "../../../images/fsc.png";
import { BiRfid } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";
const Layout02 = ({ item }) => {
	const {
		primarySize,
		barCode,
		seasonCode,
		genderIdentityLetter,
		slicedBarCodeEightDigit,
		slicedBarCode,
		storyName,
		sellingPrice,
	} = item;
	return (
		<div>
			<div className="bg-white p-3 w-80 text-black mx-auto my-3 shadow-lg">
				<div className="flex justify-around items-center">
					<div className="flex flex-col justify-start">
						<img src={fscImage} alt="" className="w-10" />
						<div
							style={{
								fontSize: "10px",
								marginTop: "3px",
								marginLeft: "5px",
							}}
						>
							<p className="text-start">Recycled</p>
							<p>FSC&copy; C111278</p>
						</div>
					</div>
					<BsCircle className="text-3xl"></BsCircle>
					<BiRfid className="text-3xl" />
				</div>
			</div>
		</div>
	);
};

export default Layout02;
