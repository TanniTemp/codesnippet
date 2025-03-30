import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";


const CodeBlock = ({ listItems }: { listItems: number }) => {
  const codeString = `const getProblems = (): string[] => {
  return [
    "Searching for old snippets",
    "Writing the same code repeatedly",
    "Messy, unorganized code storage",
    "Sending code snippets via Slack/Notion/Google Docs",
  ];
};

export default getProblems;`;

  return (
    <SyntaxHighlighter
      language="typescript"
      style={oneDark}
      className={`absolute text-xs leading-[1rem] md:text-md lg:text-xl transition-opacity duration-300 ${
        listItems === 0
          ? "opacity-100 relative"
          : "opacity-0 absolute z-1 pointer-events-none"
      }`}
      customStyle={{
        padding: "1rem",
        borderRadius: "8px",
        fontSize: "0.9rem",
        backgroundColor: "#282c34",
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
