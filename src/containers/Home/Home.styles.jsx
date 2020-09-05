import styled from 'styled-components';

export const Root = styled.div`
  width: 65vw;
  margin: auto;
  margin-top: 80px;

  @media (max-width: 600px) {
    width: 90vw;
    margin-top: 50px;
  }
`;

export const Directory = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CoverPicture = styled.div`
  width: 98%;
  height: 300px;
  margin: 2% auto;
  background-position: center;
  background-size: cover;
  border: solid 0.5px #eee;
  border-radius: 2px;
  box-shadow: 0 2px 3px #ccc;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 200px;
  }
`;

export const MainTitle = styled.h3`
  margin: 1%;
  text-transform: capitalize;
  position: relative;
`;

export const Caption = styled.h2`
  text-transform: capitalize;
  position: absolute;
  top: 10%;
  left: 20%;
  background-color: #eee;
  padding: 6px;
  border-radius: 2px;
  box-shadow: 0 2px 3px #ccc;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

export const ImageContainer = styled.div`
  width: ${({ size }) => size ? '48%' : '31.33%' };
  height: ${({ size }) => size ? '300px' : '200px' };
  margin: 1% auto;
  position: relative;
  border-radius: 2px;
  cursor: pointer;
  overflow: hidden;

  &:hover img {
    transform: scale(1.2);
    transition: all 3s ease-out;
  }

  &:hover div {
    background-color: white;
  }

  @media (max-width: 600px) {
    width: 96%;
    height: 200px;
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #ccc;
  margin-left: -50px;
  margin-top: -30px;
  padding: 6px;
  border-radius: 2px;
`;

export const Title = styled.h4`
  text-align: center;
  margin-bottom: 6px;
  text-transform: capitalize;
`;

export const SubTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
`;