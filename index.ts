(async () => {
    const app = await import('./discord.ipynb/build/index');

    console.log(app.read());
})();