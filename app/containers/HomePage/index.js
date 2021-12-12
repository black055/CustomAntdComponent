import { Row, Col, Card, Button, Steps } from 'antd';
import React from 'react';
import SwitchMenu from 'components/SwitchMenu/index';
const { Step } = Steps;

const margin = { margin: '0 8px 8px 0' };

export default function HomePage() {
  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} md={14} span={6}>
          <Card
            bordered={false}
            title={<p>Button Type</p>}
            bodyStyle={{ padding: '20px' }}
          >
            <Button style={margin} type="primary">
              Primary
            </Button>
            <Button style={margin}>Default</Button>
            <Button style={margin} type="dashed">
              Dashed
            </Button>
            <Button style={margin} type="link">
              Link
            </Button>
          </Card>
          <Card
            bordered={false}
            title={<p> Loading Button </p>}
            bodyStyle={{ padding: '20px' }}
          >
            <Button style={margin} type="primary" loading>
              Loading
            </Button>
            <Button style={margin} type="primary" size="small" loading>
              Loading
            </Button>
            <Button style={margin} shape="circle" loading />
            <Button style={margin} type="primary" shape="circle" loading />
          </Card>
        </Col>

        <Col xs={24} md={10} span={6}>
          <Card
            bordered={false}
            title={<p>Vertical Steps</p>}
            bodyStyle={{ padding: '20px' }}
          >
            <Steps direction="vertical" current={0}>
              <Step title="Waiting" description="Waiting." />
              <Step title="In Progress" description="In Progress." />
              <Step title="Finished" description="Finished." />
            </Steps>
          </Card>
          <Card
            bordered={false}
            title={<p>Menu Toggle</p>}
            bodyStyle={{ padding: '20px' }}
          >
            <SwitchMenu />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
