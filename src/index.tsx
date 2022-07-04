import React, { useEffect, useCallback, useRef } from "react";
import ExploreEditor from "explore-editor";
import plugins from "explore-editor/lib/plugins";
import "explore-editor/lib/assets/css/editor.css";
import "explore-editor/lib/assets/css/editor-contents.css";
import getLanguage from "./getLanguage";

import { ExploreEditorReactProps } from "./types";

const ReactEditor: React.FC<ExploreEditorReactProps> = (props: ExploreEditorReactProps) => {
  const editor: any = useRef(null);
  const ExploreEditorTextareaId = props.textareaId || "textarea-" + Math.floor(Math.random() * 999);

  const { customPlugins, lang, onChange, setContents } = props;

  const appendCustomPlugins = useCallback(() => {
    if (customPlugins && Array.isArray(customPlugins) && customPlugins.length) {
      customPlugins.forEach((customPlugin: any) => {
        plugins[customPlugin.name] = customPlugin;
      });
    }
    return plugins;
  }, [customPlugins]);

  useEffect(() => {
    appendCustomPlugins();

    editor.current = ExploreEditor.create(editor.current, {
      ...props,
      lang: getLanguage(lang),
      plugins: plugins,
    });

    if (onChange) {
      editor.current.onChange = onChange;
    }

    if (setContents) {
      editor.current.setContents(setContents);
    }

    return () => {
      if (editor.current) {
        editor.current.destroy();
      }
    };
  }, [appendCustomPlugins, props, onChange, setContents, lang]);

  return <textarea ref={editor} id={ExploreEditorTextareaId} />;
};

export default ReactEditor;
