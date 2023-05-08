import { newSpecPage } from '@stencil/core/testing';
import { NoteTaking } from '../note-taking';

describe('note-taking', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NoteTaking],
      html: `<note-taking></note-taking>`,
    });
    expect(page.root).toEqualHtml(`
      <note-taking>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </note-taking>
    `);
  });
});
