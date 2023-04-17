import styled from 'styled-components';

export const ProfileBoxUser = styled.div`
  padding: 60px;
`;
export const ProfileBox = styled.div`
  background-color: ${p => p.theme.color.white};
  box-shadow: ${p => p.theme.shadow};
`;

export const ProfileImg = styled.img`
  width: 300px;
`;
export const ProfileImgBox = styled.div`
  border-radius: 50%;
  background-color: ${p => p.theme.color.gray};
  overflow: hidden;
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;
export const ProfileText = styled.p`
  color: ${p => p.theme.color.gray};
  &:first-child {
    font-weight: 700;
    color: ${p => p.theme.color.black};
  }
`;
