import parse, { attributesToProps, domToReact, type HTMLReactParserOptions } from "html-react-parser";
import type { DOMNode } from "html-dom-parser";
import { ElementType } from "domelementtype";
import type { Element as DomElement } from "domhandler";
import Link from "next/link";
import { htmlHrefToAppPath } from "@/lib/htmlHrefToAppPath";

const parserOptions: HTMLReactParserOptions = {
  replace(domNode) {
    if (domNode.type !== ElementType.Tag) return;
    const el = domNode as DomElement;
    if (el.name !== "a") return;
    const href = el.attribs?.href;
    if (href == null || href === "") return;
    const appPath = htmlHrefToAppPath(href.trim());
    if (appPath === null) return;
    const props = attributesToProps(el.attribs) as Record<string, unknown>;
    delete props.href;
    return (
      <Link href={appPath} {...props}>
        {domToReact(el.children as DOMNode[], parserOptions)}
      </Link>
    );
  },
};

export function TemplatePageBody({ html }: { html: string }) {
  return <div style={{ display: "contents" }}>{parse(html, parserOptions)}</div>;
}
