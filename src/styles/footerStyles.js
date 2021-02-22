import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 60px;
  background: radial-gradient(circle, rgba(48, 66, 84) 0%, rgba(24,24,24) 100%);
  @media (max-width: 1000px) {
    padding: 70px 30px;
    
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    min-height: 100vh; 
    min-height: 100%;
    
    
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: middlle;
  margin-left: 100px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 15px;
  font-size: 16x;
  text-decoration: none;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 25px;
  font-weight: bold;
`;