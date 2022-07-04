import { CSSProperties, RefObject, MutableRefObject } from "react";
import { ExploreEditorOptions } from "explore-editor/lib/options";
import { Plugin } from "explore-editor/lib/plugins/Plugin";

export interface ExploreEditorReactProps extends Partial<Omit<ExploreEditorOptions, "lang">> {
  ref?: MutableRefObject<any> | RefObject<any>;
  lang: string;
  customPlugins?: Plugin[] | Record<string, Plugin>;
  onChange?: any;
  setContents?: any;
  textareaId?: string;
  className?: string;
  wrapStyle?: CSSProperties;
}
