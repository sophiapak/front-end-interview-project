import styled from 'styled-components';

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .product-list {
    flex: display;
    margin: 0 auto 69px auto;
    justify-content: center;
  }

  .group-name {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 16px 16px;

    @media (min-width: 768px) {
      margin: 0 0 16px 12px;
    }
  }

  .products-container {
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0 13px 0 13px;

    @media (min-width: 768px) {
      margin: 0 auto;
    }
  }
`;

export default GroupWrapper;
