// Import necessary modules and classes
import { Test, TestingModule } from '@nestjs/testing';
import { NotesService } from './notes.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';

// Describe the test suite for the NotesService class
describe('NotesService', () => {
  let service: NotesService;

  // Create a mock repository for Note entities
  const mockNotesRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((note) =>
        Promise.resolve({ id: Date.now(), ...note }),
      ),
  };

  // Before each test, create a testing module with the NotesService and the mock repository
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotesService,
        {
          provide: getRepositoryToken(Note),
          useValue: mockNotesRepository,
        },
      ],
    }).compile();

    // Get an instance of the NotesService from the testing module
    service = module.get<NotesService>(NotesService);
  });

  // Test that the NotesService is defined
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Test that the create method of the NotesService creates a new note record and returns it
  it('should create a new note record and return it', async () => {
    // Define a DTO object for the new note
    const dto = {
      title: 'Nota2',
      content: 'Questa è la seconda nota',
    };
    // Call the create method of the NotesService with the DTO object and check that the returned object has the expected properties
    expect(
      await service.create({
        title: dto.title,
        content: dto.content,
      }),
    ).toEqual({
      id: expect.any(Number),
      title: 'Nota2',
      content: 'Questa è la seconda nota',
    });
  });
});
