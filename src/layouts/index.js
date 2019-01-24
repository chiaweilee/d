import { Flex } from 'antd-mobile';

function BasicLayout(props) {
  return (
    <div className="flex-container">
      <div className="sub-title">App</div>
      <Flex>
        <Flex.Item>Hello</Flex.Item>
        <Flex.Item>World</Flex.Item>
      </Flex>
    </div>
  );
}

BasicLayout.propTypes = {};

export default BasicLayout;
