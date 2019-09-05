import React from "react"

import { Button } from 'antd';
import { Icon } from 'antd';
import { Typography, Divider } from 'antd';
import { Layout } from 'antd';
import { Affix} from 'antd';
import { Breadcrumb } from 'antd';
import { Menu, Dropdown } from 'antd';
import { Pagination } from 'antd';
import { Steps } from 'antd';
import { Progress } from 'antd';
import { BackTop } from 'antd';

const { Step } = Steps;

const { Header, Footer, Sider, Content } = Layout;

const { Title, Paragraph, Text } = Typography;

const ButtonGroup = Button.Group;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                web前端学科
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                python学科
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                人工只能学科
            </a>
        </Menu.Item>
    </Menu>
);


class AntOne extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            num : 0
        }
    }

    get(){
        alert("111")
    }


    componentDidMount() {
        let num = this.state.num
        setInterval(()=>{
            num= num + 1;
            this.setState({
                num
            })
        },300)
    }

    render(){
        return (
            <div>
                <Progress type="line" percent={this.state.num} showInfo={false} />

                <h1>使用ant design组件</h1>

                <hr/>
                <BackTop />

                <hr/>

                <Steps>
                    <Step status="finish" title="登陆" icon={<Icon type="user" />} />
                    <Step status="finish" title="验证" icon={<Icon type="solution" />} />
                    <Step status="process" title="支付" icon={<Icon type="loading" />} />
                    <Step status="wait" title="完成" icon={<Icon type="smile-o" />} />
                </Steps>

                <hr/>



                <Pagination onChange={()=> this.get()} defaultCurrent={1} total={50} />

                <hr/>

                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        学科 <Icon type="down" />
                    </a>
                </Dropdown>


                <hr/>

                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>

                <hr/>

                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary" shape="circle">
                    <Icon type="plus" />
                </Button>

                <hr/>
                <Button type="primary" icon="download" size="large" />

                <hr/>

                <ButtonGroup>
                    <Button type="primary">
                        <Icon type="left" />
                        上一页
                    </Button>
                    <Button type="primary">
                        下一页
                        <Icon type="right" />
                    </Button>
                </ButtonGroup>

                <hr/>

                <Icon type="step-backward" />
                <Icon type="step-forward" />

                <hr/>

                <Typography>
                    <Title>Introduction</Title>
                    <Paragraph>
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                    </Paragraph>
                    <Paragraph>
                        After massive project practice and summaries, Ant Design, a design language for background
                        applications, is refined by Ant UED Team, which aims to{' '}
                        <Text strong>
                            uniform the user interface specs for internal background projects, lower the unnecessary
                            cost of design differences and implementation and liberate the resources of design and
                            front-end development
                        </Text>
                        .
                    </Paragraph>
                    <Title level={2}>Guidelines and Resources</Title>
                    <Paragraph>
                        We supply a series of design principles, practical patterns and high quality design resources
                        (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
                        prototypes beautifully and efficiently.
                    </Paragraph>

                    <Paragraph>
                        <ul>
                            <li>
                                <a href="/docs/spec/proximity">Principles</a>
                            </li>
                            <li>
                                <a href="/docs/pattern/navigation">Patterns</a>
                            </li>
                            <li>
                                <a href="/docs/resource/download">Resource Download</a>
                            </li>
                        </ul>
                    </Paragraph>

                    <Divider />

                    <Title>介绍</Title>
                    <Paragraph>
                        蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
                    </Paragraph>
                    <Paragraph>
                        随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
                        Ant Design。基于<Text mark>『确定』和『自然』</Text>
                        的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
                        <Text strong>更好的用户体验</Text>。
                    </Paragraph>
                    <Title level={2}>设计资源</Title>
                    <Paragraph>
                        我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和{' '}
                        <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
                    </Paragraph>

                    <Paragraph>
                        <ul>
                            <li>
                                <a href="/docs/spec/proximity">设计原则</a>
                            </li>
                            <li>
                                <a href="/docs/pattern/navigation">设计模式</a>
                            </li>
                            <li>
                                <a href="/docs/resource/download">设计资源</a>
                            </li>
                        </ul>
                    </Paragraph>
                </Typography>

                <hr/>

                <Layout>
                    <Header >Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>


                <hr/>

                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>

                <hr/>

                <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                    <Button>120px to affix top</Button>
                </Affix>


                <hr/>

                <Breadcrumb>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">详情页</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">内容</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>内容一</Breadcrumb.Item>
                </Breadcrumb>




            </div>

        )
    }
}

export default AntOne