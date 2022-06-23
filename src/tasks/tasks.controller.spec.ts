import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

describe('TasksController', () => {
  let controller: TasksController;

  const mockTasksService = {
    create: jest.fn((dto) => {
      return {
        _id: Date.now(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    })
      .overrideProvider(TasksService)
      .useValue(mockTasksService)
      .compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a task', () => {
    const dto = {
      nome: 'primeira tarefa',
      data_de_execucao: new Date('2022-06-22'),
      situacao: 'pendente',
      prioridade: 'alta',
      data_de_conclusao: new Date('2022-06-30'),
    };
    expect(controller.create(dto)).toEqual({
      nome: 'primeira tarefa',
      data_de_execucao: new Date('2022-06-22'),
      situacao: 'pendente',
      prioridade: 'alta',
      data_de_conclusao: new Date('2022-06-30'),
      _id: expect.any(Number),
    });
    expect(mockTasksService.create).toHaveBeenCalledWith(dto);
  });
});
