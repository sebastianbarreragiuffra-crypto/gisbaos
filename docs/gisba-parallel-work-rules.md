# GISBA OS — Reglas simples de trabajo en paralelo (Claude / Codex)

Este proyecto es una landing comercial; no necesita un workflow Git complejo. El único objetivo es que varios agentes no se pisen al trabajar en paralelo.

## 1. `main` no se usa para desarrollar

La carpeta principal `C:\Users\SEBAS\Desktop\gisbaos` corresponde a `main`. No se editan archivos directamente ahí durante el desarrollo. `main` se usa solo para: integrar trabajo terminado, QA final, push y deploy. Claude y Codex trabajan en ramas/worktrees separados.

## 2. Una tarea = una rama

Cada tarea activa tiene su propia rama/worktree (ejemplos: `motion-v1`, `seo-v1`, `precios-v1`, `performance-v1`). No se crean ramas adicionales sin necesidad. Idealmente: `main`, 1–3 ramas activas y algún WIP excepcional.

## 3. Claude y Codex no comparten worktree

Si Claude trabaja Motion, usa su worktree; si Codex trabaja Hero, usa otro; si otro chat trabaja Precios, usa otro. Nunca dos agentes editando `C:\Users\SEBAS\Desktop\gisbaos` al mismo tiempo.

## 4. Antes de modificar

Cada agente revisa:

```
git status
git branch --show-current
git rev-parse HEAD
git rev-parse origin/main
```

y confirma que NO trabaja directamente en `main` y que su worktree corresponde a su tarea. Si está en `main`: DETENERSE y crear/usar su rama de trabajo antes de editar.

## 5. Terminar una tarea

1. QA
2. commit
3. working tree limpio
4. reportar SHA (por ejemplo: `TASK: Motion V1.1 · COMMIT: bfdf6d5 · QA: pass`)

Después, esperar integración.

## 6. Un solo integrador

Solo un chat/agente integra cambios a `main`. Ese agente: revisa `origin/main`, verifica commits pendientes, integra, resuelve el cache busting, hace QA y hace push. Los demás agentes NO persiguen `main` mientras trabajan.

## 7. Cache busting

Las ramas de trabajo no compiten por el número de `styles.css?v=XX`. El número final se decide durante la integración.

## 8. Cambios desconocidos

Si aparece un cambio que nadie reconoce: NO borrarlo, integrarlo, resetearlo ni sobrescribirlo. Primero identificarlo. Si hay que conservarlo, guardarlo en `wip/<nombre>`, sin llevarlo automáticamente a producción.

## 9. Deploy

Nunca desplegar desde un working tree DIRTY. Deploy únicamente desde `main` limpio o desde una extracción exacta del commit aprobado (por ejemplo `git archive <sha> dist`). Si la carpeta principal tiene cambios sin commit, NO usarla para deploy.

## 10. Después de integrar

Cuando una rama ya esté integrada, validada y publicada, se puede eliminar su worktree y su rama. No acumular ramas viejas.

## 11. Regla para Codex

Codex NO edita directamente `C:\Users\SEBAS\Desktop\gisbaos` si `main` está ahí. Trabaja en su propio worktree. Si detecta que está en `main`: DETENERSE antes de editar.

## 12. Regla para Claude

Si Claude detecta cambios ajenos o que `main` cambia durante el trabajo: NO intenta arreglarlos. Termina su tarea en su rama y deja la integración para después.

## 13. Condición de parada

Si la tarea está commiteada, el QA pasa y el working tree de la rama está limpio: DETENERSE. No abrir nuevos cambios automáticamente.

## 14. Vista previa unica

Para ver siempre lo ultimo integrado sin abrir links distintos, usar un solo comando (sirve `origin/main` en `http://127.0.0.1:4173` y se actualiza solo):

```
powershell -ExecutionPolicy Bypass -File tools\preview.ps1
```

Opciones: `-Ref release/v1` (ver el tag aprobado), `-Ref <rama>` (ver una rama), `-Port <n>`, `-Open`. El commit mostrado aparece en la consola y en `/__build.txt`. No modifica el repositorio. Los agentes no levantan otros servidores de vista previa.
