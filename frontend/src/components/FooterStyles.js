import styled from 'styled-components';

export const Box = styled.div`
padding: 100px 0 30px;
background: linear-gradient(to right, #00093c, #2d0b00);
position: buttom;
bottom: 0;
width: 220%;
border-top-left-radius:125px;



@media (max-width: 1000px) {
	padding: 30px 30px;
}
`;

export const Container = styled.div`
    display: flex;
	flex-direction: column;    
	justify-content: space-between;
	max-width: 2000px;
	margin: 0 auto;
    height: 250px;
    
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 50px;

`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: white;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	transition: border-bottom .1s ease-out;
                    text-decoration: underline;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: white;
margin-bottom: 40px;
font-weight: bold;
`;
