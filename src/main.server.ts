import { bootstrapApplication } from '@angular/platform-browser';
import { PrimeraVistaComponent } from './app/primera-vista/primera-vista.component';

import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(PrimeraVistaComponent, config);

export default bootstrap;
