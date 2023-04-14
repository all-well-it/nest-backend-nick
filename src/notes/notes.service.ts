import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

/**

This is the NotesService class which is responsible for handling CRUD operations on the Note entity.
It is decorated with the @Injectable() decorator to indicate that it can be injected as a dependency.
It has a constructor that takes in a notesRepository parameter which is an instance of the Repository class for the Note entity.
The class has several methods for creating, finding, updating and deleting notes.
*/
@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private notesRepository: Repository<Note>,
  ) {}

  /**

This method creates a new note by taking in a createNoteDto parameter which is an object containing the note's title and content.

It creates a new note instance using the create() method of the notesRepository and saves it to the database using the save() method.

It returns the newly created note.
*/
  create(createNoteDto: CreateNoteDto) {
    const newNote = this.notesRepository.create(createNoteDto);
    return this.notesRepository.save(newNote);
  }

  /**

This method finds all notes in the database by calling the find() method of the notesRepository.

It returns an array of all the notes found.
*/
  findAll() {
    return this.notesRepository.find(); // SELECT * FROM notes
  }

  /**

This method finds a single note in the database by taking in an id parameter.

It calls the findOneBy() method of the notesRepository and passes in an object containing the id.

It returns the note found.
*/
  findOne(id: number) {
    return this.notesRepository.findOneBy({ id });
  }

  /**

This method updates a note in the database by taking in an id parameter and an updateNoteDto parameter which is an object containing the note's new title and content.

It calls the findOne() method to find the note to be updated and then merges the new data with the existing note using the spread operator.

It then saves the updated note to the database using the save() method and returns the updated note.
*/
  async update(id: number, updateNoteDto: UpdateNoteDto) {
    const note = await this.findOne(id);
    return this.notesRepository.save({ ...note, ...updateNoteDto });
  }

  /**

This method deletes a note from the database by taking in an id parameter.

It calls the findOne() method to find the note to be deleted and then removes it from the database using the remove() method.

It returns the deleted note.
*/
  async remove(id: number) {
    const note = await this.findOne(id);
    return this.notesRepository.remove(note);
  }
}
