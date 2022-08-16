import styled from "styled-components";

import {
	MapContainer,
	TileLayer,
	Popup,
	Marker,
	useMap,
	useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import React, { useState, useEffect, useCallback } from "react";
import RoutingMachine from "./RoutineMachine";

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function converTimeToAMPm(timeString) {
	const timeString12hr = new Date(
		"1970-01-01T" + timeString + "Z"
	).toLocaleTimeString("en-US", {
		timeZone: "UTC",
		hour12: true,
		hour: "numeric",
		minute: "numeric",
	});

	return timeString12hr;
}

const MapSection = ({ setTabIndex }) => {
	const [initialPosition, setInitialPosition] = useState([]);
	const [mapname, setName] = useState({
		startingPointName: "",
		destinationPointName: "",
	});
	const [destination, setDestination] = useState([]);
	const [newMarker, setNewMarker] = useState(false);
	// const [result, setResult] = useState();

	// useEffect(() => {
	// 	if (initialPosition.length > 1) {
	// 		const [lat, lng] = initialPosition;

	// 		fetch(
	// 			`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
	// 		)
	// 			.then((res) => res.json())
	// 			.then((data) => console.log(data));
	// 	}
	// }, [initialPosition]);

	// useEffect(() => {
	// 	if (destination.length > 1) {
	// 		const [lat, lng] = destination;

	// 		fetch(
	// 			`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
	// 		)
	// 			.then((res) => res.json())
	// 			.then((data) => console.log(data));
	// 	}
	// }, [destination]);

	// const destinationlocationData = useLocation(destination[0], destination[1]);
	// console.log(destinationlocationData);

	const fetchData = useCallback(
		async (latitude, longitude, objKey) => {
			let name = await fetch(
				`https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_MAP_KEY}&lat=` +
					latitude +
					"&lon=" +
					longitude +
					"&format=json"
			).then((response) => response.json());
			// console.log(name);
			// const address = name.address;
			// const place =
			// 	address &&
			// 	(address.city ||
			// 		address.town ||
			// 		address.road ||
			// 		address.suburb);
			// address &&
			// 	setName({
			// 		...mapname,
			// 		[objKey]: `${place}, ${address.country}`,
			// 	});
		},
		[mapname]
	);

	function LocationMarker() {
		const map = useMap();
		useMapEvents({
			click(e) {
				setDestination([e.latlng.lat, e.latlng.lng]);
				map.flyTo(e.latlng, map.getZoom());
			},
		});

		if (destination !== null && destination.length > 1) {
			return (
				<RoutingMachine
					startpostion={initialPosition}
					endposition={destination}
				/>
			);
		} else {
			return;
		}
	}

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			setInitialPosition([latitude, longitude]);

			fetchData(latitude, longitude, "startingPointName");
		});
	}, []);

	useEffect(() => {
		if (destination && destination.length > 1) {
			setNewMarker(true);
		}
	}, [destination]);

	return (
		<StyledDiv onClick={() => setTabIndex(-1)}>
			<div className="notification-bar">
				<div className="notification-bar-left">
					<img src="./images/padlock.png" alt="" />
					<img src="./images/bluetooth.png" alt="" />
					<img src="./images/4g.png" alt="" />
					<img src="./images/caution.png" alt="" />
					<img src="./images/tesla.png" alt="" />
				</div>

				<div className="notification-bar-right">
					<span>17 &#8451;</span>
					<span>
						{converTimeToAMPm(new Date().toLocaleTimeString())}
					</span>
				</div>
			</div>
			{initialPosition.length > 1 && (
				<MapContainer
					center={initialPosition}
					zoom={13}
					style={{ height: "100%" }}
				>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						className="map-tiles"
					/>
					{initialPosition.length > 1 && newMarker === false ? (
						<>
							<Marker
								position={initialPosition}
								eventHandlers={{
									mouseover: (event) =>
										event.target.openPopup(),
									mouseout: (event) =>
										event.target.closePopup(),
								}}
							>
								<Popup>{mapname.startingPointName}</Popup>
							</Marker>
						</>
					) : null}

					<LocationMarker />
				</MapContainer>
			)}

			<div className="direction-description">
				<img src="./images/gps-navigation.png" alt="" className="gps" />
				<span> Navigate</span>
				<img src="./images/arrow-right-grey.png" alt="" />
			</div>
		</StyledDiv>
	);
};

export default MapSection;

