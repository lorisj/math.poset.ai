"use client";
import { Editor } from "@monaco-editor/react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

type Monaco = typeof monaco;

function beforeMount(monaco: Monaco) {
  //TODO: register stuff like languages here
  console.log("before mount", monaco);
}
export default function BasicEditor() {
  return <Editor beforeMount={beforeMount} />;
}
