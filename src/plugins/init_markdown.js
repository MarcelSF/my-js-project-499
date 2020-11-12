import MarkdownIt from 'markdown-it'; // Import from NODE MODULES

const initMarkdown = () => { // Configure our initialize markdown function
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');

  const markdown = new MarkdownIt();
  textarea.addEventListener('keyup', (event) => {
    const html = markdown.render(textarea.value);
    preview.innerHTML = html;
  });
};

export { initMarkdown }; // Export the initialize markdown function
