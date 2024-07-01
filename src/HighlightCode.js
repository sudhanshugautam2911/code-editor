import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { Highlight, themes } from "prism-react-renderer";

const exampleCode = `
    #include <iostream>

    using namespace std;

    int main() {
        cout << "Hello, C++!" << endl;
        return 0;
    }
`;

const styles = {
  inputBox: {
    boxSizing: "border-box",
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    background: "#00072D",
    fontSize: "15px",
    width: "40%",
    minHeight: "200px",
    height: "auto",
    caretColor: "white",
  },
  lineNo: {
    display: "tableCell",
    textAlign: "right",
    paddingRight: "1.1em",
    userSelect: "none",
    opacity: "0.5",
  },
};

const SyntaxHighligter = ({ language }) => {
  const [code, setCode] = useState(exampleCode);

  const highlight = (code) => (
    <Highlight theme={themes.shadesOfPurple} code={code} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {/* <span style={styles.lineNo}>{i + 1}</span> */}
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </>
      )}
    </Highlight>
  );

  const onValueChange = (code) => {
    setCode(code);
  };

  return (
    <Editor
      value={code}
      onValueChange={onValueChange}
      highlight={highlight}
      padding={8}
      style={styles.inputBox}
    />
  );
};

export default SyntaxHighligter;
