# cafeteria-ci-cd

Proyecto de practica para implementar un flujo de integracion continua (CI) y
entrega continua (CD) con GitHub Actions.

## Contenido

- `pedido.js`: funcion que calcula el total de un pedido de la cafeteria.
- `pedido.test.js`: pruebas automaticas con el modulo `node:test`.
- `.github/workflows/ci.yml`: workflow de CI-CD (validar y preparar entrega).

## Ejecutar las pruebas

```bash
node --test pedido.test.js
```

Universidad de Cordoba - Arquitectura de Sistemas de Informacion
