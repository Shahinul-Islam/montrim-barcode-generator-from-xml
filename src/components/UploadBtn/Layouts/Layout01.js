import React from "react";
import Barcode from "react-barcode";
import { BsCurrencyEuro } from "react-icons/bs";
import { BiRfid } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";
import { GrBottomCorner } from "react-icons/gr";
import "../HangTag.css";
import fscImage from "../../../images/fsc.png";

const Layout01 = ({ item }) => {
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
		<div className="bg-white  text-black mx-auto my-3 shadow-lg h-[359.06px] w-[151.7px]">
			<div className="text-center relative py-1 -mx-1 h-[310.06px]">
				<div className="flex justify-around items-center">
					<div className="flex flex-col justify-start">
						<img src={fscImage} alt="" className="w-4" />
						<div
							style={{
								fontSize: "6px",
								marginTop: "3px",
								marginLeft: "5px",
							}}
						>
							<p className="text-start">Recycled</p>
							<p>FSC&copy; C111278</p>
						</div>
					</div>
					<BsCircle className="text-lg"></BsCircle>
					<BiRfid className="text-lg" />
				</div>
				<div className="primarySize">
					<p>Size</p>
					<p className="text-xl">{primarySize}</p>
				</div>
				<Barcode
					value={`${barCode}`}
					// value={"123456789012"}
					format="EAN13"
					displayValue={true}
					width={1.3}
					height={40}
				/>
				<p className="text-sm seasonCode">{seasonCode}</p>
				<span>
					<GrBottomCorner className="bottomCorner" />
				</span>
				<div>
					<div
						style={{
							fontSize: "10px",
							margin: "-147px 53px",
							transform: "rotate(90deg)",
						}}
						className="flex items-center absolute right-0 gap-1"
					>
						<p style={{ padding: "1px" }} className="border border-black">
							{genderIdentityLetter}
						</p>
						<p>{slicedBarCodeEightDigit}</p>
					</div>
					<h2 id="matalanWeb" className="absolute">
						www.matalan.co.uk
					</h2>
					<p className="absolute slicedBarCode">{slicedBarCode}</p>
				</div>
				<div>
					<p className="storyName">{storyName}</p>
				</div>
			</div>

			<div className="border-t-2 border-dotted mt-2">
				<p className="my-1 font-bold flex items-center justify-center">
					<BsCurrencyEuro /> <span className="text-xl">{sellingPrice}</span>
				</p>
			</div>
		</div>
	);
};

export default Layout01;
