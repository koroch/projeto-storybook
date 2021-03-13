import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { screen } from '@testing-library/dom';


test('renders learn react link', () => {
    const {debug} = renderTheme(<Home />);
    debug();

    const headingContainer = screen.getByRole('heading', { name: 'Hello world' })
        .parentElement;

    expect(headingContainer).toMatchSnapshot();

    expect(headingContainer).toHaveStyleRule('background', 'blue');
});
