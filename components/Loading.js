import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

const Loading = () => {
  return (
    <CenterDiv>
      <div>Please wait...</div>
      <CircularProgress />
    </CenterDiv>
  );
};

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default Loading;
