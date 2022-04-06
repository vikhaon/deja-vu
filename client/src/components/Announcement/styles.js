import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  color: ${({ theme }) => theme.colors.dark};
  height: 40px;
  font-size: ${({ theme }) => theme.fontSizes.basicText};
  margin-bottom: ${({ theme }) => theme.margins.xs};
`;

export const AnnouncementText = styled.u`
  font-size: ${({ theme }) => theme.fontSizes.basicSubText};
  font-weight: bold;
  /* background-color: ${({ theme }) => theme.colors.primary}; */
`;
