import React, { useState } from "react";
import Image from "next/image";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor as DraftEditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Icon = () => {
  return <Image src="/next.svg" alt="" width={10} height={10} />;
};

const WysiWigEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty() // Initial empty editor state
  );

  const handleEditorStateChange = (state: EditorState) => {
    setEditorState(state);
  };

  // Function to convert editor content to JSON
  const getContentAsJSON = () => {
    const contentState = editorState.getCurrentContent();
    const contentRaw = convertToRaw(contentState);
    return JSON.stringify(contentRaw);
  };

  // Function to set editor content from JSON
  const setContentFromJSON = (jsonString: string) => {
    const contentRaw = JSON.parse(jsonString);
    const contentState = convertFromRaw(contentRaw);
    setEditorState(EditorState.createWithContent(contentState));
  };

  return (
    <div>
      <DraftEditor
        editorState={editorState}
        // toolbarHidden

        toolbar={{
          link: {
            options: ["link"],
            link: { icon: <Icon /> },
          },
          textAlign: {
            inDropdown: true,
          },
          options: ["image", "link", "textAlign", "emoji"],
        }}
        onEditorStateChange={handleEditorStateChange}
      />
      <button onClick={() => console.log(getContentAsJSON())}>
        Get Content as JSON
      </button>
      <button
        onClick={() =>
          setContentFromJSON(
            '{"blocks":[{"key":"abcde", "text":"Hello, WysiWig!", "type":"unstyled", "depth":0, "inlineStyleRanges":[], "entityRanges":[], "data":{}}],"entityMap":{}}'
          )
        }
      >
        Set Content from JSON
      </button>
    </div>
  );
};

export default WysiWigEditor;
