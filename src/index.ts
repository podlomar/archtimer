import './style.css';
import { Timer } from './timer/model';
import { initController } from './timer/controller';
import { updateView } from './timer/view';

const timer = new Timer(5, 0, updateView);
initController(timer, updateView);
