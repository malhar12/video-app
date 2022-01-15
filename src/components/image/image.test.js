import Image from './image.js';
import { render } from '@testing-library/react';

describe('Image Component', () => {
    it('should render the component', ()=>{
        const imageComponent = render(<Image />);
        expect(imageComponent).toMatchSnapshot();
    });
});