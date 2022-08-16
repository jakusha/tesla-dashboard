import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({ startpostion, endposition }) => {
	const instance = L.Routing.control({
		waypoints: [
			L.latLng(startpostion[0], startpostion[1]),
			L.latLng(endposition[0], endposition[1]),
		],
		lineOptions: {
			styles: [{ color: "#6FA1EC", weight: 4 }],
		},
		show: false,
		addWaypoints: false,
		router: L.Routing.mapbox(
			"pk.eyJ1IjoiamotbWFwcGluZyIsImEiOiJjbDU5Y2Q2d3IyYTZkM2N0NzV6cjN3NTExIn0.rrhyg_TXYKqVt5RYnEZhmw"
		),
		routeWhileDragging: true,
		draggableWaypoints: true,
		fitSelectedRoutes: true,
		showAlternatives: false,
	});

	return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
