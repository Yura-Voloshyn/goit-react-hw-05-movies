import { Dna } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = () => {
  return (
    <WrapLoad>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </WrapLoad>
  );
};
export default LoaderWrapper;

const WrapLoad = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
