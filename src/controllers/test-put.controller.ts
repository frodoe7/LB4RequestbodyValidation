import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  model,
  property
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';

import {TestRepository} from '../repositories';

@model()
class idAndAge {
  @property()
   id : string
  
  @property()
  age : number
}

export class TestPutController {
  constructor(
    @repository(TestRepository)
    public testRepository : TestRepository,
  ) {}

  @put('/tests', {
    responses: {
      '204': {
        description: 'Test PUT success',
      },
    },
  })
  async replaceById(
    @requestBody() test: idAndAge,
  ): Promise<void> {
    await this.testRepository.updateAll(test,{id : test.id});
  }
}
