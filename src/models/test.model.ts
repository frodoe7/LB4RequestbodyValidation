import {Entity, model, property} from '@loopback/repository';

@model()
export class Test extends Entity {
  @property({
    id: true,
    type: 'string',
    required: false,
    mongo: {
      columnName: '_id',
      dataType: 'ObjectID',
    },
  })
  id: string;
  
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
  })
  age?: number;


  constructor(data?: Partial<Test>) {
    super(data);
  }
}
