import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 720px;
  background: black;
  border: solid black;
  border-radius: 25px;
`;

export const EpisodeDetails = styled.p`
  margin: 0 auto;
  text-align: center;
  padding: 20px 0;
  color: white;
`;

export const EpisodeDescription = styled.p`
  margin: 0 auto;
  text-align: center;
  padding: 20px 0;
  min-height: 200px;
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 25px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
