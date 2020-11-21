import React from 'react';
import styled from 'styled-components';

const PageTitleWrapper = styled.div`
  margin: 0 16px;

  > h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    margin: 20px 0 0 0;
  }

  > p {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin: 8px 0 48px 0;
  }
`;

export function PageTitle() {
  return (
    <PageTitleWrapper>
      <h1>Discover Aisle</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </PageTitleWrapper>
  );
}