const StyledDiv = styled.div`
	// border: solid deeppink;
	height: 100%;
	position: relative;

	border-top-right-radius: 8px;

	overflow: hidden;
	background: white;

	.notification-bar {
		color: #ffffff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 12px;
		background: transparent;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10000;
		padding-top: 2px;
		img {
			width: 18px;
		}

		div {
			display: flex;
			gap: 16px;
			align-items: center;
		}
	}
	.direction-description {
		position: absolute;

		background-color: #000000c2;

		padding: 4px;
		top: 22px;
		left: 16px;

		z-index: 500;

		display: flex;
		align-items: center;
		padding: 16px 12px;
		border-radius: 32px;
		// justify-content: space-between;
		font-size: 0.9rem;
		color: #696969;
		width: 250px;
		span {
			margin-right: auto;
			margin-left: 12px;
		}
		img {
			width: 12px;
		}

		.gps {
			width: 15px;
		}
	}

	//overriding the leaflet map styles
	.leaflet-top.leaflet-right {
		left: 0;
	}
	.leaflet-control-zoom.leaflet-bar.leaflet-control {
		// border: solid deeppink;
		position: absolute;
		top: 32px;
		left: 670px;
		background-color: #000000c2;
		color: #696969;
		border-radius: 16px;
		overflow: hidden;

		a {
			background-color: #00000000;
			color: #696969;
			border: 0;
			width: 40px;
			height: 50px;
		}

		a:first-of-type {
			padding-top: 2px;
			margin-bottom: 0px;
		}

		a:last-of-type {
			padding-bottom: 0px;
			margin-bottom: -15px;
		}
	}

	.leaflet-routing-container.leaflet-bar.leaflet-routing-container-hide.leaflet-control {
		z-index: 1000000;
		width: 280px;
		position: absolute;
		left: 16px;
		top: 70px;
		background-color: #000000c2;
		color: #696969;
		border-radius: 12px;

		overflow: hidden;
	}
	.leaflet-routing-alt.leaflet-routing-alt-minimized {
		display: none;
	}

	.leaflet-routing-icon.leaflet-routing-icon-sharp-right,
	.leaflet-routing-icon.leaflet-routing-icon-turn-right,
	.leaflet-routing-icon.leaflet-routing-icon-bear-right {
		display: inline-block;
		width: 25px;
		height: 25px;
		background-image: url("./images/turn_right.svg");
		background-size: 25px 25px;
		background-position: center;
	}
	.leaflet-routing-icon.leaflet-routing-icon-sharp-left,
	.leaflet-routing-icon.leaflet-routing-icon-turn-left,
	.leaflet-routing-icon.leaflet-routing-icon-bear-left {
		display: inline-block;
		width: 25px;
		height: 25px;
		background-image: url("./images/turn_left.svg");
		background-size: 25px 25px;
		background-position: center;
	}

	.leaflet-routing-icon.leaflet-routing-icon-depart {
		display: inline-block;
		width: 25px;
		height: 25px;
		background-image: url("./images/flag_start.svg");
		background-size: 25px 25px;
		background-position: center;
	}
	.leaflet-routing-icon.leaflet-routing-icon-continue {
		display: inline-block;
		width: 25px;
		height: 25px;
		background-image: url("../images/straight.svg");
		background-size: 25px 25px;
		background-position: center;
	}

	.leaflet-routing-icon.leaflet-routing-icon-u-turn {
		display: inline-block;
		width: 25px;
		height: 25px;
		background-image: url("./images/u_turn.svg");
		background-size: 25px 25px;
		background-position: center;
	}

	.leaflet-routing-icon.leaflet-routing-icon-arrive {
		display: inline-block;
		width: 25px;
		height: 25px;
		background-image: url("./images/destination.svg");
		background-size: 25px 25px;
		background-position: center;
	}
	table {
		height: 25vh;
		display: block;
		overflow: auto;
	}
	.leaflet-routing-alt {
		h2 {
			font-size: 1.2rem;
			line-height: 1.1;
			background-color: #000000;
			position: sticky;
			top: 0;
			padding-left: 8px;
			padding-top: 8px;
		}

		h3 {
			background-color: #000000;
			position: sticky;
			top: 28px;
			padding-top: 8px;
			padding-left: 8px;
		}

		tr {
			cursor: pointer;
			margin: 4px 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 16px;
			padding: 0 8px;
			td:last-of-type {
				width: 20px;
				display: inline-block;
				text-align: center;
			}
		}
		tr:last-of-type {
			margin-bottom: 16px;
		}

		tr:hover {
			background: #000000;
		}
	}
`;
