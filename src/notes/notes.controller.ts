import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

/**

This is the NotesController class which is responsible for handling HTTP requests related to the Note entity.
It is decorated with the @Controller() decorator and takes in a 'notes' parameter which is the base URL for all the routes in this controller.
It has a constructor that takes in a notesService parameter which is an instance of the NotesService class.
The class has several methods for handling HTTP requests related to creating, finding, updating and deleting notes.
*/
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  /**

This method handles HTTP POST requests to create a new note.

It takes in a createNoteDto parameter which is an object containing the note's title and content.

It calls the create() method of the notesService and passes in the createNoteDto parameter.

It returns the newly created note.
*/
  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  /**

This method handles HTTP GET requests to find all notes.

It calls the findAll() method of the notesService.

It returns an array of all the notes found.
*/
  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  /**

This method handles HTTP GET requests to find a single note by taking in an id parameter.

It calls the findOne() method of the notesService and passes in the id parameter.

It returns the note found.
*/
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  /**

This method handles HTTP PATCH requests to update a note by taking in an id parameter and an updateNoteDto parameter which is an object containing the note's new title and content.

It calls the update() method of the notesService and passes in the id and updateNoteDto parameters.

It returns the updated note.
*/
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  /**

This method handles HTTP DELETE requests to delete a note by taking in an id parameter.

It calls the remove() method of the notesService and passes in the id parameter.

It returns the deleted note.
*/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
