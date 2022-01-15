import { render } from '@testing-library/react';
import Page from './Page.js';

describe('Page', () => {
    it('should render the component', () => {
        const PageComponent = render(<Page />);
        expect(PageComponent).toMatchSnapshot();
    });
});