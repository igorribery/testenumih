# Define a imagem base que será usada
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todos os arquivos do diretório atual para o diretório de trabalho
COPY . .

# Build do projeto React
RUN npm run build

# Define a porta que será exposta
EXPOSE 3000

# Define o comando padrão que será executado quando o contêiner for iniciado
CMD ["npm", "run", "dev"]