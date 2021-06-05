import styled from 'styled-components';

export const NavBar = styled.div`
	width: 95%;
	display: flex;
	margin: 25px 0;
	min-height: 4rem;
	border-radius: 10px;
	flex-direction: row;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.base.dark};
`;

export const Nav = styled.div``;

export const Branding = styled.div``;

export const NavList = styled.ul`
	text-decoration: none;
`;
