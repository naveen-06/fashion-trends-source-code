import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin-top: 80px;
  background-color: rgb(34, 34, 48);
  color: silver;
  padding-top: 6px;

  @media (max-width: 600px) {
    margin-top: 50px;
  }
`;

export const LogoTitle = styled.div`
  text-align: center;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.span`
  padding: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Conditions = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 0.85em;
  letter-spacing: 0.9px;
  background-color: rgb(18, 18, 26);
`;