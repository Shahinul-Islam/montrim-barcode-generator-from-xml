import React from "react";
import Barcode from "react-barcode";
import { BsCurrencyEuro } from "react-icons/bs";
import "./HangTag.css";

const HangTag = ({ item }) => {
	let seasonCode = item.question[0].line_free_answer["#text"]["#text"];
	let prodCode = item["@attributes"].prod_code;
	let barCode = item.question[1].line_free_answer["#text"]["#text"];
	let slicedBarCode = item.question[1].line_free_answer["#text"]["#text"].slice(
		7,
		12
	);

	let storyName = item.question[2].line_free_answer["#text"]["#text"];
	let sellingPrice = item.question[3].line_free_answer["#text"]["#text"];
	let primarySize = item.question[4]?.line_fixed_answer["#text"]["#text"];
	// let singleItem = {
	// 	seasonCode,
	// 	prodCode,
	// 	barCode,
	// 	slicedBarCode,
	// 	storyName,
	// 	sellingPrice,
	// 	primarySize,
	// };
	return (
		<div>
			<div className="bg-white p-3 w-80 text-black mx-auto my-3 shadow-lg">
				<div>
					<p>Size</p>
					<p>{primarySize}</p>
				</div>
				<div className="text-center relative py-1">
					<Barcode
						value={`${barCode}`}
						format="CODE128"
						displayValue={true}
						width={1}
					/>
					<h2 id="matalanWeb" className="absolute">
						www.matalan.co.uk
					</h2>
					<p className="absolute">{slicedBarCode}</p>
					<div>
						<>
							{storyName === "N/A" ? (
								<>Story Name not found</>
							) : (
								<>{storyName}</>
							)}
						</>
					</div>
				</div>
				<p>{seasonCode}</p>

				<div className="border-t-2 border-dotted mt-2">
					<p className="my-1 font-bold flex items-center justify-center">
						<BsCurrencyEuro /> {sellingPrice}
					</p>
				</div>
			</div>
		</div>
	);
};

export default HangTag;
