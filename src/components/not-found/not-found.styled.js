import styled from 'styled-components';

const Main = styled.main`
  max-width: 1200px;
  margin-top: 100px;
  margin-left: 100px;
  margin-bottom: 120px;
`;

const NotFoundTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-size: ${({ theme }) => theme.font.semilarge};
  line-height: 110%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};
`;

const NotFoundText = styled.p`
  font-size: ${({ theme }) => theme.font.formsHeading};

  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  color: ${({ theme }) => theme.color.whiteSmoke};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

export {
  Main,
  NotFoundTitle,
  NotFoundText
};
