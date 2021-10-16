# stateful-app

Hola en este repo encontraras la implementación básica de una Stateful App en React. Esta contiene un input de tipo texto en el cual al escribir tu nombre se mostrará en el párrafo de abajo y se guardara en memoria; así, al refrescar la página el párrafo seguirá diciendo tu nombre, aunque no tenga contenido el input. Antes necesitamos responder algunos puntos:


1. Una app web por default es _stateless_.
2. Todos aquellos eventos que el usuario no comienza, se consideran _efectos_   _secundarios_.
3. Para controlar dichos eventos _secundarios_ se utiliza _useEffect_.
4. Algunas maneras de persistir información son: bases de datos y _Localstorage_.
5. Para transformar cualquier tipo de valor en JS a strings, se utiliza JSON.stringify() y para regresar de string al tipo de valor original, se utiliza _JSON.parse()_.

Así luce la aplicación:
![alt text](https://github.com/Dona0w0/stateful-app/blob/main/SS.png)

Y asi funciona:
![image](https://github.com/Dona0w0/stateful-app/blob/main/preview.gif)
