import { render, screen } from '@testing-library/react';
import About from './index';

describe('About', () => {
  it('renders About component', () => {
    render(<About />);
  });

  it('render About title', () => {
    render(<About />);
    const heading = screen.getByRole('heading', { name: /Artigos/i });
    expect(heading).toBeInTheDocument();
  });
});
