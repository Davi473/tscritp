# Runnig localhost
    npm install
    npm install typescript
    npm run start 

# Config TS
    {
    "compilerOptions": {
        "outDir": "dist/js",
        "target": "ES6",
        "noEmitOnError": true,
        "noImplicitAny": true
    },
        "include": ["app/**/*"]
    }

### Local da compilação
    "outDir": "dist/js"
### Arquivos para ser compilados 
    "include": ["app/**/*"]
### Verção do JS
    "target": "ES6"

### Avisar erro de escrita 
    "noEmitOnError": true
    
### Declarar uma variavel sempre com um tipo
    "noImplicitAny": true

### Remover comentarios na hora da compilação 
    "removeComments": true

### Te obriga a tratar lugares que podem retorna null

Diz para o compilador TSC que pare de assumir implicitamente o tipo null para todos os tipos da aplicação. Caso null faça sentido, o desenvolvedor deve deixar isso explícito em seu código. Inclusive o StrictNullChecks obrigará o desenvolvedor a tratar todos os pontos de acesso a valores null em sua aplicação, forçando que o desenvolvedor pondere com cuidado

    "strictNullChecks": true