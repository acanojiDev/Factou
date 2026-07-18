import { Provider } from '@angular/core';
import { LoggerService } from './services/logger.service';

/**
 * Proveedores principales para servicios singleton
 * Se proporcionan una sola vez en toda la aplicación
 */
export const CORE_PROVIDERS: Provider[] = [LoggerService];
