# Ejemplo de implementación de librería react-router-dom

Pasos:

1) Instalar la librería
    npm install react-router-dom

2) Importar componentes para el funcionamiento de rutas.
    - BrowserRouter -> Colocar a nivel superior (App.js)

3) Crear componente contenedor de rutas. En este caso fué en shared / Routes.js (Podría ser otra carpeta). En lugar de crear muchos componentes Route para cada ruta, creamos un array de rutas con objetos literales que contienen las propiedades:
        - path: string con la ruta que se matcheará con el componente
        - component: componente JSX con el componente a renderizar
        - exact (solo en el home): Para evitar problemas de ruteo

    - Luego iteramos sobre este array para renderizar el componente <Route>

4) Importamos componente rutas donde querramos utilizarlo. (En este caso en <ContentWrapper> )

5) Para permitir navegación SPA, agregramos componentes <Link>, que actualizarán ruta sin actualizar página
    <Link to="/ruta" > <Contenido Html> </Link>
    (Esto podría hacerse desde un array, por ejemplo, moviendo el array de rutas utilizado en <Routes> a un archivo externo que exporte el array y se importe en ambos componentes)

6) Para tener una página not found, agregamos ruta a nuestro array con key path y valor "*", que servirá para matchear cualquier path (si no matcheó uno aún)