import React from "react";
import Barcode from "react-barcode";

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
			<div className="bg-lime-500 p-3 w-80 text-white mx-auto my-3">
				<h2>www.matalan.co.uk</h2>
				<p>{slicedBarCode}</p>
				<p>Size</p>
				<p>{primarySize}</p>
				<div className="text-center">
					<Barcode
						value={`${barCode}`}
						format="CODE128"
						displayValue={true}
						width={1}
					/>
					<div>
						<>{storyName}</>
					</div>
				</div>
				<p>{seasonCode}</p>

				<div>
					<hr />
					<p className="my-1 font-bold">$ {sellingPrice}</p>
				</div>
			</div>
		</div>
	);
};

export default HangTag;
