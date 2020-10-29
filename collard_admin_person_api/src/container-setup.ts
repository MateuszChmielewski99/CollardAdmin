import { container } from 'tsyringe';
import { DirectorRepositry } from './repositories/Director/DirectorRepositry';


export const bootstrap = () => {
  container.register('IDirectorRepository', {
    useClass: DirectorRepositry,
  });
};
