const countryList = [
	{
		name: "Andorra",
		iso_3166_1: "AD",
		stationcount: 3,
	},
	{
		name: "The United Arab Emirates",
		iso_3166_1: "AE",
		stationcount: 99,
	},
	{
		name: "Afghanistan",
		iso_3166_1: "AF",
		stationcount: 136,
	},
	{
		name: "Antigua And Barbuda",
		iso_3166_1: "AG",
		stationcount: 2,
	},
	{
		name: "Albania",
		iso_3166_1: "AL",
		stationcount: 40,
	},
	{
		name: "Armenia",
		iso_3166_1: "AM",
		stationcount: 17,
	},
	{
		name: "Angola",
		iso_3166_1: "AO",
		stationcount: 13,
	},
	{
		name: "Antarctica",
		iso_3166_1: "AQ",
		stationcount: 5,
	},
	{
		name: "Argentina",
		iso_3166_1: "AR",
		stationcount: 388,
	},
	{
		name: "American Samoa",
		iso_3166_1: "AS",
		stationcount: 2,
	},
	{
		name: "Austria",
		iso_3166_1: "AT",
		stationcount: 185,
	},
	{
		name: "Australia",
		iso_3166_1: "AU",
		stationcount: 349,
	},
	{
		name: "Aruba",
		iso_3166_1: "AW",
		stationcount: 5,
	},
	{
		name: "Azerbaijan",
		iso_3166_1: "AZ",
		stationcount: 13,
	},
	{
		name: "Bosnia And Herzegovina",
		iso_3166_1: "BA",
		stationcount: 54,
	},
	{
		name: "Barbados",
		iso_3166_1: "BB",
		stationcount: 6,
	},
	{
		name: "Bangladesh",
		iso_3166_1: "BD",
		stationcount: 32,
	},
	{
		name: "Belgium",
		iso_3166_1: "BE",
		stationcount: 255,
	},
	{
		name: "Burkina Faso",
		iso_3166_1: "BF",
		stationcount: 6,
	},
	{
		name: "Bulgaria",
		iso_3166_1: "BG",
		stationcount: 166,
	},
	{
		name: "Bahrain",
		iso_3166_1: "BH",
		stationcount: 2,
	},
	{
		name: "Burundi",
		iso_3166_1: "BI",
		stationcount: 2,
	},
	{
		name: "Benin",
		iso_3166_1: "BJ",
		stationcount: 1,
	},
	{
		name: "Bermuda",
		iso_3166_1: "BM",
		stationcount: 6,
	},
	{
		name: "Brunei Darussalam",
		iso_3166_1: "BN",
		stationcount: 1,
	},
	{
		name: "Bolivia",
		iso_3166_1: "BO",
		stationcount: 48,
	},
	{
		name: "Bonaire",
		iso_3166_1: "BQ",
		stationcount: 6,
	},
	{
		name: "Brazil",
		iso_3166_1: "BR",
		stationcount: 700,
	},
	{
		name: "The Bahamas",
		iso_3166_1: "BS",
		stationcount: 4,
	},
	{
		name: "Bhutan",
		iso_3166_1: "BT",
		stationcount: 2,
	},
	{
		name: "Botswana",
		iso_3166_1: "BW",
		stationcount: 6,
	},
	{
		name: "Belarus",
		iso_3166_1: "BY",
		stationcount: 50,
	},
	{
		name: "Belize",
		iso_3166_1: "BZ",
		stationcount: 2,
	},
	{
		name: "Canada",
		iso_3166_1: "CA",
		stationcount: 905,
	},
	{
		name: "The Cocos Keeling Islands",
		iso_3166_1: "CC",
		stationcount: 1,
	},
	{
		name: "The Democratic Republic Of The Congo",
		iso_3166_1: "CD",
		stationcount: 17,
	},
	{
		name: "The Central African Republic",
		iso_3166_1: "CF",
		stationcount: 2,
	},
	{
		name: "The Congo",
		iso_3166_1: "CG",
		stationcount: 1,
	},
	{
		name: "Switzerland",
		iso_3166_1: "CH",
		stationcount: 389,
	},
	{
		name: "Coted Ivoire",
		iso_3166_1: "CI",
		stationcount: 4,
	},
	{
		name: "The Cook Islands",
		iso_3166_1: "CK",
		stationcount: 1,
	},
	{
		name: "Chile",
		iso_3166_1: "CL",
		stationcount: 234,
	},
	{
		name: "Cameroon",
		iso_3166_1: "CM",
		stationcount: 2,
	},
	{
		name: "China",
		iso_3166_1: "CN",
		stationcount: 2100,
	},
	{
		name: "Colombia",
		iso_3166_1: "CO",
		stationcount: 143,
	},
	{
		name: "Costa Rica",
		iso_3166_1: "CR",
		stationcount: 35,
	},
	{
		name: "Cuba",
		iso_3166_1: "CU",
		stationcount: 15,
	},
	{
		name: "Cabo Verde",
		iso_3166_1: "CV",
		stationcount: 9,
	},
	{
		name: "Curacao",
		iso_3166_1: "CW",
		stationcount: 7,
	},
	{
		name: "Cyprus",
		iso_3166_1: "CY",
		stationcount: 27,
	},
	{
		name: "Czechia",
		iso_3166_1: "CZ",
		stationcount: 208,
	},
	{
		name: "Germany",
		iso_3166_1: "DE",
		stationcount: 3568,
	},
	{
		name: "Denmark",
		iso_3166_1: "DK",
		stationcount: 80,
	},
	{
		name: "Dominica",
		iso_3166_1: "DM",
		stationcount: 1,
	},
	{
		name: "The Dominican Republic",
		iso_3166_1: "DO",
		stationcount: 36,
	},
	{
		name: "Algeria",
		iso_3166_1: "DZ",
		stationcount: 34,
	},
	{
		name: "Ecuador",
		iso_3166_1: "EC",
		stationcount: 115,
	},
	{
		name: "Estonia",
		iso_3166_1: "EE",
		stationcount: 28,
	},
	{
		name: "Egypt",
		iso_3166_1: "EG",
		stationcount: 31,
	},
	{
		name: "Spain",
		iso_3166_1: "ES",
		stationcount: 661,
	},
	{
		name: "Ethiopia",
		iso_3166_1: "ET",
		stationcount: 7,
	},
	{
		name: "Finland",
		iso_3166_1: "FI",
		stationcount: 97,
	},
	{
		name: "Fiji",
		iso_3166_1: "FJ",
		stationcount: 7,
	},
	{
		name: "The Falkland Islands Malvinas",
		iso_3166_1: "FK",
		stationcount: 1,
	},
	{
		name: "The Faroe Islands",
		iso_3166_1: "FO",
		stationcount: 6,
	},
	{
		name: "France",
		iso_3166_1: "FR",
		stationcount: 1840,
	},
	{
		name: "The United Kingdom Of Great Britain And Northern Ireland",
		iso_3166_1: "GB",
		stationcount: 902,
	},
	{
		name: "Grenada",
		iso_3166_1: "GD",
		stationcount: 5,
	},
	{
		name: "Georgia",
		iso_3166_1: "GE",
		stationcount: 16,
	},
	{
		name: "French Guiana",
		iso_3166_1: "GF",
		stationcount: 4,
	},
	{
		name: "Guernsey",
		iso_3166_1: "GG",
		stationcount: 2,
	},
	{
		name: "Ghana",
		iso_3166_1: "GH",
		stationcount: 23,
	},
	{
		name: "Gibraltar",
		iso_3166_1: "GI",
		stationcount: 2,
	},
	{
		name: "Greenland",
		iso_3166_1: "GL",
		stationcount: 13,
	},
	{
		name: "Guinea",
		iso_3166_1: "GN",
		stationcount: 6,
	},
	{
		name: "Guadeloupe",
		iso_3166_1: "GP",
		stationcount: 3,
	},
	{
		name: "Greece",
		iso_3166_1: "GR",
		stationcount: 1197,
	},
	{
		name: "South Georgia And The South Sandwich Islands",
		iso_3166_1: "GS",
		stationcount: 1,
	},
	{
		name: "Guatemala",
		iso_3166_1: "GT",
		stationcount: 44,
	},
	{
		name: "Guam",
		iso_3166_1: "GU",
		stationcount: 3,
	},
	{
		name: "Guinea Bissau",
		iso_3166_1: "GW",
		stationcount: 1,
	},
	{
		name: "Guyana",
		iso_3166_1: "GY",
		stationcount: 3,
	},
	{
		name: "Hong Kong",
		iso_3166_1: "HK",
		stationcount: 32,
	},
	{
		name: "Honduras",
		iso_3166_1: "HN",
		stationcount: 24,
	},
	{
		name: "Croatia",
		iso_3166_1: "HR",
		stationcount: 215,
	},
	{
		name: "Haiti",
		iso_3166_1: "HT",
		stationcount: 13,
	},
	{
		name: "Hungary",
		iso_3166_1: "HU",
		stationcount: 240,
	},
	{
		name: "Indonesia",
		iso_3166_1: "ID",
		stationcount: 167,
	},
	{
		name: "Ireland",
		iso_3166_1: "IE",
		stationcount: 131,
	},
	{
		name: "Israel",
		iso_3166_1: "IL",
		stationcount: 110,
	},
	{
		name: "Isle Of Man",
		iso_3166_1: "IM",
		stationcount: 4,
	},
	{
		name: "India",
		iso_3166_1: "IN",
		stationcount: 254,
	},
	{
		name: "British Indian Ocean Territory",
		iso_3166_1: "IO",
		stationcount: 30,
	},
	{
		name: "Iraq",
		iso_3166_1: "IQ",
		stationcount: 11,
	},
	{
		name: "Islamic Republic Of Iran",
		iso_3166_1: "IR",
		stationcount: 28,
	},
	{
		name: "Iceland",
		iso_3166_1: "IS",
		stationcount: 35,
	},
	{
		name: "Italy",
		iso_3166_1: "IT",
		stationcount: 1180,
	},
	{
		name: "Jersey",
		iso_3166_1: "JE",
		stationcount: 1,
	},
	{
		name: "Jamaica",
		iso_3166_1: "JM",
		stationcount: 16,
	},
	{
		name: "Jordan",
		iso_3166_1: "JO",
		stationcount: 8,
	},
	{
		name: "Japan",
		iso_3166_1: "JP",
		stationcount: 46,
	},
	{
		name: "Kenya",
		iso_3166_1: "KE",
		stationcount: 68,
	},
	{
		name: "Kyrgyzstan",
		iso_3166_1: "KG",
		stationcount: 1,
	},
	{
		name: "Cambodia",
		iso_3166_1: "KH",
		stationcount: 7,
	},
	{
		name: "The Comoros",
		iso_3166_1: "KM",
		stationcount: 4,
	},
	{
		name: "Saint Kitts And Nevis",
		iso_3166_1: "KN",
		stationcount: 1,
	},
	{
		name: "The Republic Of Korea",
		iso_3166_1: "KR",
		stationcount: 67,
	},
	{
		name: "Kuwait",
		iso_3166_1: "KW",
		stationcount: 13,
	},
	{
		name: "The Cayman Islands",
		iso_3166_1: "KY",
		stationcount: 3,
	},
	{
		name: "Kazakhstan",
		iso_3166_1: "KZ",
		stationcount: 12,
	},
	{
		name: "Lebanon",
		iso_3166_1: "LB",
		stationcount: 36,
	},
	{
		name: "Saint Lucia",
		iso_3166_1: "LC",
		stationcount: 7,
	},
	{
		name: "Liechtenstein",
		iso_3166_1: "LI",
		stationcount: 1,
	},
	{
		name: "Sri Lanka",
		iso_3166_1: "LK",
		stationcount: 27,
	},
	{
		name: "Lithuania",
		iso_3166_1: "LT",
		stationcount: 53,
	},
	{
		name: "Luxembourg",
		iso_3166_1: "LU",
		stationcount: 31,
	},
	{
		name: "Latvia",
		iso_3166_1: "LV",
		stationcount: 48,
	},
	{
		name: "Libya",
		iso_3166_1: "LY",
		stationcount: 7,
	},
	{
		name: "Morocco",
		iso_3166_1: "MA",
		stationcount: 51,
	},
	{
		name: "Monaco",
		iso_3166_1: "MC",
		stationcount: 5,
	},
	{
		name: "The Republic Of Moldova",
		iso_3166_1: "MD",
		stationcount: 33,
	},
	{
		name: "Montenegro",
		iso_3166_1: "ME",
		stationcount: 6,
	},
	{
		name: "Madagascar",
		iso_3166_1: "MG",
		stationcount: 11,
	},
	{
		name: "Republic Of North Macedonia",
		iso_3166_1: "MK",
		stationcount: 9,
	},
	{
		name: "Mali",
		iso_3166_1: "ML",
		stationcount: 2,
	},
	{
		name: "Myanmar",
		iso_3166_1: "MM",
		stationcount: 3,
	},
	{
		name: "Mongolia",
		iso_3166_1: "MN",
		stationcount: 7,
	},
	{
		name: "Macao",
		iso_3166_1: "MO",
		stationcount: 3,
	},
	{
		name: "Martinique",
		iso_3166_1: "MQ",
		stationcount: 9,
	},
	{
		name: "Malta",
		iso_3166_1: "MT",
		stationcount: 14,
	},
	{
		name: "Mauritius",
		iso_3166_1: "MU",
		stationcount: 3,
	},
	{
		name: "Malawi",
		iso_3166_1: "MW",
		stationcount: 6,
	},
	{
		name: "Mexico",
		iso_3166_1: "MX",
		stationcount: 1395,
	},
	{
		name: "Malaysia",
		iso_3166_1: "MY",
		stationcount: 16,
	},
	{
		name: "Mozambique",
		iso_3166_1: "MZ",
		stationcount: 6,
	},
	{
		name: "Namibia",
		iso_3166_1: "NA",
		stationcount: 11,
	},
	{
		name: "New Caledonia",
		iso_3166_1: "NC",
		stationcount: 5,
	},
	{
		name: "Norfolk Island",
		iso_3166_1: "NF",
		stationcount: 1,
	},
	{
		name: "Nigeria",
		iso_3166_1: "NG",
		stationcount: 33,
	},
	{
		name: "Nicaragua",
		iso_3166_1: "NI",
		stationcount: 27,
	},
	{
		name: "The Netherlands",
		iso_3166_1: "NL",
		stationcount: 515,
	},
	{
		name: "Norway",
		iso_3166_1: "NO",
		stationcount: 107,
	},
	{
		name: "Nepal",
		iso_3166_1: "NP",
		stationcount: 21,
	},
	{
		name: "New Zealand",
		iso_3166_1: "NZ",
		stationcount: 211,
	},
	{
		name: "Oman",
		iso_3166_1: "OM",
		stationcount: 4,
	},
	{
		name: "Panama",
		iso_3166_1: "PA",
		stationcount: 7,
	},
	{
		name: "Peru",
		iso_3166_1: "PE",
		stationcount: 276,
	},
	{
		name: "French Polynesia",
		iso_3166_1: "PF",
		stationcount: 11,
	},
	{
		name: "Papua New Guinea",
		iso_3166_1: "PG",
		stationcount: 2,
	},
	{
		name: "The Philippines",
		iso_3166_1: "PH",
		stationcount: 39,
	},
	{
		name: "Pakistan",
		iso_3166_1: "PK",
		stationcount: 28,
	},
	{
		name: "Poland",
		iso_3166_1: "PL",
		stationcount: 813,
	},
	{
		name: "Saint Pierre And Miquelon",
		iso_3166_1: "PM",
		stationcount: 2,
	},
	{
		name: "Puerto Rico",
		iso_3166_1: "PR",
		stationcount: 27,
	},
	{
		name: "State Of Palestine",
		iso_3166_1: "PS",
		stationcount: 7,
	},
	{
		name: "Portugal",
		iso_3166_1: "PT",
		stationcount: 198,
	},
	{
		name: "Paraguay",
		iso_3166_1: "PY",
		stationcount: 20,
	},
	{
		name: "Qatar",
		iso_3166_1: "QA",
		stationcount: 9,
	},
	{
		name: "Reunion",
		iso_3166_1: "RE",
		stationcount: 6,
	},
	{
		name: "Romania",
		iso_3166_1: "RO",
		stationcount: 235,
	},
	{
		name: "Serbia",
		iso_3166_1: "RS",
		stationcount: 270,
	},
	{
		name: "The Russian Federation",
		iso_3166_1: "RU",
		stationcount: 1327,
	},
	{
		name: "Rwanda",
		iso_3166_1: "RW",
		stationcount: 10,
	},
	{
		name: "Saudi Arabia",
		iso_3166_1: "SA",
		stationcount: 40,
	},
	{
		name: "Seychelles",
		iso_3166_1: "SC",
		stationcount: 1,
	},
	{
		name: "The Sudan",
		iso_3166_1: "SD",
		stationcount: 1,
	},
	{
		name: "Sweden",
		iso_3166_1: "SE",
		stationcount: 133,
	},
	{
		name: "Singapore",
		iso_3166_1: "SG",
		stationcount: 29,
	},
	{
		name: "Ascension And Tristan Da Cunha Saint Helena",
		iso_3166_1: "SH",
		stationcount: 1,
	},
	{
		name: "Slovenia",
		iso_3166_1: "SI",
		stationcount: 76,
	},
	{
		name: "Slovakia",
		iso_3166_1: "SK",
		stationcount: 102,
	},
	{
		name: "Sierra Leone",
		iso_3166_1: "SL",
		stationcount: 6,
	},
	{
		name: "San Marino",
		iso_3166_1: "SM",
		stationcount: 6,
	},
	{
		name: "Senegal",
		iso_3166_1: "SN",
		stationcount: 10,
	},
	{
		name: "Somalia",
		iso_3166_1: "SO",
		stationcount: 10,
	},
	{
		name: "Suriname",
		iso_3166_1: "SR",
		stationcount: 6,
	},
	{
		name: "South Sudan",
		iso_3166_1: "SS",
		stationcount: 1,
	},
	{
		name: "Sao Tome And Principe",
		iso_3166_1: "ST",
		stationcount: 1,
	},
	{
		name: "El Salvador",
		iso_3166_1: "SV",
		stationcount: 19,
	},
	{
		name: "Syrian Arab Republic",
		iso_3166_1: "SY",
		stationcount: 45,
	},
	{
		name: "Eswatini",
		iso_3166_1: "SZ",
		stationcount: 1,
	},
	{
		name: "The Turks And Caicos Islands",
		iso_3166_1: "TC",
		stationcount: 1,
	},
	{
		name: "The French Southern Territories",
		iso_3166_1: "TF",
		stationcount: 1,
	},
	{
		name: "Togo",
		iso_3166_1: "TG",
		stationcount: 3,
	},
	{
		name: "Thailand",
		iso_3166_1: "TH",
		stationcount: 61,
	},
	{
		name: "Tajikistan",
		iso_3166_1: "TJ",
		stationcount: 3,
	},
	{
		name: "Turkmenistan",
		iso_3166_1: "TM",
		stationcount: 4,
	},
	{
		name: "Tunisia",
		iso_3166_1: "TN",
		stationcount: 65,
	},
	{
		name: "Tonga",
		iso_3166_1: "TO",
		stationcount: 2,
	},
	{
		name: "Turkey",
		iso_3166_1: "TR",
		stationcount: 345,
	},
	{
		name: "Trinidad And Tobago",
		iso_3166_1: "TT",
		stationcount: 12,
	},
	{
		name: "Taiwan Province Of China",
		iso_3166_1: "TW",
		stationcount: 81,
	},
	{
		name: "United Republic Of Tanzania",
		iso_3166_1: "TZ",
		stationcount: 34,
	},
	{
		name: "Ukraine",
		iso_3166_1: "UA",
		stationcount: 147,
	},
	{
		name: "Uganda",
		iso_3166_1: "UG",
		stationcount: 35,
	},
	{
		name: "The United States Minor Outlying Islands",
		iso_3166_1: "UM",
		stationcount: 4,
	},
	{
		name: "The United States Of America",
		iso_3166_1: "US",
		stationcount: 4984,
	},
	{
		name: "Uruguay",
		iso_3166_1: "UY",
		stationcount: 49,
	},
	{
		name: "Uzbekistan",
		iso_3166_1: "UZ",
		stationcount: 3,
	},
	{
		name: "The Holy See",
		iso_3166_1: "VA",
		stationcount: 11,
	},
	{
		name: "Saint Vincent And The Grenadines",
		iso_3166_1: "VC",
		stationcount: 5,
	},
	{
		name: "Bolivarian Republic Of Venezuela",
		iso_3166_1: "VE",
		stationcount: 30,
	},
	{
		name: "US Virgin Islands",
		iso_3166_1: "VI",
		stationcount: 9,
	},
	{
		name: "Vietnam",
		iso_3166_1: "VN",
		stationcount: 37,
	},
	{
		name: "Vanuatu",
		iso_3166_1: "VU",
		stationcount: 1,
	},
	{
		name: "Wallis And Futuna",
		iso_3166_1: "WF",
		stationcount: 1,
	},
	{
		name: "Kosovo",
		iso_3166_1: "XK",
		stationcount: 13,
	},
	{
		name: "Yemen",
		iso_3166_1: "YE",
		stationcount: 4,
	},
	{
		name: "Mayotte",
		iso_3166_1: "YT",
		stationcount: 3,
	},
	{
		name: "South Africa",
		iso_3166_1: "ZA",
		stationcount: 79,
	},
	{
		name: "Zambia",
		iso_3166_1: "ZM",
		stationcount: 13,
	},
	{
		name: "Zimbabwe",
		iso_3166_1: "ZW",
		stationcount: 4,
	},
];

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

export { countryList, converTimeToAMPm };
