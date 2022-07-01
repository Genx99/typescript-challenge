"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require('fs/promises');
const leerArchivo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const archivo = yield fs.readFile('./data.txt');
        let data = JSON.parse(archivo.toString());
        console.log("data");
        console.log(data);
        console.log('successfully read');
        return data.map((elem, index) => {
            return Object.assign(Object.assign({}, elem), { id: index });
        });
    }
    catch (err) {
        // handle the error
        console.error(err);
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    let arch = yield leerArchivo();
    console.log(arch);
}))();
