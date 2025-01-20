export function Name() { return "Royal Kludge RK S85"; }
export function VendorId() { return ; }
export function ProductId() { return ; }
export function Publisher() { return "T-Crypt"; }
export function Documentation(){ return "troubleshooting/brand"; }
export function Size() { return [1,1]; }
export function ControllableParameters() {
	return [
		{"property":"shutdownColor", "group":"lighting", "label":"Shutdown Color", "min":"0", "max":"360", "type":"color", "default":"009bde"},
		{"property":"LightingMode", "group":"lighting", "label":"Lighting Mode", "type":"combobox", "values":["Canvas", "Forced"], "default":"Canvas"},
		{"property":"forcedColor", "group":"lighting", "label":"Forced Color", "min":"0", "max":"360", "type":"color", "default":"009bde"},
	];
}

export function Initialize() {

}

var vLedNames = [ "Led 1" ]; 
var vLedPositions = [ [0,0] ];

export function LedNames() {

}

export function LedPositions() {

}

export function Render() {

}

export function Shutdown() {

}

function hexToRgb(hex) {
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	let colors = [];
	colors[0] = parseInt(result[1], 16);
	colors[1] = parseInt(result[2], 16);
	colors[2] = parseInt(result[3], 16);

	return colors;
}

export function Validate(endpoint) {
	return endpoint.interface === 0 && endpoint.usage === 0 && endpoint.usage_page === 0;
}

export function ImageUrl() {
	return "";
}
