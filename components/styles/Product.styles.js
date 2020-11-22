import styled from 'styled-components';

const ProductWrapper = styled.div`
  display: flex;
  width: 168px;
  height: 200px;
  flex-direction: column;
  margin: 0 3px 18px 3px;

  @media (min-width: 768px) {
    margin: 0 11px 18px 11px;
  }

  > h2 {
    font-weight: normal;
    font-size: 14px;
    margin: 8px 0 0 0;
  }

  > h3 {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #6d7173;
    margin: 4px 0 0 0;
  }
`;

export default ProductWrapper;
