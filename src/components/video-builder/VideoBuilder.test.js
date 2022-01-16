import { render } from '@testing-library/react';
import VideoBuilder from './VideoBuilder';

describe('Video Builder', () => {
    it('should render the component', () => {
        const VideoBuilderComponent = render(<VideoBuilder />);
        expect(VideoBuilderComponent).toMatchSnapshot();
    });
});