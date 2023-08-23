import { useEffect, useState } from 'react';
import { countryList } from '../../utils/countrylist';
import RadioPlayer from './RadioPlayer';
import useFetchStation from './useFetchStation';
import RadioChannelList from './RadioChannelList';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ReactSelect from 'react-select';

const RadioMain = () => {
	const [selectedCountry, setSelectedCountry] = useState('');
	const [currentPlaying, setCurrentPlaying] = useState({});
	const [currentPlayingIndex, setCurrentPlayingIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [inputSearch, setSearchInput] = useState('');
	const [expand, setExpand] = useState(false);

	useEffect(() => {
		fetch(`https://ipinfo.io/json?token=${process.env.REACT_APP_IP_KEY}`)
			.then((response) => response.json())
			.then((jsonResponse) => setSelectedCountry(jsonResponse.country));
	}, []);

	const { stations, status, setStationSearch } =
		useFetchStation(selectedCountry);

	const nextSong = () => {
		if (currentPlayingIndex + 1 < stations.length) {
			setCurrentPlayingIndex(currentPlayingIndex + 1);
			setCurrentPlaying(stations[currentPlayingIndex + 1]);
		} else {
			setCurrentPlayingIndex(0);
			setCurrentPlaying(stations[0]);
		}
	};

	const prevSong = () => {
		if (currentPlayingIndex > 0) {
			setCurrentPlayingIndex(currentPlayingIndex - 1);
			setCurrentPlaying(stations[currentPlayingIndex - 1]);
		} else {
			setCurrentPlayingIndex(stations.length - 1);
			setCurrentPlaying(stations[stations.length - 1]);
		}
	};

	useEffect(() => {
		setStationSearch(inputSearch);
	}, [inputSearch, setStationSearch]);

	function searchHandler(e) {
		setSearchInput(e.target.value);
	}

	function toggleExpand() {
		setExpand(!expand);
	}

	return (
		<StyledDiv expand={expand}>
			<RadioPlayer
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentPlaying={currentPlaying}
				stations={stations}
				setCurrentPlaying={setCurrentPlaying}
				nextSong={nextSong}
				prevSong={prevSong}
				status={status}
				setExpand={setExpand}
				toggleExpand={toggleExpand}
				expand={expand}
			/>

			<div
				className='radio-info-stations'
			>
				<div className='radio-search'>
					<div className='radio-search-station'>
						<img src='./images/searchicon.png' alt='' />
						<input
							value={inputSearch}
							onChange={searchHandler}
							placeholder={'search stations...'}
						/>
					</div>
					<div className='radio-search-countries'>
						<label htmlFor='countries'>Countries: </label>
						<CountrySelect
							onChange={(e) => setSelectedCountry(e.value)}
							id='countries'
							defaultValue={{
								value: selectedCountry,
								label: selectedCountry,
							}}
							options={countryList.map((country) => ({
								value: country.iso_3166_1,
								label: country.name,
							}))}
							className='react-select-container'
							classNamePrefix='react-select'
						/>
					</div>
				</div>
				{status === 'loading' ? (
					<div className='loading'>loading .....</div>
				) : (
					''
				)}
				{stations && status !== 'loading' &&stations.length < 1 ? (
					<div className='notfound'> Select a country to show stations </div>
				) : null}

				<div className='radio-stations'>
					{status === 'completed' && (
						<>
							<div className='stations-length'>
								Stations: {stations.length}
							</div>

							{stations.map((station, idx) => {
								return (
									<RadioChannelList
										setCurrentPlaying={setCurrentPlaying}
										channel={station}
										currentIndex={idx}
										key={uuidv4()} 
										setCurrentPlayingIndex={
											setCurrentPlayingIndex
										}
									/>
								);
							})}
						</>
					)}
				</div>
			</div>
		</StyledDiv>
	);
};

export default RadioMain;

const StyledDiv = styled.div`
	background-color: #171717;

	z-index: 10000;
	position: relative;
	margin-left: 335px;
	margin-right: 8px;
	border-top-left-radius: 12px;
	border-top-right-radius: 12px;

	.loading {
		font-size: 2rem;
		color: white;
		margin-top: 100px;
		margin-left: 280px;
	}

	.notfound {
		font-size: 2rem;
		color: white;
		margin-top: 100px;
		margin-left: 200px;
	}
	.radio-info-stations {
		// height: 60vh;
		max-height: ${(props) => (props.expand ? '402px' : '0vh')};
		min-height: ${(props) => (props.expand ? '402px' : '0vh')};
		overflow-y: scroll;
		transition: all 0.6s ease;
	}

	.stations-length {
		color: white;
		padding-right: 8px;
		text-align: right;
	}

	.radio-search {
		display: flex;
		// border: solid;
		align-items: center;
		justify-content: space-between;
		padding: 16px 12px;

		// border: solid yellow;

		.radio-search-countries {
			display: flex;
			align-items: center;
			gap: 8px;
			color: white;
		}

		.radio-search-station {
			position: relative;

			img {
				width: 20px;
				position: absolute;
				top: 8px;
				left: 8px;
				opacity: 0.7;
			}
			input {
				background: #131313;
				color: white;
				border-radius: 8px;
				width: 250px;
				padding: 8px 0;
				padding-left: 40px;
				border: 1px solid transparent;
				outline: 0;
			}

			input:focus {
				border: 1px solid #2684ff;

				outline: #2684ff;
			}
		}
	}

	.radio-stations {
		padding: 0 12px;
		margin-bottom: 24px;
	}
`;

const CountrySelect = styled(ReactSelect)`
	// border: solid white;
	background: #131313;
	width: 300px;
	border-radius: 12px;
	border: 0;
	color: white;

	.react-select__control {
		background: #131313;
		border: 0;
		border-radius: 12px;
		color: white;
		outline: 0;
	}
	.react-select__control--is-focused {
		border: 0;
		outline: 0;
		color: white;
	}
	.react-select__input {
		color: white;
		border: 0;
	}
	.react-select__input-container {
		color: white;
	}

	.react-select__indicator-separator {
		background: white;
	}

	.react-select__indicator {
		color: white;
	}

	.react-select__menu {
		background: #131313;
		color: white;
	}
	.react-select__value-container {
		color: white;
	}

	.react-select__option {
		background-color: #131313;
		cursor: pointer;
		&:hover {
			color: white;
			opacity: 0.6;
		}
	}
`;
