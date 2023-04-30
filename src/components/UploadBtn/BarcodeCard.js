import React from "react";
// import Barcode from "react-barcode";
import HangTag from "./HangTag";

const BarcodeCard = ({ jsonData }) => {
	console.log(jsonData?.purchase_order);
	/* console.log(
		jsonData &&
			jsonData?.purchase_order?.po_line_item?.map((item) => {
				console.log(item?.question[4]?.line_fixed_answer["#text"]["#text"]);
			})
	); */
	// let seasonCode = "";

	return (
		<div>
			{jsonData &&
				jsonData?.purchase_order?.po_line_item?.map((item, index) => (
					<HangTag item={item} key={index} />
				))}
		</div>
	);
};

export default BarcodeCard;

/* let seasonCode = item.question[0].line_free_answer["#text"]["#text"];
					let prodCode = item["@attributes"].prod_code;
					let barCode = item.question[1].line_free_answer["#text"]["#text"];
					let slicedBarCode = item.question[1].line_free_answer["#text"][
						"#text"
					].slice(7, 12);

					let storyName = item.question[2].line_free_answer["#text"]["#text"];
					let sellingPrice =
						item.question[3].line_free_answer["#text"]["#text"];
					let primarySize =
						item.question[4]?.line_fixed_answer["#text"]["#text"];
					let singleItem = {
						seasonCode,
						prodCode,
						barCode,
						slicedBarCode,
						storyName,
						sellingPrice,
						primarySize,
					}; */
