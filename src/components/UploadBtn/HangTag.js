import React from "react";
import "./HangTag.css";
import Layout01 from "./Layouts/Layout01";
import Layout02 from "./Layouts/Layout02";
import Layout01frontView from "./Layouts/Layout01frontView";

const HangTag = ({ item }) => {
	let sellingPrice;
	let primarySize;
	let seasonCode;
	let barCode;
	let storyName;

	item?.question?.map((qsn) => {
		if (qsn["@attributes"]?.question_id === "30715") {
			sellingPrice = qsn?.line_free_answer["#text"]["#text"];
		}
		if (qsn["@attributes"]?.question_id === "30721") {
			primarySize = qsn?.line_fixed_answer["#text"]["#text"];
		}
		if (qsn["@attributes"]?.question_id === "31024") {
			seasonCode = qsn?.line_free_answer["#text"]["#text"];
		}
		if (qsn["@attributes"]?.question_id === "30717") {
			barCode = qsn?.line_free_answer["#text"]["#text"];
		}
		if (qsn["@attributes"]?.question_id === "31242") {
			storyName = qsn?.line_free_answer["#text"]["#text"];
		}
	});
	let slicedBarCode = barCode.slice(7, 12);
	let slicedBarCodeFirstNumber = barCode.slice(0, 1);
	let slicedBarCodeEightDigit = barCode.slice(0, 7);

	let genderIdentityLetter;

	switch (slicedBarCodeFirstNumber) {
		case "1":
			genderIdentityLetter = "B";

			break;
		case "2":
			genderIdentityLetter = "C";

			break;
		case "3":
			genderIdentityLetter = "F";

			break;
		case "4":
			genderIdentityLetter = "G";

			break;
		case "6":
			genderIdentityLetter = "M";

			break;

		default:
			break;
	}
	const requiredData = {
		sellingPrice,
		primarySize,
		seasonCode,
		barCode,
		storyName,
		slicedBarCode,
		slicedBarCodeFirstNumber,
		slicedBarCodeEightDigit,
		genderIdentityLetter,
	};
	return (
		<>
			{item && item ? (
				<div className="flex justify-evenly">
					<Layout01frontView />
					<Layout01 item={requiredData} />
					{/* <Layout02 item={requiredData} /> */}
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default HangTag;
