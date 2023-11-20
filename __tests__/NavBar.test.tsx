import { render, screen } from '@testing-library/react';
import NavBar from '@/app/NavBar';

describe('NavBar', () => {
  it('should render correctly', () => {
    render(<NavBar />);

    const logo = screen.getByRole('link', { name: /PomoGrow/i })
    expect(logo).toBeInTheDocument()

    const shopLink = screen.getByRole('link', { name: /Shop/i })
    expect(shopLink).toBeInTheDocument()

    const inventoryLink = screen.getByRole('link', { name: /Inventory/i })
    expect(inventoryLink).toBeInTheDocument()

    const settingsLink = screen.getByRole('link', { name: /Settings/i })
    expect(settingsLink).toBeInTheDocument()

    const logInLink = screen.getByRole('link', { name: /Login/i })
    expect(logInLink).toBeInTheDocument()
  })
})