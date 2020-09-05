import React, { Component } from 'react';

import coverImg from '../../assets/trends.jpeg';

import { directory } from '../../redux/directory';
import { Root, Directory, CoverPicture, Caption, ImageContainer, MainTitle, Picture, Content, Title, SubTitle } from './Home.styles';

import Navbar from '../Navbar/Navbar';

class Home extends Component {
  render() {
    const { history } = this.props;
    const url = '/shop/collections';

    return (
      <Root>
        <Navbar />
        <MainTitle>collection</MainTitle>
        <CoverPicture style={{backgroundImage: `url(${coverImg})`}} onClick={() => history.push(url)}>
          <Caption>checkout all new trends collections</Caption>
        </CoverPicture>
        <MainTitle>category</MainTitle>
        <Directory>
        {directory.map(dir => (
          <ImageContainer size={dir.size} key={dir.id} onClick={() => history.push(`${url}/${dir.title}`)}>
            <Picture src={dir.imageUrl} alt={dir.title}/>
            <Content>
              <Title>{dir.title}</Title>
              <SubTitle>shop now</SubTitle>
            </Content>
          </ImageContainer>
        ))}
        </Directory>
      </Root>
    );
  }
}

export default Home;