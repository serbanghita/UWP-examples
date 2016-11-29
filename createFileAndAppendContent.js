function createFile() {
    let localFolder = Windows.Storage.ApplicationData.current.localFolder;
    localFolder.createFolderAsync("log", Windows.Storage.CreationCollisionOption.openIfExists).then(() => {
        localFolder.createFileAsync("log\\serban.txt", Windows.Storage.CreationCollisionOption.replaceExisting).then((file) => {
            Windows.Storage.FileIO.appendTextAsync(file, "serban ghita").done(() => {
                console.warn("Worked ...");
            },
            (error) => {
                console.log(error);
            });
        }, (error) => {
            console.log(error);
        });
    }, (error) => {
        console.log(error);
    });
}
