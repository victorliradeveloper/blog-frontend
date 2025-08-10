import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './index';
import { GITHUB_LINk, LINKEDIN_LINK } from '@/constants/links';

describe('Footer', () => {
  it('renders GitHub and LinkedIn icons with correct src', () => {
    render(<Footer />);

    const githubIcon = screen.getByAltText('GitHub');
    const linkedInIcon = screen.getByAltText('LinkedIn');

    expect(githubIcon).toHaveAttribute('src');
    expect(githubIcon.getAttribute('src')).toContain('github_LDTcy1bc_');

    expect(linkedInIcon).toHaveAttribute('src');
    expect(linkedInIcon.getAttribute('src')).toContain('linkedin_aDQr6Huy2');
  });

  it('renders GitHub and LinkedIn links correctly', () => {
    render(<Footer />);

    // Verifica se o link do GitHub está correto
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', GITHUB_LINk);

    // Verifica se o link do LinkedIn está correto
    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedInLink).toHaveAttribute('href', LINKEDIN_LINK);
  });

  it('displays the current author name', () => {
    render(<Footer />);
    const authorName = screen.getByText(/Victor Lira/i);
    expect(authorName).toBeInTheDocument();
  });

  it('mentions the use of Next.js', () => {
    render(<Footer />);

    // Verifica se o texto "Next.js" está presente, mesmo que esteja dentro de uma tag <strong>
    const nextJsText = screen.getByText(/Next\.js/i);
    expect(nextJsText).toBeInTheDocument();
  });
});
