import { addNote } from "api/promise/anki/addNote";
import { useDeckNames } from "api/swr/anki/useDeckNames";
import { useModelFieldNames } from "api/swr/anki/useModelFieldNames";
import { useModelNames } from "api/swr/anki/useModelNames";
import { Button, Col, Form, Layout, Row, Select, Space } from "@douyinfe/semi-ui";

import "./index.scss";
import { useRef, useState } from "react";
import { useConfig } from "tools/config";

export function AnkiAddNote(props) {
  const { config } = useConfig();

  const { deckNames } = useDeckNames();
  const { modelNames } = useModelNames();
  const [ nowDeck, setNowDeck ] = useState("");
  const [ nowModelName, setNowModelName ] = useState("");

  const { modelFieldNames, error } = useModelFieldNames(nowModelName);

  const [ formData, setFormdata ] = useState<{ [key: string]: string }>({});
  const _addNote = () => {
    addNote({
      deckName: nowDeck,
      modelName: nowModelName,
      fields: formData
    });
  }

  const { Header, Content, Footer } = Layout;

  const deckOptions = deckNames ? deckNames.map((deckName) => ({ label: deckName, value: deckName })) : [];
  const modelOptions = modelNames ? modelNames.map((modelName) => ({ label: modelName, value: modelName })) : [];

  return (
    <Layout className="anki-add-note-panel">
      <Header className="anki-add-note-header">Add note to Anki</Header>
      <Content className="anki-add-note-content">
        <Space spacing={'tight'} style={{ width: '100%' }} vertical>
          <Select className="anki-add-note-select" insetLabel="Deck" placeholder="Select deck..." optionList={deckOptions}
            onChange={v => setNowDeck(v ? v as string : "")} />
          <Select className="anki-add-note-select" insetLabel="Model" placeholder="Select model..." optionList={modelOptions}
            defaultValue={config.ankiAddNoteSelection.model} onChange={v => setNowModelName(v ? v as string : "")} />
          <Form style={{ width: '100%' }} onValueChange = {v => setFormdata(v)}>
            {modelFieldNames && modelFieldNames.map((fieldName) => 
              <Form.Input className="anki-add-note-input" field={fieldName}/>
            )}
          </Form>
        </Space>
      </Content>
      <Footer className="anki-add-note-footer">
        <Row gutter={8} type="flex" justify="end">
          <Col><Button type="danger">Cancel</Button></Col>
          <Col><Button theme="solid" type="primary" onClick={_addNote}>
            Add Note
          </Button></Col>
        </Row>
      </Footer>
    </Layout>
  );
}