import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { navigationItemInterface } from '../../../common/settings';
import { navigationItems } from '../../../common/constants';

const Header = () => (
	<header>
		<Navbar variant='dark' bg='dark'>
			<Container>
				<Nav activeKey={window.location.pathname}>
					{navigationItems.map((item: navigationItemInterface, index: number) => {
						const { name, url } = item;
						
						return (
							<Nav.Link href={url} key={index}>
								{name}
							</Nav.Link>
						)
					})}
				</Nav>
			</Container>
		</Navbar>
	</header>
);

export default Header;