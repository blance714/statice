import { Button, Form, Layout, Select, Space, Spin, Typography } from "@douyinfe/semi-ui";
import { useModelFieldNames } from "api/swr/anki/useModelFieldNames";
import { useModelNames } from "api/swr/anki/useModelNames";
import { Config } from "models/config";
import { defaultConfig } from "models/config/default";
import { useEffect, useState } from "react";
import Agent from "tools/agent";
import { setConfig } from "tools/config";

function Options() {
  const { Header, Content, Sider } = Layout;

  const [ tempConfig, setTempConfig ] = useState<Config | undefined>(undefined);
  useEffect(() => {
    Agent.storageGet("config").then(config => setTempConfig(config));
  }, []);

  const { modelNames } = useModelNames();
  const [ nowModelName, setNowModelName ] = useState("");
  const { modelFieldNames } = useModelFieldNames(nowModelName);
  const modelOptions = modelNames ? modelNames.map((modelName) => ({ label: modelName, value: modelName })) : [];
  const fieldOptions = modelFieldNames ? modelFieldNames.map((fieldName) => ({ label: fieldName, value: fieldName })) : [];
  const ankiPage = 
  <>
    <Space vertical align="start">
      <Typography.Title heading={5}>Anki note auto fill rules</Typography.Title>
      <Select optionList={modelOptions} onChange={v => setNowModelName(v as string)} placeholder="Select a model..."/>
      <Form onValueChange={v => setTempConfig({...tempConfig!, ...v})} initValues={ tempConfig }>
        {modelNames?.map((modelName) => (
          <div style={{display: modelName === nowModelName ? 'block' : 'none'}}>
            {['spell', 'meaning', 'accent', 'pron', 'pronAccent', 'type', 'sentence', 'translate'].map((key) => 
              <Form.Select field={`ankiNoteFillRules.${modelName}.${key}`} optionList={fieldOptions} 
                noLabel insetLabel={key} showClear/>
            )}
          </div>
        ))}
      </Form>
    </Space>
  </>

  const saveConfig = () => {
    Agent.configSet(tempConfig!);
  }

  return (
    <Layout>
      <Header>Options</Header>
      <Layout>
        <Sider></Sider>
        {
          tempConfig === undefined
          ? <Spin />
          : <Content>
              <Form onValueChange={console.log} initValues={tempConfig}>
                {({ values }) => ankiPage}
              </Form>
              <Button theme='solid' onClick={saveConfig}>Save</Button>
            </Content>
        }
      </Layout>
    </Layout>
  )
}

export default Options;