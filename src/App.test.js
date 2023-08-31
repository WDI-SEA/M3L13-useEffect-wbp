import { render, screen, within, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './pages/App';

describe('<App />', () => {
	describe('Countries List', () => {
		it('renders the countries list heading', async () => {
			render(<App />);

			const locationHeading = screen.getByText(/countries/i);
			expect(locationHeading).toBeInTheDocument();
		});

		it('renders no countries on initial render', () => {
			render(<App />);

			const countryList = screen.getByRole('list', { name: /countries/i });
			expect(
				within(countryList).queryAllByRole('listitem').length
			).toBeLessThan(1);
		});

		it('renders one or more countries after fetching user profiles and rerendering', async () => {
			render(<App />);

			const countryList = screen.getByRole('list', { name: /countries/i });
			const countryListItemsArr = await within(countryList).findAllByRole(
				'listitem'
			);
			expect(countryListItemsArr.length).toBeGreaterThanOrEqual(1);
		});
	});

	describe('User Profiles List', () => {
		it('renders the user profiles list heading', async () => {
			render(<App />);

			const userProfilesHeading = screen.getByText(/user profiles/i);
			expect(userProfilesHeading).toBeInTheDocument();
		});

		it('renders no user profiles on initial render', () => {
			render(<App />);

			const userProfileList = screen.getByRole('list', {
				name: /user profiles/i,
			});
			expect(
				within(userProfileList).queryAllByRole('listitem').length
			).toBeLessThan(1);
		});

		it('renders one or more user profiles after fetching user profiles and rerendering', async () => {
			render(<App />);

			const userProfileList = screen.getByRole('list', { name: /profiles/i });
			const countriesListItemsArr = await within(userProfileList).findAllByRole(
				'listitem'
			);
			expect(countriesListItemsArr.length).toBeGreaterThanOrEqual(1);
		});
	});
});
