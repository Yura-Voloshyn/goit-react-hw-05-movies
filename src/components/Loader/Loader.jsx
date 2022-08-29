import { Dna } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = () => {
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
export default Loader;

const WrapLoad = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
