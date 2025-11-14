import React from 'react';

const Typography: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-foreground mb-6">Typography</h1>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-foreground mb-4">Headings</h2>
        <h1 className="text-5xl font-bold text-foreground mb-2">Heading 1</h1>
        <h2 className="text-4xl font-bold text-foreground mb-2">Heading 2</h2>
        <h3 className="text-3xl font-bold text-foreground mb-2">Heading 3</h3>
        <h4 className="text-2xl font-bold text-foreground mb-2">Heading 4</h4>
        <h5 className="text-xl font-bold text-foreground mb-2">Heading 5</h5>
        <h6 className="text-lg font-bold text-foreground mb-2">Heading 6</h6>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-foreground mb-4">Paragraph</h2>
        <p className="text-base text-foreground mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-lg text-foreground">
          This is a larger paragraph for emphasis.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-foreground mb-4">Links</h2>
        <a href="#" className="text-primary hover:underline mr-4">Primary Link</a>
        <a href="#" className="text-secondary hover:underline">Secondary Link</a>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-foreground mb-4">Lists</h2>
        <ul className="list-disc list-inside text-foreground mb-4">
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
          <li>Unordered list item 3</li>
        </ul>
        <ol className="list-decimal list-inside text-foreground">
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
          <li>Ordered list item 3</li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-foreground mb-4">Blockquote</h2>
        <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
          "The only way to do great work is to love what you do." - Steve Jobs
        </blockquote>
      </div>
    </div>
  );
};

export default Typography;
