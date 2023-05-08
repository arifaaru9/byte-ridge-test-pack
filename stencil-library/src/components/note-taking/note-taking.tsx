import { Component,  h, State } from '@stencil/core';

@Component({
  tag: 'note-taking',
  styleUrl: 'note-taking.css',
  shadow: true,
})
export class NoteTaking {

  @State() notes: string[] = [];

  render() {
    return (
      <div>
        <h1>testt</h1>
        <h2>Notes</h2>
        <ul>
          {this.notes.map((note) => (
            <li>{note}</li>
          ))}
        </ul>
        <textarea onInput={(e) => this.addNoteHandler(e)}></textarea>
      </div>
    );
  }

  private addNoteHandler(event: any) {
    const note = event.target.value;
    this.notes = [...this.notes, note];
    event.target.value = '';
  }

}
