import React, { useState } from "react";
import { Upload, Button } from "antd";
import BarcodeCard from "./BarcodeCard";
import Barcode from "react-barcode";
// import { InboxOutlined } from "@ant-design/icons";

const UploadBtn = () => {
	const [jsonData, setJsonData] = useState(null);
	// console.log(jsonData?.purchase_order["@attributes"]);
	// console.log(jsonData.purchase_order.po_line_item[0].status['@attributes'].status_id);
	const [xmlData, setXmlData] = useState("");
	const handleFileSelect = async (event) => {
		const file = event.target.files[0];
		const fileReader = new FileReader();
		fileReader.readAsText(file);
		fileReader.onload = async () => {
			const data = fileReader.result;
			setXmlData(data);
			//  console.log(xmlData);
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(data, "text/xml");
			const json = xmlToJson(xmlDoc);
			setJsonData(json);
			// console.log(jsonData);
		};
	};
	const xmlToJson = (xml) => {
		const obj = {};
		if (xml.nodeType === 1) {
			if (xml.attributes.length > 0) {
				obj["@attributes"] = {};
				for (let i = 0; i < xml.attributes.length; i++) {
					const attribute = xml.attributes.item(i);
					obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
				}
			}
		} else if (xml.nodeType === 3) {
			obj["#text"] = xml.nodeValue;
		}
		if (xml.hasChildNodes()) {
			for (let i = 0; i < xml.childNodes.length; i++) {
				const item = xml.childNodes.item(i);
				const nodeName = item.nodeName;
				if (typeof obj[nodeName] === "undefined") {
					obj[nodeName] = xmlToJson(item);
				} else {
					if (typeof obj[nodeName].push === "undefined") {
						const old = obj[nodeName];
						obj[nodeName] = [];
						obj[nodeName].push(old);
					}
					obj[nodeName].push(xmlToJson(item));
				}
			}
		}
		return obj;
	};
	return (
		<div className="text-center">
			<h2 className="flex justify-center text-3xl p-4 font-bold text-orange-600 mb-3">
				Please upload a xml file
			</h2>
			<input
				type="file"
				name="file"
				onChange={(e) => handleFileSelect(e)}
				accept="text/xml"
			/>
			<BarcodeCard jsonData={jsonData} />
		</div>
	);
};

export default UploadBtn;
