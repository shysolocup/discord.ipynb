"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(async () => {
    const app = await import('./discord.ipynb/build/index');
    console.log(app.read());
})();
