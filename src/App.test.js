import { render } from '@testing-library/react';
import App from './App';

describe('App.js', ()=>{
  it('should render the app component', () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});

