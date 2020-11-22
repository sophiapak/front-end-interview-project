import styled from 'styled-components';

const HeroWrapper = styled.div`
  margin: 56px 0 0 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin: 114px 0 61px 10px;
    flex-direction: row;
  }
`;

const PageTitleWrapper = styled.div`
  margin: 0 16px;

  @media (min-width: 768px) {
    margin: auto 0 auto 35px;
  }

  > h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    margin: 20px auto 0 auto;

    @media (min-width: 768px) {
      margin: 0 auto;
    }
  }

  > p {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin: 8px 0 48px 0;

    @media (min-width: 768px) {
      margin: 8px auto 0 auto;
    }
  }
`;

const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 387px;
  }
`;

export { HeroWrapper, PageTitleWrapper, HeroImage };
