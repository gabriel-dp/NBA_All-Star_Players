import { useState, useEffect } from 'react';

import {
	FilterContainer,
	FiltersList,
	FilterElement,
	DropdownOptions,
	Option,
	CheckboxInput,
} from './styles';

const filters = {
	conference: ['East', 'West'],
	division: ['Atlantic', 'Central', 'Northwest', 'Pacific', 'Southeast', 'Southwest'],
	position: ['G', 'F', 'C'],
	allStar: ['Team 1', 'Team 2'],
};

function PlayerFilter({ teams, setPlayerFilters }) {
	const resetFilters = { ...filters };
	Object.keys(resetFilters).forEach((filter) => {
		resetFilters[filter] = [];
	});
	const [selectedFilters, setSelectedFilters] = useState(resetFilters);

	useEffect(() => {
		if (!teams) return;

		let filteredTeams = teams;
		const filtersApplied = { ...selectedFilters };

		const TEAM_FILTERS = ['conference', 'division'];
		Object.keys(filtersApplied).forEach((filter) => {
			if (TEAM_FILTERS.indexOf(filter) === -1) return;

			if (filtersApplied[filter].length > 0) {
				filteredTeams = filteredTeams.filter(
					(team) => filtersApplied[filter].indexOf(team[filter]) > -1
				);
			}

			delete filtersApplied[filter];
		});

		setPlayerFilters({ ...filtersApplied, team: filteredTeams });
	}, [selectedFilters, teams, setPlayerFilters]);

	function handleChange(filter, option) {
		const newFilters = { ...selectedFilters };

		const index = newFilters[filter].indexOf(option);
		if (index === -1) newFilters[filter].push(option);
		else newFilters[filter].splice(index, 1);

		setSelectedFilters(newFilters);
	}

	return (
		<FilterContainer>
			<FiltersList>
				{Object.keys(filters).map((filter) => (
					<FilterElement key={filter}>
						<span>{filter}</span>
						<DropdownOptions>
							{filters[filter].map((option) => (
								<Option key={option}>
									<CheckboxInput
										value={selectedFilters[filter].indexOf(option)}
										onChange={() => handleChange(filter, option)}
									/>
									<span>{option}</span>
								</Option>
							))}
						</DropdownOptions>
					</FilterElement>
				))}
			</FiltersList>
		</FilterContainer>
	);
}

export default PlayerFilter;
