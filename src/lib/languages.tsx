import type { FC, SVGProps } from "react";
import { FileCode, FileText } from "lucide-react";

export type Language = {
  id: string;
  name: string;
  extension: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

const HtmlIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 3h16l-1.6 18L12 22l-6.4-1L4 3z" />
    <path d="m9 9 8 0" />
    <path d="m8 13 5 0" />
    <path d="m9 17 2 1 2-1" />
  </svg>
);

const CssIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 3h16l-1.5 14L12 21l-6.5-4L4 3z" />
    <path d="M8 8h8" />
    <path d="M8 12h4" />
    <path d="M8 16h2" />
  </svg>
);

const JavaScriptIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20v-4" />
    <path d="M10 9a2 2 0 1 1 4 0" />
    <path d="M12 16a2 2 0 1 0 0-4h-4a2 2 0 1 0 0 4h4z" />
    <rect width="18" height="18" x="3" y="3" rx="2" />
  </svg>
);

const PythonIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M11 13.5c-2.485 0-4.5-2.015-4.5-4.5S8.515 4.5 11 4.5h2.5c2.485 0 4.5 2.015 4.5 4.5S15.985 13.5 13.5 13.5H11z" />
    <path d="M13 10.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5H10.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5H13z" />
    <circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="13" cy="16.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const JavaIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 10c0-2 1.8-4 4-4 1.5 0 3 1.2 3 3s-1.5 3-3 3H9v6" />
    <path d="M10 16c0 1.1.9 2 2 2s2-.9 2-2" />
    <path d="M4 11h13c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H4v6z" />
  </svg>
);

const CSharpIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 8a2 2 0 1 0-4 0v8a2 2 0 1 0 4 0" />
      <path d="M10 12h4" />
      <path d="M5 10v4" />
      <path d="M3 12h2" />
      <path d="M19 10v4" />
      <path d="M17 12h2" />
    </svg>
);

const RIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a3 3 0 0 1-3-3V5h4" />
      <path d="M10 10a3 3 0 0 1 3 3" />
      <path d="M10 13l4 8" />
    </svg>
);

export const LANGUAGES: Language[] = [
  { id: "plaintext", name: "Plain Text", extension: "txt", Icon: FileText },
  { id: "html", name: "HTML", extension: "html", Icon: HtmlIcon },
  { id: "css", name: "CSS", extension: "css", Icon: CssIcon },
  { id: "javascript", name: "JavaScript", extension: "js", Icon: JavaScriptIcon },
  { id: "python", name: "Python", extension: "py", Icon: PythonIcon },
  { id: "java", name: "Java", extension: "java", Icon: JavaIcon },
  { id: "typescript", name: "TypeScript", extension: "ts", Icon: FileCode },
  { id: "json", name: "JSON", extension: "json", Icon: FileCode },
  { id: "xml", name: "XML", extension: "xml", Icon: FileCode },
  { id: "markdown", name: "Markdown", extension: "md", Icon: FileCode },
  { id: "c", name: "C", extension: "c", Icon: FileCode },
  { id: "csharp", name: "C#", extension: "cs", Icon: CSharpIcon },
  { id: "cpp", name: "C++", extension: "cpp", Icon: FileCode },
  { id: "r", name: "R", extension: "r", Icon: RIcon },
];
