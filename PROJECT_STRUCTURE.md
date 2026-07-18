# Estructura del Proyecto - Factou

## 📁 Estructura General

```
src/
├── app/
│   ├── core/                          # Módulo principal (singleton services)
│   │   ├── guards/                    # Route guards (autenticación, etc)
│   │   ├── interceptors/              # HTTP interceptors
│   │   ├── services/
│   │   │   └── logger.service.ts      # Servicio de logging
│   │   └── core.config.ts             # Configuración de proveedores
│   │
│   ├── shared/                        # Componentes, directives, pipes compartidos
│   │   ├── components/
│   │   │   └── header.component.ts
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── models/
│   │
│   ├── features/                      # Features/módulos funcionales
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── services/
│   │   │   │   └── dashboard.service.ts
│   │   │   ├── models/
│   │   │   │   └── dashboard.model.ts
│   │   │   └── dashboard.routes.ts
│   │   └── auth/
│   │       ├── components/
│   │       ├── services/
│   │       └── auth.routes.ts
│   │
│   ├── layout/                        # Layout general
│   │   └── components/
│   │       └── main-layout.component.ts
│   │
│   ├── app.ts                         # Component raíz
│   ├── app.routes.ts                  # Rutas principales
│   └── app.config.ts                  # Configuración de la aplicación
│
├── assets/                            # Recursos estáticos
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── environments/                      # Variables de ambiente
│   ├── environment.ts                 # Desarrollo
│   └── environment.prod.ts            # Producción
│
├── styles/                            # Estilos globales
│   ├── reset.scss                     # Reset CSS
│   ├── variables.scss                 # Variables de SCSS
│   ├── global.scss                    # Estilos globales
│   └── responsive.scss                # Media queries (opcional)
│
├── main.ts
├── styles.scss
└── index.html
```

## 🏗️ Principios de Arquitectura

### 1. **Core Module**
- Servicios singleton (se crean una sola vez)
- Guards para proteger rutas
- HTTP Interceptors
- Configuración global

**Ejemplo:**
```typescript
// core/services/logger.service.ts
@Injectable({ providedIn: 'root' })
export class LoggerService { ... }

// core/core.config.ts
export const CORE_PROVIDERS: Provider[] = [LoggerService];
```

### 2. **Shared Module**
- Componentes reutilizables (Header, Footer, etc)
- Directivas personalizadas
- Pipes personalizados
- Modelos compartidos

**Ejemplo:**
```typescript
// shared/components/header.component.ts
@Component({
  selector: 'app-header',
  standalone: true,
  ...
})
export class HeaderComponent { ... }
```

### 3. **Features**
Cada feature (funcionalidad) tiene su propia carpeta con:
- **components/**: Componentes específicos de la feature
- **services/**: Servicios específicos de la feature
- **models/**: Interfaces/tipos específicos
- **routes.ts**: Rutas del feature (lazy loading)

**Ejemplo de una feature:**
```typescript
src/app/features/dashboard/
├── components/
│   └── dashboard.component.ts
├── services/
│   └── dashboard.service.ts
├── models/
│   └── dashboard.model.ts
└── dashboard.routes.ts
```

**En app.routes.ts - Lazy Loading:**
```typescript
children: [
  {
    path: 'dashboard',
    loadChildren: () => Promise.resolve(DASHBOARD_ROUTES),
  }
]
```

### 4. **Layout**
- Componentes de diseño (header, sidebar, footer)
- MainLayoutComponent que envuelve las rutas

## 📋 Buenas Prácticas Implementadas

✅ **Standalone Components** - Angular 22 standalone components
✅ **Lazy Loading** - Features cargados bajo demanda
✅ **Separación de Concerns** - Cada carpeta tiene una responsabilidad
✅ **Servicios Singleton** - Provistos en 'root'
✅ **Type Safety** - Interfaces para modelos de datos
✅ **Estilos Organizados** - SCSS con variables globales
✅ **Configuración de Ambientes** - Diferente para dev/prod
✅ **Logger Service** - Centralizado para debug

## 🚀 Cómo Usar

### Agregar una Nueva Feature
1. Crear carpeta en `features/`
2. Crear subcarpetas: `components/`, `services/`, `models/`
3. Crear `feature.routes.ts`
4. Agregar ruta lazy-loaded en `app.routes.ts`

```typescript
// Ejemplo: Feature de usuarios
{
  path: 'users',
  loadChildren: () => 
    import('./features/users/users.routes').then(m => m.USERS_ROUTES),
}
```

### Agregar un Componente Compartido
1. Crear en `shared/components/`
2. Hacer standalone
3. Importar donde sea necesario

```typescript
import { HeaderComponent } from '../../shared/components/header.component';

@Component({
  imports: [HeaderComponent],
  ...
})
```

### Agregar un Guard
1. Crear en `core/guards/`
2. Implementar CanActivate
3. Agregar en rutas

```typescript
// core/guards/auth.guard.ts
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return true;
  }
}

// En rutas
{ path: 'admin', canActivate: [AuthGuard], ... }
```

## 📦 Convenciones de Nombres

- **Componentes**: `nombre.component.ts` → `NombreComponent`
- **Servicios**: `nombre.service.ts` → `NombreService`
- **Guards**: `nombre.guard.ts` → `NombreGuard`
- **Pipes**: `nombre.pipe.ts` → `NombrePipe`
- **Modelos**: `nombre.model.ts` → interfaces/types
- **Rutas**: `nombre.routes.ts` → `NOMBRE_ROUTES`

## 🎯 Próximos Pasos Recomendados

1. **Agregar Auth Feature** con login/registro
2. **Crear Guards** para proteger rutas autenticadas
3. **Implementar HTTP Interceptor** para manejo de tokens
4. **Agregar formularios reactivos** con validación
5. **Conectar API backend** usando servicios HTTP
6. **Implementar estado global** (NgRx o Signals)
7. **Agregar temas y estilos** más completos
8. **Testing** con Vitest/Jasmine

## 💡 Comandos Útiles

```bash
# Generar componente nuevo
ng generate component features/dashboard/components/stats

# Generar servicio
ng generate service core/services/api

# Generar guard
ng generate guard core/guards/auth

# Build producción
npm run build

# Correr en desarrollo
npm start

# Ejecutar tests
npm test
```
