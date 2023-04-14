// Import necessary modules and classes
import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

// Describe the test suite for the NotesController class
describe('NotesController', () => {
  let controller: NotesController;

  // Create a mock NotesService with create and update methods
  const MockNotesService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    update: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto,
    })),
  };

  // Before each test, create a testing module with the NotesController and the mock NotesService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
    })
      .overrideProvider(NotesService)
      .useValue(MockNotesService)
      .compile();

    // Get an instance of the NotesController from the testing module
    controller = module.get<NotesController>(NotesController);
  });

  // Test that the NotesController is defined
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Test that the create method of the NotesController creates a new note and returns it
  it('should create a note', () => {
    // Define a DTO object for the new note
    const dto = {
      title: 'Nota1',
      content: 'Questa è una nota di prova',
    };
    // Call the create method of the NotesController with the DTO object and check that the returned object has the expected properties
    expect(controller.create(dto)).toEqual({
      id: expect.any(Number),
      title: dto.title,
      content: dto.content,
    });

    // Check that the create method of the mock NotesService was called with the DTO object
    expect(MockNotesService.create).toHaveBeenCalledWith(dto);
  });

  // Test that the update method of the NotesController updates a note and returns it
  it('should update a note', () => {
    // Define a DTO object for the updated note
    const dto = {
      title: 'Nota1',
      content: 'Questa è una nota di prova',
    };
    // Call the update method of the NotesController with an ID and the DTO object and check that the returned object has the expected properties
    expect(controller.update('1', dto)).toEqual({
      id: 1,
      ...dto,
    });

    // Check that the update method of the mock NotesService was called
    expect(MockNotesService.update).toHaveBeenCalled();
  });
});
