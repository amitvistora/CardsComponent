import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import InfoCard from "../InfoCard/cards";


describe('InfoCard Component', () => {
  const mockProps = {
    title: 'Data Source',
    logo: 'test-logo.png',
    mainTech: 'Snowflake',
    name: 'Data Source 1',
    addedOn: '03 Mar 2023 14:30',
  };
 

  test('renders card with correct structure', () => {
    render(<InfoCard {...mockProps} />);
    
    expect(screen.getByTestId('info-card')).toBeInTheDocument();
    expect(screen.getByTestId('info-card-title')).toHaveTextContent(mockProps.title);
    expect(screen.getByTestId('info-card-logo')).toBeInTheDocument();
    expect(screen.getByTestId('info-card-menu-button')).toBeInTheDocument();
  });

  test('displays dynamic content correctly', () => {
    render(<InfoCard {...mockProps} />);
    expect(screen.getByText(mockProps.mainTech)).toBeVisible();
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(/Added on/i)).toBeInTheDocument();
    expect(screen.getByText(mockProps.addedOn)).toBeInTheDocument();
  });

  test('applies conditional styling based on title', () => {
    const { rerender } = render(<InfoCard {...mockProps} />);
    expect(screen.getByTestId('info-card-title')).toHaveStyle({
      backgroundColor: 'rgb(68,156,157)',
    });
    
    rerender(<InfoCard {...mockProps} title="Data Pipeline" />);
    expect(screen.getByTestId('info-card-title')).toHaveStyle({
      backgroundColor: 'rgb(65,121,170)',
    });
  });

  test('has proper hover interaction', async () => {
    const user = userEvent.setup();
    render(<InfoCard {...mockProps} />);
    const card = screen.getByTestId('info-card');
    
    await user.hover(card);
    expect(card).toHaveStyle({
      transform: 'translateY(-2px)',
      boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)'
    });
  });
});