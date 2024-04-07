import GuacamoleLite from 'guacamole-lite';
import dotenv from 'dotenv';

dotenv.config();

const websocketOptions = {
    port: 8080
};

const guacdOptions = {
    host: 'guacd',
    port: 4822
};

const clientOptions = {
    crypt: {
        cypher: process.env.CYPHER,
        key: process.env.KEY 
    }
};

const guacServer = new GuacamoleLite(websocketOptions, guacdOptions, clientOptions);