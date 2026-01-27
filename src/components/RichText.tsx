import React from 'react';
import Image from 'next/image';

interface RichTextBlock {
  type: string;
  children: RichTextChild[];
  level?: number;
  format?: string;
  image?: {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
}

interface RichTextChild {
  type: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  url?: string;
  children?: RichTextChild[];
}

interface RichTextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: RichTextBlock[] | any[] | string | null | undefined;
  className?: string;
}

const renderChild = (child: RichTextChild, index: number): React.ReactNode => {
  if (child.type === 'text') {
    let text: React.ReactNode = child.text || '';

    if (child.bold) text = <strong key={index}>{text}</strong>;
    if (child.italic) text = <em key={index}>{text}</em>;
    if (child.underline) text = <u key={index}>{text}</u>;
    if (child.strikethrough) text = <s key={index}>{text}</s>;
    if (child.code) text = <code key={index} className="bg-gray-100 px-1 rounded text-sm">{text}</code>;

    return text;
  }

  if (child.type === 'link' && child.url) {
    return (
      <a
        key={index}
        href={child.url}
        className="text-gold hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {child.children?.map((c, i) => renderChild(c, i))}
      </a>
    );
  }

  return null;
};

const RichText: React.FC<RichTextProps> = ({ content, className = '' }) => {
  if (!content) {
    return null;
  }

  // Handle string content (markdown or HTML)
  if (typeof content === 'string') {
    return (
      <div
        className={`rich-text prose prose-lg max-w-none ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  if (!Array.isArray(content)) {
    return null;
  }

  // Cast content to RichTextBlock[] for proper typing
  const blocks = content as RichTextBlock[];

  return (
    <div className={`rich-text ${className}`}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="mb-4 leading-relaxed">
                {block.children.map((child, i) => renderChild(child, i))}
              </p>
            );

          case 'heading':
            const HeadingTag = `h${block.level || 2}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
            const headingClasses: Record<number, string> = {
              1: 'text-3xl font-bold mb-6',
              2: 'text-2xl font-bold mb-4 mt-8',
              3: 'text-xl font-semibold mb-3 mt-6',
              4: 'text-lg font-semibold mb-2 mt-4',
              5: 'text-base font-semibold mb-2 mt-4',
              6: 'text-sm font-semibold mb-2 mt-4',
            };
            return (
              <HeadingTag key={index} className={headingClasses[block.level || 2]}>
                {block.children.map((child, i) => renderChild(child, i))}
              </HeadingTag>
            );

          case 'list':
            const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
            const listClass = block.format === 'ordered'
              ? 'list-decimal list-inside mb-4 space-y-2'
              : 'list-disc list-inside mb-4 space-y-2';
            return (
              <ListTag key={index} className={listClass}>
                {block.children.map((child, i) => (
                  <li key={i}>
                    {child.children?.map((c, j) => renderChild(c, j))}
                  </li>
                ))}
              </ListTag>
            );

          case 'quote':
            return (
              <blockquote
                key={index}
                className="border-l-4 border-gold pl-4 italic my-4 text-gray-600"
              >
                {block.children.map((child, i) => renderChild(child, i))}
              </blockquote>
            );

          case 'code':
            return (
              <pre
                key={index}
                className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"
              >
                <code>
                  {block.children.map((child, i) => child.text).join('')}
                </code>
              </pre>
            );

          case 'image':
            if (block.image) {
              return (
                <figure key={index} className="my-6">
                  {block.image.width && block.image.height ? (
                    <Image
                      src={block.image.url}
                      alt={block.image.alternativeText || ''}
                      width={block.image.width}
                      height={block.image.height}
                      className="rounded-lg w-full h-auto"
                    />
                  ) : (
                    <img
                      src={block.image.url}
                      alt={block.image.alternativeText || ''}
                      className="rounded-lg w-full"
                      width={1200}
                      height={675}
                      loading="lazy"
                    />
                  )}
                  {block.image.alternativeText && (
                    <figcaption className="text-sm text-gray-500 mt-2 text-center">
                      {block.image.alternativeText}
                    </figcaption>
                  )}
                </figure>
              );
            }
            return null;

          default:
            return (
              <p key={index} className="mb-4">
                {block.children.map((child, i) => renderChild(child, i))}
              </p>
            );
        }
      })}
    </div>
  );
};

export default RichText;
