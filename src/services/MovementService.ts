import moment from 'moment';
import {API_BASE_URL} from '../config/index';
import {Movement, MovementDTO} from '../interfaces/Movement';
import 'moment/locale/es-mx';

moment.locale('es-mx');

export class MovementService {
  constructor() {}

  async getAllMovements(): Promise<Movement[]> {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();

    return data.map((mov: MovementDTO) => this.toDTO(mov));
  }

  toDTO(input: MovementDTO): Movement {
    const createdAt = moment(input.createdAt).format('DD [de] MMMM, YYYY');

    return {
      id: input.id,
      description: input.product,
      amount: input.points,
      imageUrl: input.image,
      isPositive: input.is_redemption,
      createdAt,
    };
  }
}
