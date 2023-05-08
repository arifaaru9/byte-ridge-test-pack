import { newE2EPage } from '@stencil/core/testing';

describe('note-taking', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<note-taking></note-taking>');

    const element = await page.find('note-taking');
    expect(element).toHaveClass('hydrated');
  });
});
