import { useState, useEffect } from 'react';
import filterOptions from '../../utils/filterOptions';

import {
	FilterContainer,
	FiltersList,
	FilterElement,
	DropdownOptions,
	Option,
	CheckboxInput,
} from './styles';

export default function PlayerFilter({ teams, playerTeam, allPlayers, setShowPlayers }) {
	const resetFilters = { ...filterOptions };
	Object.keys(resetFilters).forEach((filter) => {
		resetFilters[filter] = [];
	});

	const [selectedFilters, setSelectedFilters] = useState(resetFilters);
	const [playerFilters, setPlayerFilters] = useState(null);

	// Whenever a option is (un)checkedor selectedFilters is updated
	function handleChange(filter, option) {
		const newFilters = { ...selectedFilters };

		const index = newFilters[filter].indexOf(option);
		if (index === -1) newFilters[filter].push(option);
		else newFilters[filter].splice(index, 1);

		setSelectedFilters(newFilters);
	}

	// "Conference" and "Division" are teamFilters, they need to be converted to "Team" playerFilter
	useEffect(() => {
		if (!teams) return;

		let filteredTeams = teams;
		const filtersApplied = { ...selectedFilters };

		const TEAM_FILTERS = ['conference', 'division'];
		Object.keys(filtersApplied).forEach((filter) => {
			if (!TEAM_FILTERS.includes(filter)) return;

			if (filtersApplied[filter].length > 0) {
				filteredTeams = filteredTeams.filter((team) =>
					filtersApplied[filter].includes(team[filter])
				);
			}

			delete filtersApplied[filter];
		});

		setPlayerFilters({ ...filtersApplied, team: filteredTeams });
	}, [teams, selectedFilters, setPlayerFilters]);

	// When selectedFilters change, playerFilters changes too
	useEffect(() => {
		if (!allPlayers || !teams || !playerFilters) return;

		const propertyMatches = (property, values) => {
			if (values.length === 0) return true;
			return values.some((item) => property.includes(item));
		};

		const filteredPlayers = allPlayers.filter(
			(player) =>
				playerFilters.team.length > 0 &&
				playerTeam(player, playerFilters.team) !== undefined &&
				propertyMatches(player.position, playerFilters.position) &&
				propertyMatches(player.allStar.team, playerFilters.allStar)
		);

		setShowPlayers(filteredPlayers);
	}, [allPlayers, teams, playerFilters, playerTeam, setShowPlayers]);

	return (
		<FilterContainer>
			<FiltersList>
				{Object.keys(filterOptions).map((filter) => (
					<FilterElement key={filter}>
						<p className="filterElement">{filter}</p>
						<DropdownOptions>
							{filterOptions[filter].map((option) => (
								<Option key={option}>
									<CheckboxInput
										id={`option-${option}`}
										value={selectedFilters[filter].includes(option)}
										onChange={() => handleChange(filter, option)}
									/>
									<label htmlFor={`option-${option}`}>
										<span>{option}</span>
									</label>
								</Option>
							))}
						</DropdownOptions>
					</FilterElement>
				))}
			</FiltersList>
		</FilterContainer>
	);
}
