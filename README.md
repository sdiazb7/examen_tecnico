# Para instalar este proyecto:
Editar el archivo .env para asignar la base de datos.
# Instalar dependencias:
npm install
# Crear tablas:
npx sequelize-cli db:migrate
# Crear seeder de usuario administrador y roles:
npx sequelize-cli db:seed:all
# Los accesos del usuario administrador por defecto son los siguientes:
correo:dana@gmail.es
contraseña:123456
