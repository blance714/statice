import { addNote } from "api/promise/anki/addNote";
import { useDeckNames } from "api/swr/anki/useDeckNames";
import { useModelFieldNames } from "api/swr/anki/useModelFieldNames";
import { useModelNames } from "api/swr/anki/useModelNames";
import { Button, Col, Form, Layout, Row, Select, Space, Spin, Toast } from "@douyinfe/semi-ui";

import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { SearchResultNote } from "models/config/anki";
import useSWR from "swr";
import Agent from "tools/agent";
import { FormApi } from "@douyinfe/semi-ui/lib/es/form";

export function AnkiAddNote({ onClose, searchResultNote }: { onClose?: () => void, searchResultNote?: SearchResultNote }) {
  const { data: config, isValidating } = useSWR(`/api/config`, () => Agent.storageGet("config"));

  const { deckNames } = useDeckNames();
  const { modelNames } = useModelNames();
  const [ nowDeck, setNowDeck ] = useState("");
  const [ nowModelName, setNowModelName ] = useState("");

  const { modelFieldNames } = useModelFieldNames(nowModelName);

  const [ formData, setFormData ] = useState<{ [key: string]: string }>({});
  const _addNote = () => {
    console.log('[AnkiAddnote addNote]', formData);
    addNote({
      deckName: nowDeck,
      modelName: nowModelName,
      fields: formData
    })
      .then(() => Toast.success('Successfully added to ANKI'))
      .catch(() => Toast.error('Failed to add to ANKI'));
    onClose && onClose();
  }

  useEffect(() => {
    console.log("AnkiAddNote config", config, isValidating);
    if (!isValidating) {
      setNowDeck(config?.ankiAddNoteSelection.deck || "");
      setNowModelName(config?.ankiAddNoteSelection.model || "");
    }
  }, [config, isValidating]);

  const formApi = useRef<FormApi>();
  const [formKey, setFormKey] = useState(0);
  const [formValue, setFormValue] = useState<{ [key: string]: string }>({});
  useEffect(() => {
    console.log("AnkiAddNote useEffect", config, nowModelName, config?.ankiNoteFillRules);
    if (searchResultNote && config?.ankiNoteFillRules[nowModelName]) {
      let value = {};
      for (const key in config.ankiNoteFillRules[nowModelName]) {
        console.log(key, config.ankiNoteFillRules[nowModelName][key]);
        value[config.ankiNoteFillRules[nowModelName][key]] = searchResultNote[key];
      }
      setFormValue(value);
      setFormData(value);
      setFormKey(v => v + 1);
    }
  }, [searchResultNote, nowModelName, config]);

  useEffect(() => {
    !isValidating && (
      nowDeck !== config?.ankiAddNoteSelection.deck
      || nowModelName !== config?.ankiAddNoteSelection.model
      ) && Agent.configSet({
      ankiAddNoteSelection: {
        deck: nowDeck,
        model: nowModelName
      }
    });
  }, [isValidating, config, nowDeck, nowModelName]);

  const { Header, Content, Footer } = Layout;

  const deckOptions = deckNames ? deckNames.map((deckName) => ({ label: deckName, value: deckName })) : [];
  const modelOptions = modelNames ? modelNames.map((modelName) => ({ label: modelName, value: modelName })) : [];

  return (
    <Layout className="anki-add-note-panel">
      <Header className="anki-add-note-header">Add note to Anki</Header>
      <Content className="anki-add-note-content">
        { !config || isValidating ? <Spin />
          : <Space spacing={'tight'} style={{ width: '100%' }} vertical>
          <Select className="anki-add-note-select" insetLabel="Deck" placeholder="Select deck..." optionList={deckOptions}
          defaultValue={ config?.ankiAddNoteSelection.deck } onChange={v => { setNowDeck(v ? v as string : ""); } } />
          <Select className="anki-add-note-select" insetLabel="Model" placeholder="Select model..." optionList={modelOptions}
          defaultValue={ config?.ankiAddNoteSelection.model } onChange={v => { setNowModelName(v ? v as string : ""); }} />
          <Form key={`formKey-${formKey}`} getFormApi={api => formApi.current = api} style={{ width: '100%' }} onValueChange = {v => setFormData(v)} initValues={formValue}>
            {modelFieldNames && modelFieldNames.map((fieldName) => 
              <Form.Input className="anki-add-note-input" field={fieldName}/>
            )}
          </Form>
        </Space>
          }
      </Content>
      <Footer className="anki-add-note-footer">
        <Row gutter={8} type="flex" justify="end">
          <Col><Button type="danger" onClick={onClose}>Cancel</Button></Col>
          <Col><Button theme="solid" type="primary" onClick={_addNote}>
            Add Note
          </Button></Col>
        </Row>
      </Footer>
    </Layout>
  );
}